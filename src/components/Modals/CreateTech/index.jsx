import { FiX } from "react-icons/fi";
import { MyInput } from "../../forms/Input";
import style from "./style.module.sass";
import { useContext } from "react";
import { ProfileTechContext} from "../../../providers/ProfileTechContext";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiHub } from "../../../services/sevices";
import { toast } from "react-toastify";
export const CreateTech = () => {
  const { setModalCreateTech } = useContext(ProfileTechContext);
  const key = ['profile']
  const queryclient = useQueryClient()
  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  const cadastreTech = useMutation({
    mutationFn: (data) => {
      const token = JSON.parse(localStorage.getItem("@token"));
      return apiHub.post("users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess:()=>{
      toast.success("Tecnologia criada com sucesso!!!", {
        className: "toastStyle",
      });
      reset()
      queryclient.refetchQueries(key)
      setModalCreateTech(false)
    },
    onError:()=>{
      toast.error("Tecnologia ja cadastrada :(", {
        className: "toastStyle",
      });
    }
  });

  return (
    <div className={style.container}>
      <div className={style.header}>
        <h2 className="font title1">Cadastrar Tecnologia</h2>
        <FiX className="icons" onClick={() => setModalCreateTech(false)} />
      </div>
      <form className={style.form} onSubmit={handleSubmit(cadastreTech.mutate)}>
        <MyInput type={"text"} label={"nome"} {...register("title",{required:true})} />
        <label>Status</label>
        <select {...register("status")}>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
        <button className="btn default">Cadastrar Tecnologia</button>
      </form>
    </div>
  );
};
