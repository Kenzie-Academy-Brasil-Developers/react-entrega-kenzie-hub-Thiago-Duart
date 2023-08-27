import { FiX } from "react-icons/fi";
import { MyInput } from "../../forms/Input";
import style from "./style.module.sass"
import { useContext } from "react";
import { TechContext } from "../../../providers/techContext";
export const CreateTech = () => {
  const {setModalCreateTech} = useContext(TechContext)
  return (
    <div className={style.container}>
      <div className={style.header}>
        <h2 className="font title1">Cadastrar Tecnologia</h2>
        <FiX className="icons" onClick={()=> setModalCreateTech(false)}/>
      </div>
      <form className={style.form}>
        <MyInput type={"text"} label={"nome"}/>
        <label>Status</label>
        <select>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
        </select>
        <button className="btn default">Cadastrar Tecnologia</button>
      </form>
    </div>
  );
};
