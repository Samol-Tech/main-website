import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { authConfig } from "./auth.config";
import { prisma } from "./lib/prisma";

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const email = credentials?.email;
        const password = credentials?.password;
        if (typeof email !== "string" || typeof password !== "string") {
          return null;
        }

        const admin = await prisma.adminUser.findUnique({ where: { email } });
        if (!admin) return null;

        const isValidPassword = await bcrypt.compare(password, admin.passwordHash);
        if (!isValidPassword) return null;

        return { id: admin.id, email: admin.email, name: admin.name ?? undefined };
      },
    }),
  ],
});
