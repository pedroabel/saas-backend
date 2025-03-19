/*
  Warnings:

  - You are about to drop the column `eventName` on the `Event` table. All the data in the column will be lost.
  - Added the required column `driver` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hasThirdParty` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `policeReportNumber` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `protocol` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thirdPartyEmail` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thirdPartyPhone` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "eventName",
ADD COLUMN     "driver" TEXT NOT NULL,
ADD COLUMN     "hasThirdParty" TEXT NOT NULL,
ADD COLUMN     "policeReportNumber" TEXT NOT NULL,
ADD COLUMN     "protocol" TEXT NOT NULL,
ADD COLUMN     "thirdPartyEmail" TEXT NOT NULL,
ADD COLUMN     "thirdPartyPhone" TEXT NOT NULL;
