/*
  Warnings:

  - You are about to drop the `TableGeneral` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "TableGeneral";

-- CreateTable
CREATE TABLE "TableTerrenos" (
    "id" SERIAL NOT NULL,
    "fecha" TEXT NOT NULL,
    "zona" TEXT NOT NULL,
    "inmobiliaria" TEXT NOT NULL,
    "proyecto" TEXT NOT NULL,
    "tipoProyecto" TEXT NOT NULL,
    "lugar" TEXT NOT NULL,
    "ubicacion" TEXT NOT NULL,
    "metros" TEXT NOT NULL,
    "etapa" TEXT NOT NULL,
    "referencia" TEXT NOT NULL,
    "precioSolares" TEXT NOT NULL,
    "precioSoles" TEXT NOT NULL,
    "etapas" TEXT NOT NULL,
    "independizado" TEXT NOT NULL,
    "serviciosBasicos" TEXT NOT NULL,
    "fechaEntrega" TEXT NOT NULL,
    "codLote" TEXT NOT NULL,
    "datosCliente" TEXT NOT NULL,
    "celCliente" TEXT NOT NULL,
    "tipoCliente" TEXT NOT NULL,
    "asesor" TEXT NOT NULL,
    "medio" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "tipoCompra" TEXT NOT NULL,
    "tiempo" TEXT NOT NULL,
    "publicidad" TEXT NOT NULL,

    CONSTRAINT "TableTerrenos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TableTerrenos_codLote_key" ON "TableTerrenos"("codLote");
