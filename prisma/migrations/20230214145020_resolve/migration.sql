-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_category_id_fkey";

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE NO ACTION;
