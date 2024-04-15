/*
  Warnings:

  - You are about to drop the column `precioSolares` on the `TableTerrenos` table. All the data in the column will be lost.
  - Added the required column `precioDolares` to the `TableTerrenos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TableTerrenos" DROP COLUMN "precioSolares",
ADD COLUMN     "precioDolares" TEXT NOT NULL;
