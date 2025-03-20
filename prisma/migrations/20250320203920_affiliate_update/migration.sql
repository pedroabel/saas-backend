/*
  Warnings:

  - You are about to drop the column `cnh` on the `Affiliate` table. All the data in the column will be lost.
  - You are about to drop the column `cnhCategory` on the `Affiliate` table. All the data in the column will be lost.
  - You are about to drop the column `cnhExpirationDate` on the `Affiliate` table. All the data in the column will be lost.
  - Added the required column `cnhFile` to the `Affiliate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `personalDocument` to the `Affiliate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `proofAddres` to the `Affiliate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Affiliate" DROP COLUMN "cnh",
DROP COLUMN "cnhCategory",
DROP COLUMN "cnhExpirationDate",
ADD COLUMN     "cnhFile" TEXT NOT NULL,
ADD COLUMN     "personalDocument" TEXT NOT NULL,
ADD COLUMN     "proofAddres" TEXT NOT NULL;
