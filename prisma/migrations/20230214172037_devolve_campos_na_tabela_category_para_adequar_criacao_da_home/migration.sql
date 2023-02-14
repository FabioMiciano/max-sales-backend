/*
  Warnings:

  - Added the required column `link_action` to the `category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `link_type` to the `category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `category` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "category" ADD COLUMN     "link_action" TEXT NOT NULL,
ADD COLUMN     "link_type" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;
