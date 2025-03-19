/*
  Warnings:

  - You are about to drop the column `videoPhoto` on the `Report` table. All the data in the column will be lost.
  - Added the required column `vehicleVideo` to the `Report` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Report" DROP COLUMN "videoPhoto",
ADD COLUMN     "vehicleVideo" TEXT NOT NULL;
