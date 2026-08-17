"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

async function requireAdmin() {
  const session = await auth();
  if (!session?.user) {
    throw new Error("Not authenticated.");
  }
}

export async function markAsRead(id: string) {
  await requireAdmin();
  await prisma.contactSubmission.update({ where: { id }, data: { status: "READ" } });
  revalidatePath("/admin/submissions");
}

export async function archiveSubmission(id: string) {
  await requireAdmin();
  await prisma.contactSubmission.update({ where: { id }, data: { status: "ARCHIVED" } });
  revalidatePath("/admin/submissions");
}

export async function deleteSubmission(id: string) {
  await requireAdmin();
  await prisma.contactSubmission.delete({ where: { id } });
  revalidatePath("/admin/submissions");
}
