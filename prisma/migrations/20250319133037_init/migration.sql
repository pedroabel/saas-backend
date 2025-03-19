/*
  Warnings:

  - You are about to drop the column `attendee` on the `Report` table. All the data in the column will be lost.
  - You are about to drop the column `vehiclePhotos` on the `Report` table. All the data in the column will be lost.
  - Added the required column `vehiclePhoto` to the `Report` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Report" DROP COLUMN "attendee",
DROP COLUMN "vehiclePhotos",
ADD COLUMN     "vehiclePhoto" TEXT NOT NULL;
