import Logo from "../../assets/Logo.svg";
import style from "./style.module.sass";
import { Link } from "react-router-dom";
export const MyHeader = () => {
  return (
    <>
      <header className={`${"container"} ${style.header}`}>
        <img src={Logo} alt="Kenzie Hub" />
        <Link
          className="btn redirect out"
          onClick={() => localStorage.removeItem("@token")}
          to={"/login"}
        >
          Sair
        </Link>
      </header>
    </>
  );
};
