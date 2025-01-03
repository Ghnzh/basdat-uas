-- CreateTable
CREATE TABLE "kasharian" (
    "tanggal" TIMESTAMP(3) NOT NULL,
    "uraian" TEXT NOT NULL,
    "debit" DOUBLE PRECISION NOT NULL,
    "kredit" DOUBLE PRECISION NOT NULL,
    "id" SERIAL NOT NULL,

    CONSTRAINT "kasharian_pkey" PRIMARY KEY ("id")
);
