import { prisma } from "@/lib/db/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";
import PriceTag from "@/app/components/PriceTag";
import { Metadata } from "next";
import { cache } from "react";

interface ProductPageProps {
  params: {
    id: string;
  };
  // params: { ... }: URL'den alınan parametreleri içeren bir nesne.
}

const getProduct = cache(async (id: string) => {
  const product = await prisma.product.findUnique({ where: { id } });
  // product.findUnique: "product" adlı veritabanı tablosundan yalnızca bir kayıt almak için özel bir Prisma Client yöntemidir.
  // where: findUnique seçenek nesnesi içinde alınacak kaydı belirlemek için bir seçenek.

  if (!product) notFound();
  // Eğer ürün bulunamazsa, 404 sayfası gösterilir.

  return product;
});
// cache: Bu işlevin sonuçlarını önbelleğe alır ve aynı parametrelerle tekrar çağrıldığında önbellekten sonuçları döndürür.

export async function generateMetadata({
  params: { id }, // params: {id}: URL'den alınan "id" parametresini alır.
}: ProductPageProps): Promise<Metadata> {
  // Metadata: Sayfa başlığı, açıklaması ve sosyal medya paylaşımı için resimler gibi sayfa meta verilerini içeren bir nesne.
  const product = await getProduct(id);
  // getProduct: Ürün bilgilerini almak için kullanılan bir işlev.

  return {
    title: product.name + " - Flowmazon", // Sayfa başlığı.
    description: product.description, // Sayfa açıklaması.
    openGraph: {
      images: [{ url: product.imageUrl }],
    },
    // openGraph: Sosyal medya paylaşımı için ürünün resim URL'sini içeren bir nesne.
  };
}

export default async function ProductPage(
  { params: { id } }: ProductPageProps
  // {params: {id}}: URL'den alınan "id" parametresini alır.
) {
  const product = await getProduct(id);

  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:items-center">
      <Image
        src={product.imageUrl}
        alt={product.name}
        width={500}
        height={500}
        className="rounded-lg"
        priority
      />

      <div>
        <h1 className="text-5xl font-bold">{product.name}</h1>
        <PriceTag price={product.price} className="mt-4" />
        <p className="py-6">{product.description}</p>
      </div>
    </div>
  );
}
