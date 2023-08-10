import Logo from "../../assets/Logo.svg";
import style from "./style.module.sass";
import { Link } from "react-router-dom";
export const MyHeader = () => {
  const useLogin = () => {
    localStorage.removeItem("@token");
  };
  return (
    <>
      <header className={`${"container"} ${style.header}`}>
        <img src={Logo} alt="Kenzie Hub" />
        <Link className="btn redirect out" onClick={useLogin} to={"/login"}>
          Sair
        </Link>
      </header>
    </>
  );
};
