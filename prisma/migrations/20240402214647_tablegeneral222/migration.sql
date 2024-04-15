/*
  Warnings:

  - You are about to drop the column `Etapa` on the `TableGeneral` table. All the data in the column will be lost.
  - You are about to drop the column `Etapas` on the `TableGeneral` table. All the data in the column will be lost.
  - You are about to drop the column `Fecha_Entrega` on the `TableGeneral` table. All the data in the column will be lost.
  - You are about to drop the column `Independizado` on the `TableGeneral` table. All the data in the column will be lost.
  - You are about to drop the column `Inmobiliaria` on the `TableGeneral` table. All the data in the column will be lost.
  - You are about to drop the column `Lugar` on the `TableGeneral` table. All the data in the column will be lost.
  - You are about to drop the column `Metros` on the `TableGeneral` table. All the data in the column will be lost.
  - You are about to drop the column `Precio_Dolar` on the `TableGeneral` table. All the data in the column will be lost.
  - You are about to drop the column `Precio_Soles` on the `TableGeneral` table. All the data in the column will be lost.
  - You are about to drop the column `Proyecto` on the `TableGeneral` table. All the data in the column will be lost.
  - You are about to drop the column `Publicidad` on the `TableGeneral` table. All the data in the column will be lost.
  - You are about to drop the column `Referencia` on the `TableGeneral` table. All the data in the column will be lost.
  - You are about to drop the column `Servicios_Basicos` on the `TableGeneral` table. All the data in the column will be lost.
  - You are about to drop the column `Status` on the `TableGeneral` table. All the data in the column will be lost.
  - You are about to drop the column `Tipo_Compra` on the `TableGeneral` table. All the data in the column will be lost.
  - You are about to drop the column `Tipo_Proyecto` on the `TableGeneral` table. All the data in the column will be lost.
  - You are about to drop the column `Ubicacion` on the `TableGeneral` table. All the data in the column will be lost.
  - You are about to drop the column `Zona` on the `TableGeneral` table. All the data in the column will be lost.
  - Added the required column `etapa` to the `TableGeneral` table without a default value. This is not possible if the table is not empty.
  - Added the required column `etapas` to the `TableGeneral` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fecha_Entrega` to the `TableGeneral` table without a default value. This is not possible if the table is not empty.
  - Added the required column `independizado` to the `TableGeneral` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inmobiliaria` to the `TableGeneral` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lugar` to the `TableGeneral` table without a default value. This is not possible if the table is not empty.
  - Added the required column `metros` to the `TableGeneral` table without a default value. This is not possible if the table is not empty.
  - Added the required column `precio_Dolar` to the `TableGeneral` table without a default value. This is not possible if the table is not empty.
  - Added the required column `precio_Soles` to the `TableGeneral` table without a default value. This is not possible if the table is not empty.
  - Added the required column `proyecto` to the `TableGeneral` table without a default value. This is not possible if the table is not empty.
  - Added the required column `publicidad` to the `TableGeneral` table without a default value. This is not possible if the table is not empty.
  - Added the required column `referencia` to the `TableGeneral` table without a default value. This is not possible if the table is not empty.
  - Added the required column `servicios_Basicos` to the `TableGeneral` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `TableGeneral` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo_Compra` to the `TableGeneral` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo_Proyecto` to the `TableGeneral` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ubicacion` to the `TableGeneral` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zona` to the `TableGeneral` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TableGeneral" DROP COLUMN "Etapa",
DROP COLUMN "Etapas",
DROP COLUMN "Fecha_Entrega",
DROP COLUMN "Independizado",
DROP COLUMN "Inmobiliaria",
DROP COLUMN "Lugar",
DROP COLUMN "Metros",
DROP COLUMN "Precio_Dolar",
DROP COLUMN "Precio_Soles",
DROP COLUMN "Proyecto",
DROP COLUMN "Publicidad",
DROP COLUMN "Referencia",
DROP COLUMN "Servicios_Basicos",
DROP COLUMN "Status",
DROP COLUMN "Tipo_Compra",
DROP COLUMN "Tipo_Proyecto",
DROP COLUMN "Ubicacion",
DROP COLUMN "Zona",
ADD COLUMN     "etapa" TEXT NOT NULL,
ADD COLUMN     "etapas" TEXT NOT NULL,
ADD COLUMN     "fecha_Entrega" TEXT NOT NULL,
ADD COLUMN     "independizado" TEXT NOT NULL,
ADD COLUMN     "inmobiliaria" TEXT NOT NULL,
ADD COLUMN     "lugar" TEXT NOT NULL,
ADD COLUMN     "metros" TEXT NOT NULL,
ADD COLUMN     "precio_Dolar" TEXT NOT NULL,
ADD COLUMN     "precio_Soles" TEXT NOT NULL,
ADD COLUMN     "proyecto" TEXT NOT NULL,
ADD COLUMN     "publicidad" TEXT NOT NULL,
ADD COLUMN     "referencia" TEXT NOT NULL,
ADD COLUMN     "servicios_Basicos" TEXT NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL,
ADD COLUMN     "tipo_Compra" TEXT NOT NULL,
ADD COLUMN     "tipo_Proyecto" TEXT NOT NULL,
ADD COLUMN     "ubicacion" TEXT NOT NULL,
ADD COLUMN     "zona" TEXT NOT NULL;
