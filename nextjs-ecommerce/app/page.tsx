import { prisma } from "@/lib/db/prisma";
import Image from "next/image";
import ProductCard from "./components/ProductCard";
import Link from "next/link";

export default async function Home() {
  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
  }); /*({ ... }): Verilerin nasıl alınacağını belirlemek için seçenekler içeren bir nesne.
  product.findMany: "product" adlı veritabanı tablosundan birden fazla kayıt almak için özel bir Prisma Client yöntemidir.
  orderBy: findMany seçenek nesnesi içinde sonuçların sıralama düzenini kontrol etmek için bir seçenek.
  id: "desc": Prisma Client'a ürünleri "id" özelliğine göre azalan sırada sıralama talimatı verir. Bu, en yüksek kimlikli ürünlerin önce listeleneceği anlamına gelir.
  */

  return (
    <div>
      <div className="hero rounded-xl bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            src={products[0].imageUrl}
            alt={products[0].name}
            width={400}
            height={800}
            className="w-full max-w-sm rounded-lg shadow-2xl"
            priority
          />
          <div>
            <h1 className="text-5xl font-bold">{products[0].name}</h1>
            <p className="py-6">{products[0].description}</p>
            <Link
              href={"/products/" + products[0].id}
              className="btn btn-primary"
            >
              Check it out
            </Link>
          </div>
        </div>
      </div>
      <div className="my-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {products.slice(1).map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
