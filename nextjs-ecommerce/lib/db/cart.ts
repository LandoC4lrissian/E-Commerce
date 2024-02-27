import { cookies } from "next/headers";
import { prisma } from "./prisma";

export async function getCart() {
    const localCartId = cookies().get("localCartId")?.value;
    const cart =localCartId ?
    await prisma.cart.findUnique({
        where: { id: localCartId },
        include: { items : { include: { product: true } } }
    }) 
    : null;
}

export async function createCart() {
  const newCart = await prisma.cart.create({
    data: {}
  });

  //Needs encryption + secure settings in real production app
  //"localCartId" adında bir çerez oluşturulur ve yeni sepetin kimliği bu çereze yazılır.
  cookies().set("localCartId", newCart.id,)

}
