const Induccion = () => {
  return (
    <header className="container">
      <div className="row align-items-center">
        <div className="col-md-auto">
          <h1 className="display-1">
            Induccion
            <br />
            Matematica
          </h1>
        </div>
        <div className="col">
          <p className="lead">
            En matemáticas, la inducción es un razonamiento que permite
            demostrar proposiciones que dependen de una variable n que toma una
            infinidad de valores enteros. En términos simples, la inducción
            matemática consiste en el siguiente razonamiento: Dado un número
            entero a que tiene la propiedad P, y el hecho de que si hasta
            cualquier número entero n con la propiedad P implique que n + 1
            también la tiene, entonces, los números enteros a partir de a tienen
            la propiedad P. La demostración está basada en el axioma denominado
            principio de la inducción matemática.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Induccion;
