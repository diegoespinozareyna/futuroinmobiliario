/*
  Warnings:

  - You are about to drop the column `fecha` on the `TableTerrenos` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `TableTerrenos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TableTerrenos" DROP COLUMN "fecha",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
