"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

const submissionSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional().or(z.literal("")),
  inquiryType: z.string().min(1),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export async function createContactSubmission(formData: FormData) {
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
