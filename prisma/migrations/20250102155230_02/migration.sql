/*
  Warnings:

  - The primary key for the `buku` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `buku` table. All the data in the column will be lost.
  - Added the required column `id_buku` to the `buku` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "buku" DROP CONSTRAINT "buku_pkey",
DROP COLUMN "id",
ADD COLUMN     "id_buku" INTEGER NOT NULL,
ADD CONSTRAINT "buku_pkey" PRIMARY KEY ("id_buku");
