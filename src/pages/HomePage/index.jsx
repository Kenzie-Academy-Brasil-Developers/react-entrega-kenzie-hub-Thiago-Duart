import { useContext } from "react";
import style from "./style.module.sass";
import { UserContext } from "../../providers/userContext";
import { CreateTech } from "../../components/Modals/CreateTech";
import { EditTech } from "../../components/Modals/EditTech";
import { TechList } from "../../components/TechList";
export const HomePage = () => {
  const { dataProfile } = useContext(UserContext);

  return (
    <>
      <div className={`${style.container}`}>
        <section className={style.presents}>
          <div className="container">
            <h2 className="font title1">Ola, {dataProfile?.name}</h2>
            <p className="font headlineBold">{dataProfile?.course_module}</p>
          </div>
        </section>
        <section>
          <div className={`${"container"}`}>
            <TechList/>
          
            {/* <CreateTech/>
              <EditTech/> */}
          </div>
        </section>
      </div>
    </>
  );
};
