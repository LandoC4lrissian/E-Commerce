"use client";

interface AddToCartBottonProps {
  productId: string;
}

export default function AddToCartButton({ productId }: AddToCartBottonProps) {
  return (
    <div className="flex items-center gap-2">
      <button className="btn btn-primary" onClick={() => {}}>
        Add to cart
      </button>
    </div>
  );
}
