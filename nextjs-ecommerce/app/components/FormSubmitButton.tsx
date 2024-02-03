"use client";

import { ComponentProps} from "react";

type FormSubmitButtonProps = {
    children: React.ReactNode,
    //React.ReactNode, React'te herhangi bir geçerli içeriği temsil eden bir türdür. Bu, metin, sayılar, DOM elementleri, React bileşenleri ve bunların dizileri olabilir.
    className?: string,
    /*className?: Bu prop, FormSubmitButton bileşeninin className özelliğini tanımlar.
    Bu özellik, bileşene bir CSS sınıfı atamak için kullanılır. ? işareti, prop'un opsiyonel olduğunu gösterir.*/
} & ComponentProps<"button">; // Bu kısım, FormSubmitButton bileşeninin button HTML etiketinin tüm özelliklerini de desteklediğini gösterir.

export default function FormSubmitButton(
    {children,className} : FormSubmitButtonProps
) {
    return(
        <button
        className={`btn btn-primary ${className}`}
        >{children}</button>
    )
}
