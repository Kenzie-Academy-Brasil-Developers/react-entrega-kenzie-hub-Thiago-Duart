import { MyInput } from "../../components/forms/Input";
import { MyButton } from "../../components/Buttons";
import Logo from "../../assets/Logo.svg";
import style from "./style.module.sass";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { apiHub } from "../../services/sevices";
import { toast, ToastContainer } from "react-toastify";
import { ErrorMessage } from "@hookform/error-message";
import "react-toastify/dist/ReactToastify.min.css";
import { LoginContext } from "../../providers/LoginContext";
import { useContext } from "react";
export const LoginPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { submit } = useContext(LoginContext);

  return (
    <>
      <div className={style.container}>
        <img src={Logo} alt="Kenzie Hub" />
        <div className={style.login__container}>
          <h2 className="font title1">Login</h2>
          <form onSubmit={handleSubmit(submit)}>
            <div className="container__input">
              <MyInput
                type={"text"}
                id={"email"}
                label={"Email"}
                placeholder={"Digite seu Email"}
                {...register("email", {
                  required: "Porfavor digite seu email",
                })}
              />
              <ErrorMessage
                errors={errors}
                name="email"
                render={({ message }) => (
                  <p className="messageErr">{message}</p>
                )}
              />
            </div>
            <div className="container__input">
              <MyInput
                type={"password"}
                id={"password"}
                label={"Senha"}
                placeholder={"Digite sua senha"}
                {...register("password", {
                  required: "Porfavor digite sua senha",
                })}
              />
              <ErrorMessage
                errors={errors}
                name="password"
                render={({ message }) => (
                  <p className="messageErr">{message}</p>
                )}
              />
            </div>
            <MyButton styleName={"btn default"} type={"submit"}>
              Entrar
            </MyButton>
            <ToastContainer />
          </form>
          <span className="font headlineBold">Ainda não possui uma conta?</span>
          <Link to={"/cadastro"} className="btn redirect">
            Cadastre-se
          </Link>
        </div>
      </div>
    </>
  );
};
