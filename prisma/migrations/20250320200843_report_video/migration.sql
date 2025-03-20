/*
  Warnings:

  - You are about to drop the column `vehicleVideo` on the `Report` table. All the data in the column will be lost.
  - Added the required column `reportVideo` to the `Report` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Report" DROP COLUMN "vehicleVideo",
ADD COLUMN     "reportVideo" TEXT NOT NULL;
