/*
  Warnings:

  - You are about to drop the `kasharian` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "kasharian";

-- CreateTable
CREATE TABLE "buku" (
    "id" INTEGER NOT NULL,
    "judulBuku" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "pengarang" TEXT NOT NULL,
    "tahunTerbit" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "buku_pkey" PRIMARY KEY ("id")
);
