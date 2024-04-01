-- CreateTable
CREATE TABLE "TableGeneral" (
    "id" SERIAL NOT NULL,
    "Zona" TEXT NOT NULL,
    "Inmobiliaria" TEXT NOT NULL,
    "Proyecto" TEXT NOT NULL,
    "Tipo_Proyecto" TEXT NOT NULL,
    "Lugar" TEXT NOT NULL,
    "Ubicacion" TEXT NOT NULL,
    "Metros" INTEGER NOT NULL,
    "Etapa" TEXT NOT NULL,
    "Referencia" TEXT NOT NULL,
    "Precio_Dolar" DOUBLE PRECISION NOT NULL,
    "Precio_Soles" DOUBLE PRECISION NOT NULL,
    "Etapas" INTEGER NOT NULL,
    "Independizado" BOOLEAN NOT NULL,
    "Servicios_Basicos" BOOLEAN NOT NULL,
    "Fecha_Entrega" TIMESTAMP(3) NOT NULL,
    "Status" TEXT NOT NULL,
    "Tipo_Compra" TEXT NOT NULL,
    "Publicidad" TEXT NOT NULL,

    CONSTRAINT "TableGeneral_pkey" PRIMARY KEY ("id")
);
