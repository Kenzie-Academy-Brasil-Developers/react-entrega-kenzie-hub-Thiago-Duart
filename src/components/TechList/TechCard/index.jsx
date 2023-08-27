import {BsFillTrashFill} from "react-icons/bs"
import {FiEdit2} from "react-icons/fi"
import style from "./style.module.sass"
import { TechContext } from "../../../providers/techContext";
import { useContext } from "react";
export const TechCard = () => {
  const {setModalEditTech} = useContext(TechContext)
  return (
    <li className={style.card}>
      <h2 className="font title2">testing</h2>
      <div>
      <p className="font headlineBold">avançado</p>
      <FiEdit2 className="icons" onClick={()=>setModalEditTech(true)} />
      <BsFillTrashFill className="icons" />
      </div>
    </li>
  );
};
