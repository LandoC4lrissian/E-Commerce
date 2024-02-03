import { prisma } from "@/lib/db/prisma";
import { redirect } from "next/navigation";
import FormSubmitButton from "../components/FormSubmitButton";

export const metadata = {
  title: "Add Product - Flowmazon",
};

async function addProduct(formData: FormData) {
  "use server";

  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const imageUrl = formData.get("imageUrl") as string;
  const price = Number(formData.get("price") || 0);
  // || 0 yaparak eğer price değeri null veya undefined gelirse 0 olarak atar.

  if (!name || !description || !imageUrl || !price) {
    throw Error("Missing required fields");
  }
  // || burada "or" operatörüdür. Eğer name, description, imageUrl veya price değerlerinden biri false ise hata fırlatır.
  // !name ifadesi name değerinin false olup olmadığını kontrol eder.

  await prisma.product.create({
    data: { name, description, imageUrl, price },
  });

  redirect("/");// redirect fonksiyonu, addProduct fonksiyonu çalıştığında, kullanıcıyı / adresine yönlendirir.
}

export default function AddProductPage() {
  return (
    <div>
      <h1 className="text-lg mb-3 font-bold">Add Product</h1>
      <form action={addProduct}>
        {/* action={addProduct} kodu, formun gönderildiğinde hangi fonksiyonun çalıştırılacağını belirler.
        Bu kodda, addProduct isimli fonksiyon, formun submit edilmesi ile tetiklenir. */}
        <input
          required
          name="name"
          placeholder="Name"
          className="mb-3 w-full input imput-bordered"
        />
        <textarea
          required
          name="description"
          placeholder="Description"
          className="textarea-bordered textarea mb-3 w-full"
        />
        <input
          required
          name="imageUrl"
          placeholder="Image URL"
          type="url"
          className="mb-3 w-full input imput-bordered"
        />
        <input
          required
          name="price"
          placeholder="Price"
          type="number"
          className="mb-3 w-full input imput-bordered"
        />
        <FormSubmitButton className="btn btn-primary btn-block" type="submit">
          Add Product
        </FormSubmitButton>
      </form>
    </div>
  );
}
