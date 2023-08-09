import { MyButton } from "../Buttons/index.jsx";
import Logo from "../../assets/Logo.svg";
import style from "./style.module.sass";
import { useNavigate } from "react-router-dom";
export const MyHeader = () => {
  const navigation = useNavigate();
  const useLogin = () => {
    localStorage.removeItem("@token");
    navigation("/login");
  };
  return (
    <>
      <header className={`${"container"} ${style.header}`}>
        <img src={Logo} alt="Kenzie Hub" />
        <MyButton styleName={"btn redirect out"} onClick={useLogin}>
          Sair
        </MyButton>
      </header>
    </>
  );
};
