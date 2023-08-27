import { FiX } from "react-icons/fi";
import { MyInput } from "../../forms/Input";
import style from "./style.module.sass";
import { useContext } from "react";
import { TechContext } from "../../../providers/techContext";
import { useForm } from "react-hook-form";
export const EditTech = () => {
  const { setModalEditTech, dataTech, editTech } = useContext(TechContext);
  const { register, handleSubmit } = useForm();
  return (
    <div className={style.container}>
      <div className={style.header}>
        <h2 className="font title1">Tecnologia Detalhes</h2>
        <FiX
          className="icons"
          onClick={() => {
            setModalEditTech(false);
          }}
        />
      </div>
      <form className={style.form} onSubmit={handleSubmit(editTech.mutate)}>
        <MyInput
          disabled
          type={"text"}
          label={"nome"}
          placeholder={dataTech.title}
          {...register("title")}
        />
        <label>Status</label>
        <select {...register("status", { required: true })}>
          <option selected disabled defaultValue={dataTech.status}>
            {dataTech.status}
          </option>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
        <button className="btn default">Salva Alterações</button>
      </form>
    </div>
  );
};
