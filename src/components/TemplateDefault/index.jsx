import { MyHeader } from "../Header";

export const MyTemplate = ({ children }) => {
  return (
    <>
      <MyHeader />
      <main>{children}</main>
    </>
  );
};
