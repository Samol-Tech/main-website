import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

// Named proxy.ts per Next.js 16 convention (formerly middleware.ts).
// Edge-runtime session check only (see auth.config.ts for why). Each admin
// Server Action still re-checks auth() itself before touching the database —
// this is the outer gate, not the only one.
export default NextAuth(authConfig).auth;

export const config = {
  matcher: ["/admin/:path*"],
};
