/*
  Warnings:

  - The `cnhFile` column on the `Affiliate` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `personalDocument` column on the `Affiliate` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Affiliate" DROP COLUMN "cnhFile",
ADD COLUMN     "cnhFile" TEXT[],
DROP COLUMN "personalDocument",
ADD COLUMN     "personalDocument" TEXT[];
