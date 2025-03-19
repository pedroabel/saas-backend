-- CreateTable
CREATE TABLE "Vehicle" (
    "id" TEXT NOT NULL,
    "affiliateId" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "licensePlate" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "chassiss" TEXT NOT NULL,
    "yearModel" TEXT NOT NULL,
    "fipeValue" TEXT NOT NULL,
    "fuelType" TEXT NOT NULL,

    CONSTRAINT "Vehicle_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Vehicle" ADD CONSTRAINT "Vehicle_affiliateId_fkey" FOREIGN KEY ("affiliateId") REFERENCES "Affiliate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
