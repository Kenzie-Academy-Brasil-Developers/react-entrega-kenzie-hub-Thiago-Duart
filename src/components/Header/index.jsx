import { useContext } from "react";
import Logo from "../../assets/Logo.svg";
import { UserContext } from "../../providers/userContext";
import style from "./style.module.sass";
import { Link } from "react-router-dom";
export const MyHeader = () => {
  const { logOut } = useContext(UserContext)
  return (
    <>
      <header className={`${"container"} ${style.header}`}>
        <img src={Logo} alt="Kenzie Hub" />
        <Link className="btn redirect out" onClick={logOut} to={"/login"}>
          Sair
        </Link>
      </header>
    </>
  );
};
