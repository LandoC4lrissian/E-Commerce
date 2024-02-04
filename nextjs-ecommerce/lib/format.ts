export function formatPrice(price: number) {
  return (price / 100).toLocaleString("en-US", {
    style: "currency", //sayıyı para birimi olarak gösterir
    currency: "USD", //para birimi
  });
}
