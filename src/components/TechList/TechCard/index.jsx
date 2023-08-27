import { BsFillTrashFill } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import style from "./style.module.sass";
import { TechContext } from "../../../providers/techContext";
import { useContext } from "react";
import { useQueryClient } from "@tanstack/react-query";

export const TechCard = () => {
  const { setModalEditTech, modalEditTech, setDataTech, deleteTech } =
    useContext(TechContext);

  const key = ["profile"];
  const queryclient = useQueryClient();
  const { data } = queryclient.getQueryData(key);
  const techs = data.techs;

  return (
    <>
      <div>
        {techs.map((tech) => (
          <li className={style.card} key={tech.id}>
            <h2 className="font title2">{tech.title}</h2>
            <div className={style.handle}>
              <p className="font headlineBold">{tech.status}</p>
              <div className={style.icons}>
                {!modalEditTech && (
                  <FiEdit2
                    className="icons"
                    onClick={() => {
                      setModalEditTech(true);
                      setDataTech({
                        title: tech.title,
                        status: tech.status,
                        id: tech.id,
                      });
                    }}
                  />
                )}
                {!modalEditTech && (
                  <BsFillTrashFill
                    className="icons"
                    onClick={() => deleteTech.mutate(tech.id)}
                  />
                )}
              </div>
            </div>
          </li>
        ))}
      </div>
    </>
  );
};
