import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

// Prisma 7 requires the client to be told explicitly how to connect: a
// driver adapter for a direct Postgres connection, or `accelerateUrl` for
// Prisma Accelerate / Prisma Postgres (which use a `prisma+postgres://` or
// `prisma://` connection string). Vercel's "Prisma Postgres" storage product
// can hand back either shape depending on how it's provisioned, so branch on
// the URL scheme rather than assuming one.
function createPrismaClient() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error("DATABASE_URL is not set.");
  }

  if (databaseUrl.startsWith("prisma+postgres://") || databaseUrl.startsWith("prisma://")) {
    return new PrismaClient({ accelerateUrl: databaseUrl });
  }

  const adapter = new PrismaPg({ connectionString: databaseUrl });
  return new PrismaClient({ adapter });
}

// Standard Next.js dev-mode singleton: without this, Fast Refresh would
// create a brand new PrismaClient (and DB connection pool) on every file
// save, eventually exhausting the database's connection limit.
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
