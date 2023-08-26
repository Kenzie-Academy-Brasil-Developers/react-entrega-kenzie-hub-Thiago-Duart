import {BsPlusLg} from "react-icons/bs"
import { TechCard } from "./TechCard"
import style from "./style.module.sass"
export const TechList = ()=>{
    return(
        <div className={style.container}>
            <div className={style.header}>
                <h2 className="font title1">Tecnologias</h2>
                <div className={style.iconsPlus}>
                <BsPlusLg className="icons"/> 
                </div>
            </div>
            <div className={style.main}>
            <ul >
                <TechCard/>
            </ul>
            </div>
        </div>

    )
}