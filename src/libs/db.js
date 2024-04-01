import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
    return new PrismaClient();
};

const globalForPrisma = globalThis;

const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// const { PrismaClient } = require('@prisma/client');

// const prismaClientSingleton = () => {
//   return new PrismaClient();
// };

// globalThis.prismaGlobal = globalThis.prismaGlobal || prismaClientSingleton();

// module.exports = globalThis.prismaGlobal;

// if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = module.exports;