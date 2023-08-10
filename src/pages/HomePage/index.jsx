import style from "./style.module.sass";
export const HomePage = () => {
  const data = JSON.parse(localStorage.getItem("@token")) || []
  return (
    <>
      <div className={`${style.container}`}>
        <section className={style.presents}>
          <div className="container">
            <h2 className="font title1">Ola, {data.name}</h2>
            <p className="font headlineBold">{data.module}</p>
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
