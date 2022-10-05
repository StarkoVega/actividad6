import { useState } from "react";
import Latex from "react-latex";

const Ejercicio4 = () => {
  const formula1 = "$$\\sum_{i=0}^n ar^i =a+ar+ar^2+ar^3+...+ar^n$$";
  const formula2 = "$$\\sum_{i=0}^n ar^i = \\frac{ar^{n+1}-a}{r-1}$$";

  const [input, setInput] = useState({
    r: 0,
    a: 0,
    n: 0,
  });
  const [formula3, setFormula3] = useState("");
  const [formula4, setFormula4] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // let str = "";
    // let resultado1 = 0;
    // for (let i = 0; i <= input; i++) {
    //   i === 0
    //     ? (str = str.concat(`$$${Math.pow(2, i)}$$`))
    //     : (str = str.concat(`$$+${Math.pow(2, i)}$$`));
    //   resultado1 += Math.pow(2, i);
    // }
    // str = str.concat(`$$=${resultado1}$$`);
    // setFormula3(str);
    // let resultado2 = Math.pow(2, parseInt(input) + 1) - 1;
    // setFormula4(
    //   `$$\\sum_{i=0}^{${input}} 2^i = 2^{${input}+1} -1 =${resultado2}$$`
    // );
  };

  const handleChange = (event) => {
    // setInput(...input,[event.target.id]: event.target.value);
    console.log(event.target.id);
  };

  return (
    <main className="container mt-5">
      <div className="row justify-content-center">
        <div className="col col-md-8">
          <h2 className="">Ejercicio 4</h2>
          <p className="fs-5 lh-lg">
            Encuentra el resultado de una sequencia geometrica
            <br />
            <Latex>{formula1}</Latex>
            <br />
            Usando la formula <br />
            <Latex>{formula2}</Latex>
          </p>
          <div className="row justify-content-center my-3">
            <div className="col-lg-8">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="n" className="form-label">
                    n:
                  </label>
                  <input
                    type="number"
                    className="form-control mb-4"
                    id="n"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4 text-center">
                  <button type="submit" className="btn btn-primary">
                    Calcular
                  </button>
                </div>
              </form>
            </div>
            <p className="fs-5 lh-lg mb-4">
              <Latex>{formula3}</Latex>
            </p>
            <p className="fs-5 lh-lg mb-4">
              <Latex>{formula4}</Latex>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Ejercicio4;
