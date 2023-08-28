import { MyInput } from "../../components/forms/Input";
import { MyButton } from "../../components/Buttons";
import { MySelect } from "../../components/forms/Select";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Logo from "../../assets/Logo.svg";
import style from "./style.module.sass";
import { zodResolver } from "@hookform/resolvers/zod";
import { validate } from "./validateUser";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.min.css";
import { useMutation } from "@tanstack/react-query";
import { apiHub } from "../../services/sevices";
import { useState } from "react";

export const CadastrePage = () => {
  const [showToast, setShowToast] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: zodResolver(validate),
  });

  const submitCadastre = useMutation({
    mutationFn: (dataUser) => {
      return apiHub.post("/users", dataUser);
    },
    onSuccess: () => {
      toast.success("Conta criada com sucesso!!!", {
        className: "toastStyle",
      });
      reset();
    },
    onError: () => {
      toast.error("E-mail ja existente", {
        className: "toastStyle",
      });
      setShowToast(true);
    },
  });

  return (
    <>
      <div className={style.container}>
        <div className={style.form__header}>
          <img src={Logo} alt="Kenzie Hub" />
          <Link className="btn redirect out" to={"/login"}>
            Voltar
          </Link>
        </div>
        <div className={style.form__container}>
          <h2 className="font title1">Crie sua conta</h2>
          <p className="font headlineBold">Rapido e grátis, vamos nessa</p>
          <form onSubmit={handleSubmit(submitCadastre.mutate)}>
            <div className="container__input">
              <MyInput
                type={"text"}
                id={"name"}
                label={"Nome"}
                placeholder={"Digite aqui seu nome"}
                {...register("name")}
              />
              <ErrorMessage
                errors={errors}
                name="name"
                render={({ message }) => (
                  <p className="messageErr">{message}</p>
                )}
              />
            </div>

            <div className="container__input">
              <MyInput
                type={"text"}
                id={"email"}
                label={"Email"}
                placeholder={"Digite seu email"}
                {...register("email")}
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
                name={"password"}
                placeholder={"Digite sua senha"}
                {...register("password")}
              />
              <ErrorMessage
                errors={errors}
                name="password"
                render={({ message }) => (
                  <p className="messageErr">{message}</p>
                )}
              />
            </div>
            <div className="container__input">
              <MyInput
                type={"password"}
                id={"confirmPassword"}
                label={"Senha"}
                placeholder={"Confirme sua senha"}
                {...register("confirm_password")}
              />
              <ErrorMessage
                errors={errors}
                name="confirm_password"
                render={({ message }) => (
                  <p className="messageErr">{message}</p>
                )}
              />
            </div>
            <div className="container__input">
              <MyInput
                type={"text"}
                id={"bio"}
                label={"Bio"}
                placeholder={"Fale sobre você"}
                {...register("bio")}
              />
              <ErrorMessage
                errors={errors}
                name="bio"
                render={({ message }) => (
                  <p className="messageErr">{message}</p>
                )}
              />
            </div>
            <div className="container__input">
              <MyInput
                type={"text"}
                id={"contact"}
                label={"Contato"}
                placeholder={"Opçao de contato"}
                {...register("contact")}
              />
              <ErrorMessage
                errors={errors}
                name="contact"
                render={({ message }) => (
                  <p className="messageErr">{message}</p>
                )}
              />
            </div>
            <div className="container__input">
              <MySelect
                label={"Selecione o Módulo"}
                {...register("course_module")}
              />
              <ErrorMessage
                errors={errors}
                name="course_module"
                render={({ message }) => (
                  <p className="messageErr">{message}</p>
                )}
              />
            </div>
            <MyButton type={"submit"} styleName={"btn secundary"}>
              Cadastrar
            </MyButton>
            <ToastContainer />
          </form>
        </div>
      </div>
    </>
  );
};
