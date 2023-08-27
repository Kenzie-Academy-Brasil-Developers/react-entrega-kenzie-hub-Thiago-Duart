import { useContext} from "react";
import style from "./style.module.sass";
import { ProfileContext } from "../../providers/ProfileContext";
import { CreateTech } from "../../components/Modals/CreateTech";
import { EditTech } from "../../components/Modals/EditTech";
import { TechList } from "../../components/TechList";
import { TechContext } from "../../providers/techContext";
import { ToastContainer } from "react-toastify";
export const HomePage = () => {
  const { dataProfile } = useContext(ProfileContext);
  const { modalCreateTech, modalEditTech } = useContext(TechContext);
  
  return (
    <>
      <div className={`${style.container}`}>
        <section className={style.presents}>
          <div className="container">
            <h2 className="font title1">Ola, {dataProfile?.data.name}</h2>
            <p className="font headlineBold">{dataProfile?.data.course_module}</p>
          </div>
        </section>
        <section className={style.main}>
          <div className={`${"container"}`}>
            <TechList />
            {modalCreateTech && <CreateTech />}
            {modalEditTech&& <EditTech />}
          </div>
        </section>
      </div>
      <ToastContainer/>
    </>
  );
};
