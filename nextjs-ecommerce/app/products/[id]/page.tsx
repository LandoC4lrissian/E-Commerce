import {prisma} from "@/lib/db/prisma";

interface ProductPageProps {
    params: { 
        id: string,
    }
    // params: { ... }: URL'den alınan parametreleri içeren bir nesne.
}

export default async function ProductPage(
    {params: {id}} : ProductPageProps
    // {params: {id}}: URL'den alınan "id" parametresini alır.
){
    const product = await prisma.product.findUnique({where: {id}})
    // product.findUnique: "product" adlı veritabanı tablosundan yalnızca bir kayıt almak için özel bir Prisma Client yöntemidir.
}