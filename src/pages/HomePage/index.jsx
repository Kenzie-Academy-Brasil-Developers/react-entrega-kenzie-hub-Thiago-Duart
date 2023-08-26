import { useContext } from "react";
import style from "./style.module.sass";
import { UserContext } from "../../providers/userContext";
export const HomePage = () => {
  const {dataProfile} = useContext(UserContext);
  
  return (
    <>
      <div className={`${style.container}`}>
        <section className={style.presents}>
          <div className="container">
            <h2 className="font title1">Ola, {dataProfile?.name}</h2>
            <p className="font headlineBold">{dataProfile?.course_module}</p>
          </div>
        </section>
        <section className={style.message}>
          <div className={`${"container"}`}>
          </div>
        </section>
      </div>
    </>
  );
};
