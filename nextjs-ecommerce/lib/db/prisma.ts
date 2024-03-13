import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prismas: PrismaClient | undefined;
};
// globalThis nesnesini globalForPrisma adında bir değişkene atıyoruz. Bu değişken, prismas adında bir özellik içerir ve bu özellik bir PrismaClient örneğini veya undefined değerini alabilir.

export const prisma = globalForPrisma.prismas ?? new PrismaClient();
// prisma adında bir sabit tanımlıyoruz. Bu sabit, globalForPrisma.prismas değerini alır. Eğer bu değer undefined ise, yeni bir PrismaClient örneği oluşturur ve prisma'ya atar. Bu şekilde, kodun herhangi bir yerinde prisma değişkenine erişildiğinde, aynı PrismaClient örneği kullanılır.

if (process.env.NODE_ENV !== 'production') globalForPrisma.prismas = prisma;
// Eğer process.env.NODE_ENV değişkeni 'production' değilse, yani kod geliştirme veya test ortamında ise, globalForPrisma.prismas özelliğine prisma örneğini atarız. Bu, PrismaClient örneğine erişimin daha kolay ve global bir şekilde sağlanmasını sağlar. 