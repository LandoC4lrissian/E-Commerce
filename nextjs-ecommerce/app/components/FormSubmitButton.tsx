"use client";

import { ComponentProps } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

type FormSubmitButtonProps = {
  children: React.ReactNode;
  //React.ReactNode, React'te herhangi bir geçerli içeriği temsil eden bir türdür. Bu, metin, sayılar, DOM elementleri, React bileşenleri ve bunların dizileri olabilir.
  className?: string;
  /*className?: Bu prop, FormSubmitButton bileşeninin className özelliğini tanımlar.
    Bu özellik, bileşene bir CSS sınıfı atamak için kullanılır. ? işareti, prop'un opsiyonel olduğunu gösterir.*/
} & ComponentProps<"button">; // Bu kısım, FormSubmitButton bileşeninin button HTML etiketinin tüm özelliklerini de desteklediğini gösterir.

export default function FormSubmitButton({
  children,
  className,
  ...props
}: FormSubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
    {...props} //props, FormSubmitButton bileşenine geçirilen tüm özellikleri içerir. Bu, onClick, type, disabled gibi özellikleri içerebilir.
      className={`btn btn-primary ${className}`}
      type="submit" /*type özelliği, düğmenin türünü belirtir. Bu durumda, submit değeri kullanılır.
        Bu, düğmeye tıklandığında formdaki verilerin sunucuya gönderileceği anlamına gelir.*/
      disabled={
        pending
      } /*disabled özelliği, düğmenin devre dışı olup olmadığını belirler. pending değişkeninin değeri true ise düğme devre dışı bırakılır.
        Bu, form gönderilirken kullanıcının birden fazla kez tıklamasını önler.*/
      /*pending değişkeni, useFormStatus kancasından alınır.
        Bu değişken, form gönderme işleminin durumunu gösterir. true ise form gönderiliyor, false ise form gönderilmiyor demektir.*/
    >
      {pending && <span className="loading loading-spinner" />}
      {/*pending değişkeni true ise, yani form gönderiliyorsa, loading sınıfı ve loading-spinner sınıfı içeren bir span elementi gösterilir.*/}
      {children}
    </button>
    //children prop'u, FormSubmitButton bileşeninin içeriğini temsil eder. Bu durumda, düğmenin metni.
  );
}
