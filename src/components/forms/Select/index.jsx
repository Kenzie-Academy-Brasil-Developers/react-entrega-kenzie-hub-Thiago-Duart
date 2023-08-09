import { forwardRef } from "react";
import { MyOptions } from "./Options";
export const MySelect = forwardRef(({ label, ...rest }, ref) => {
  return (
    <>
      <label>{label}</label>
      <select {...rest} ref={ref}>
        <MyOptions value={"Primeiro módulo (Introdução ao Frontend)"}>
          Primeiro módulo (Introdução ao Frontend){" "}
        </MyOptions>
        <MyOptions value={"Segundo módulo (Frontend Avançado)"}>
          Segundo módulo (Frontend Avançado){" "}
        </MyOptions>
        <MyOptions value={"Terceiro módulo (Introdução ao Backend)"}>
          Terceiro módulo (Introdução ao Backend){" "}
        </MyOptions>
        <MyOptions value={"Quarto módulo (Backend Avançado)"}>
          Quarto módulo (Backend Avançado)
        </MyOptions>
      </select>
    </>
  );
});
