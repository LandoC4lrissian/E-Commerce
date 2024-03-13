"use server";

import { createCart, getCart } from "@/lib/db/cart";
import { prisma } from "@/lib/db/prisma";
import { revalidatePath } from "next/cache";

export async function incrementProductQuantity(productId: string) {
  const cart = (await getCart()) ?? (await createCart());
  /*  Öncelikle mevcut alışveriş sepetini alıyoruz.
  Eğer sepette bir şey yoksa, yeni bir alışveriş sepeti oluşturuyoruz. ?? operatörü, ilk ifadenin null veya undefined olması durumunda ikinci ifadeyi döndürür.*/
  
  const articleInCart = cart.items.find((item) => item.productId === productId);
  // Sepetteki ürünleri kontrol ediyoruz. Eğer ürün sepette varsa, bu ürünü alıyoruz.

  if (articleInCart) {
    await prisma.cartItem.update({
      where: { id: articleInCart.id },
      data: { quantity: { increment: 1 } },
    });
    // Eğer articleInCart doluysa, ürün zaten sepette var demektir ve miktarını artırmak için ilgili veritabanı işlemini yapacağız.
  } else {
    await prisma.cartItem.create({
      data: {
        cartId: cart.id,
        productId,
        quantity: 1,
      },
    });
    // Eğer articleInCart boşsa, yani sepette bu üründen yoksa, yeni bir ürün ekleyeceğiz.
  }
  /* Eğer articleInCart doluysa, ürün zaten sepette var demektir ve miktarını artırmak için ilgili veritabanı işlemini yapacağız.
  Eğer articleInCart boşsa, yani sepette bu üründen yoksa, yeni bir ürün ekleyeceğiz.*/

 revalidatePath("/products/[id]");
  // Ürün sayfasını yenilemek için revalidatePath fonksiyonunu kullanıyoruz.
}
