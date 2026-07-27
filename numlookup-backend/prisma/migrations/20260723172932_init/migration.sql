/*
  Warnings:

  - You are about to drop the column `address` on the `PhoneLookup` table. All the data in the column will be lost.
  - You are about to drop the column `dateOfBirth` on the `PhoneLookup` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `PhoneLookup` table. All the data in the column will be lost.
  - You are about to drop the column `fullName` on the `PhoneLookup` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `PhoneLookup` table. All the data in the column will be lost.
  - You are about to drop the column `state` on the `PhoneLookup` table. All the data in the column will be lost.
  - Added the required column `valid` to the `PhoneLookup` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PhoneLookup" DROP COLUMN "address",
DROP COLUMN "dateOfBirth",
DROP COLUMN "firstName",
DROP COLUMN "fullName",
DROP COLUMN "lastName",
DROP COLUMN "state",
ADD COLUMN     "abuseDetected" BOOLEAN,
ADD COLUMN     "countryCode" TEXT,
ADD COLUMN     "countryPrefix" TEXT,
ADD COLUMN     "disposable" BOOLEAN,
ADD COLUMN     "internationalFormat" TEXT,
ADD COLUMN     "isVoip" BOOLEAN,
ADD COLUMN     "lineStatus" TEXT,
ADD COLUMN     "mcc" TEXT,
ADD COLUMN     "mnc" TEXT,
ADD COLUMN     "nationalFormat" TEXT,
ADD COLUMN     "region" TEXT,
ADD COLUMN     "riskLevel" TEXT,
ADD COLUMN     "smsDomain" TEXT,
ADD COLUMN     "smsEmail" TEXT,
ADD COLUMN     "timezone" TEXT,
ADD COLUMN     "valid" BOOLEAN NOT NULL;
