import { formatPrice } from "@/lib/format";

interface PriceTagProps {
    price: number;
    className?: string;
}

export default function PriceTag({price, className} : PriceTagProps){
    return <span className={`badge ${className}`}>{formatPrice(price)}</span>
    // formatPrice fonksiyonu, price prop'unu para birimi biçiminde biçimlendirmek için kullanılır.
}