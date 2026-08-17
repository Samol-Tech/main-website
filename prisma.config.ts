import { config as loadEnv } from "dotenv";
import { defineConfig, env } from "prisma/config";

// The Prisma CLI is a standalone process — unlike `next dev`/`next build`,
// it does not auto-load .env.local, so we do it explicitly here.
loadEnv({ path: ".env.local" });

// Prisma 7 moved connection URLs out of schema.prisma. This config is used
// by the Prisma CLI (migrate/db seed) — the running app's PrismaClient gets
// its connection separately, in src/lib/prisma.ts.
export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: env("DATABASE_URL"),
  },
  migrations: {
    seed: "tsx prisma/seed.ts",
  },
});
