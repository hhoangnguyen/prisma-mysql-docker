import { PrismaClient } from "./generated/prisma-client-js/index.js";

if (process.env.NODE_ENV !== "production") {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
}

const prisma = global.prisma || new PrismaClient();

export default prisma;
