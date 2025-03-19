/*
  Warnings:

  - You are about to drop the column `vehiclePhotos` on the `Report` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Report" DROP COLUMN "vehiclePhotos",
ADD COLUMN     "vehiclePhotoss" TEXT[];
