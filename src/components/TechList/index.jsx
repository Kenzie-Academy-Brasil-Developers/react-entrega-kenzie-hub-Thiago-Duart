import {BsPlusLg} from "react-icons/bs"
import { TechCard } from "./TechCard"
import style from "./style.module.sass"
import { useContext } from "react"
import { TechContext } from "../../providers/techContext"
export const TechList = ()=>{
  const {setModalCreateTech} = useContext(TechContext)
    return(
        <div className={style.container}>
            <div className={style.header}>
                <h2 className="font title1">Tecnologias</h2>
                <div className={style.iconsPlus}>
                <BsPlusLg className="icons" onClick={()=> setModalCreateTech(true)}/> 
                </div>
            </div>
            <div className={style.main}>
            <ul className={style.list}>
                <TechCard/>
            </ul>
            </div>
        </div>

    )
}