/*
  Warnings:

  - You are about to drop the column `fecha_Entrega` on the `TableGeneral` table. All the data in the column will be lost.
  - You are about to drop the column `precio_Dolar` on the `TableGeneral` table. All the data in the column will be lost.
  - You are about to drop the column `precio_Soles` on the `TableGeneral` table. All the data in the column will be lost.
  - You are about to drop the column `servicios_Basicos` on the `TableGeneral` table. All the data in the column will be lost.
  - You are about to drop the column `tipo_Compra` on the `TableGeneral` table. All the data in the column will be lost.
  - You are about to drop the column `tipo_Proyecto` on the `TableGeneral` table. All the data in the column will be lost.
  - Added the required column `fechaentrega` to the `TableGeneral` table without a default value. This is not possible if the table is not empty.
  - Added the required column `preciodolar` to the `TableGeneral` table without a default value. This is not possible if the table is not empty.
  - Added the required column `preciosoles` to the `TableGeneral` table without a default value. This is not possible if the table is not empty.
  - Added the required column `serviciosbasicos` to the `TableGeneral` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipocompra` to the `TableGeneral` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipoproyecto` to the `TableGeneral` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TableGeneral" DROP COLUMN "fecha_Entrega",
DROP COLUMN "precio_Dolar",
DROP COLUMN "precio_Soles",
DROP COLUMN "servicios_Basicos",
DROP COLUMN "tipo_Compra",
DROP COLUMN "tipo_Proyecto",
ADD COLUMN     "fechaentrega" TEXT NOT NULL,
ADD COLUMN     "preciodolar" TEXT NOT NULL,
ADD COLUMN     "preciosoles" TEXT NOT NULL,
ADD COLUMN     "serviciosbasicos" TEXT NOT NULL,
ADD COLUMN     "tipocompra" TEXT NOT NULL,
ADD COLUMN     "tipoproyecto" TEXT NOT NULL;
