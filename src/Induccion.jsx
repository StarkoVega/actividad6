const Induccion = () => {
  return (
    <div className="induccion">
      <div className="row">
        <div className="induccion__col">
          <h1 className="induccion__title">Induccion Matematica</h1>
          <p className="induccion__para">
            En matemáticas, la inducción es un razonamiento que permite
            demostrar proposiciones que dependen de una variable{" "}
            <span className="induccion__para--special">n</span> que toma una
            infinidad de valores enteros. En términos simples, la inducción
            matemática consiste en el siguiente razonamiento:
            <br />
            <span className="induccion__para--tab">
              Dado un número entero a que tiene la propiedad{" "}
              <span className="induccion__para--special">P</span>, y el hecho de
              que si hasta cualquier número entero{" "}
              <span className="induccion__para--special">n</span> con la
              propiedad <span className="induccion__para--special">P</span>{" "}
              implique que{" "}
              <span className="induccion__para--special">n + 1</span> también la
              tiene, entonces, los números enteros a partir de a tienen la
              propiedad <span className="induccion__para--special">P</span>.
            </span>
            <br />
            La demostración está basada en el axioma denominado principio de la
            inducción matemática.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Induccion;
