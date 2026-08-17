import type { NextAuthConfig } from "next-auth";

// Edge-safe half of the Auth.js config: no Prisma/bcrypt here (those are
// Node-only). This is what middleware.ts runs on the Edge runtime; the
// Credentials provider itself is added on top of this in auth.ts, which only
// ever runs in the Node.js runtime (route handlers / Server Actions).
export const authConfig = {
  pages: {
    signIn: "/admin/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnLoginPage = nextUrl.pathname === "/admin/login";

      if (isOnLoginPage) {
        if (isLoggedIn) return Response.redirect(new URL("/admin", nextUrl));
        return true;
      }
      // Everything else matched by middleware's matcher (all of /admin/**)
      // requires a session.
      return isLoggedIn;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
