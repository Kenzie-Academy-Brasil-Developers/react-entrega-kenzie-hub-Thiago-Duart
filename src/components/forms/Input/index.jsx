import { forwardRef } from "react";

export const MyInput = forwardRef(({ label, ...rest }, ref) => {
  return (
    <>
      <label>{label}</label>
      <input ref={ref} {...rest} />
    </>
  );
});
