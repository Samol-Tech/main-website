"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { prisma } from "@/lib/prisma";

const submissionSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name."),
  email: z.email("Please enter a valid email address."),
  phone: z.string().optional().or(z.literal("")),
  inquiryType: z.string().min(1),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

// Verifies the Turnstile widget's response token server-side. Never trust a
// token's mere presence — it has to be checked against Cloudflare on every
// submit, using the secret key (never exposed to the browser).
async function verifyTurnstile(token: string | null): Promise<boolean> {
  if (!token) return false;

  const secretKey = process.env.TURNSTILE_SECRET_KEY;
  if (!secretKey) {
    throw new Error("TURNSTILE_SECRET_KEY is not set.");
  }

  const forwardedFor = (await headers()).get("x-forwarded-for");
  const remoteIp = forwardedFor?.split(",")[0]?.trim();

  const body = new URLSearchParams({ secret: secretKey, response: token });
  if (remoteIp) body.set("remoteip", remoteIp);

  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });

  if (!res.ok) return false;
  const result = (await res.json()) as { success: boolean };
  return result.success;
}

export async function createContactSubmission(formData: FormData) {
  const captchaOk = await verifyTurnstile(formData.get("cf-turnstile-response") as string | null);
  if (!captchaOk) {
    redirect("/contact?error=captcha");
  }

  const parsed = submissionSchema.safeParse({
    fullName: formData.get("full-name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    inquiryType: formData.get("inquiry-type"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    redirect("/contact?error=1");
  }

  const { fullName, email, phone, inquiryType, message } = parsed.data;

  await prisma.contactSubmission.create({
    data: {
      fullName,
      email,
      phone: phone || null,
      inquiryType,
      message,
    },
  });

  revalidatePath("/admin/submissions");
  redirect("/contact?success=1");
}
