/*
  Warnings:

  - You are about to drop the column `proofAddres` on the `Affiliate` table. All the data in the column will be lost.
  - You are about to drop the column `chassiss` on the `Vehicle` table. All the data in the column will be lost.
  - Added the required column `proofAddress` to the `Affiliate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `chassis` to the `Vehicle` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Affiliate" DROP COLUMN "proofAddres",
ADD COLUMN     "proofAddress" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Vehicle" DROP COLUMN "chassiss",
ADD COLUMN     "chassis" TEXT NOT NULL;
