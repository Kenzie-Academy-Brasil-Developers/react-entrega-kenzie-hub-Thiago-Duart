import { useContext } from "react";
import style from "./style.module.sass";
import { UserContext } from "../../providers/userContext";
import { useState, useEffect } from "react";
export const HomePage = () => {
  const { userProfile } = useContext(UserContext);
  const [profile, setProfile] = useState({});
  useEffect(() => {
    const awaitResponse = async () => {
      setProfile(await userProfile());
    };
    awaitResponse();
  },[]);
  
  return (
    <>
      <div className={`${style.container}`}>
        <section className={style.presents}>
          <div className="container">
            <h2 className="font title1">Ola, {profile.name}</h2>
            <p className="font headlineBold">{profile.course_module}</p>
          </div>
        </section>
        <section className={style.message}>
          <div className={`${"container"}`}>
            <h2 className="font title1">
              Que pena! Estamos em desenvolvimento :(
            </h2>
            <p className="font paragraph">
              Nossa aplicação está em desenvolvimento, em breve teremos
              novidades
            </p>
          </div>
        </section>
      </div>
    </>
  );
};
