import { Category } from '@prisma/client';
import prismaClient from '../../../prisma';

// interface FindedProduct {
//     image: string;
// }

class GetPurchaseByUserService {
    async execute(user_id: string) {

        const defaultHome = this.createDefaultHomeJson();
        const purchasesProduct = await this.getPurchasesByUser(user_id);
        const allCategories = await this.getAllCategories();

        const availableCategories = [];

        allCategories.forEach(function(category) {
            const finded = purchasesProduct.find(function(purchase){
               return purchase.category_id == category.id
            })

            if(typeof finded !== 'undefined') {
                const finalObject = {
                    id: finded?.category.id, 
                    title: finded?.category.title, 
                    info: finded?.category.info, 
                    image: finded?.category.image, 
                    available: true
                }
                availableCategories.push(finalObject);
            }
        });

        availableCategories.forEach(function(category: Category) {
            const index = allCategories.findIndex(function(value) {
                if(value?.id == category?.id) {
                    return true;
                }
            })

            if(index > -1) {
                allCategories.splice(index, 1);
            }
        })


        const notAvailableCategories = allCategories.map(function(value) {
            return { 
                id: value.id, 
                title: value.title, 
                info: value.info, 
                image: value.image, 
                available: false
            }
        })

        const finalJSon = []

        defaultHome.map(function(value){ finalJSon.push(value) });
        availableCategories.map(function(value){ finalJSon.push(value) });
        notAvailableCategories.map(function(value){ finalJSon.push(value) });

        return finalJSon;
    }

    async getAllCategories() {
        const categories = await prismaClient.category.findMany({
            select: {
                id: true,
                title: true,
                info: true,
                image: true
            }
        });

        return categories as [Category];
    }

    async getPurchasesByUser(user_id: string) {
        const purchasesProduct = await prismaClient.purchase.findMany({
            where:{ 
                user_id: user_id
            },
            include: {
                category: true
            }
        });

        return purchasesProduct;
    }
    
    createDefaultHomeJson() {
        const purchases = []
        const purchaseLogoJson = { 
            id: "", 
            title: "", 
            info: "", 
            type: "logo", 
            link_type: "", 
            link_action: "", 
            image: "",
            available: true
        }

        const purchaseAboutUsJson = { 
            id: "", 
            title: "", 
            info: "", 
            type: "help", 
            link_type: "controller", 
            link_action: "", 
            image: "quemSomos",
            available: true
        }

        const purchaseSACJson = { 
            id: "", 
            title: "", 
            info: "", 
            type: "help", 
            link_type: "phone", 
            link_action: "https://api.whatsapp.com/send?phone=5511937414931", 
            image: "sac",
            available: true

        }

        purchases.push(purchaseLogoJson);
        purchases.push(purchaseAboutUsJson);
        purchases.push(purchaseSACJson);

        return purchases;
    }
}

export { GetPurchaseByUserService };