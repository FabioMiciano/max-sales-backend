/*
  Warnings:

  - You are about to drop the column `link_action` on the `category` table. All the data in the column will be lost.
  - You are about to drop the column `link_type` on the `category` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `category` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "category" DROP COLUMN "link_action",
DROP COLUMN "link_type",
DROP COLUMN "type";
