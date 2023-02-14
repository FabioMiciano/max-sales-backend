-- AlterTable
ALTER TABLE "category" ALTER COLUMN "link_action" SET DEFAULT '',
ALTER COLUMN "link_type" SET DEFAULT '';

-- AlterTable
ALTER TABLE "products" ALTER COLUMN "link_type" SET DEFAULT '',
ALTER COLUMN "link_action" SET DEFAULT '';
