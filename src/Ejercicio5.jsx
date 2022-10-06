import { useState } from "react";
import Latex from "react-latex";

const Ejercicio5 = () => {
  const formula1 = "$$2+4+6+7+10+12+14+16+...$$";
  const formula2 = "$$\\sum_{i=1}^n 2i =n(n+1)$$";

  const [input, setInput] = useState(0);
  const [formula3, setFormula3] = useState("");
  const [formula4, setFormula4] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let str = "";
    let resultado1 = 0;
    for (let i = 1; i <= input; i++) {
      i === 1
        ? (str = str.concat(`$$${2 * i}$$`))
        : (str = str.concat(`$$+${2 * i}$$`));
      resultado1 += 2 * i;
    }
    str = str.concat(`$$=${resultado1}$$`);
    setFormula3(str);
    let resultado2 = input * (parseInt(input) + 1);
    setFormula4(`$$\\sum_{i=1}^{${input}} 2i =${input}(${parseInt(input) + 1}) =${resultado2}$$`);
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <main className="container mt-5">
      <div className="row justify-content-center">
        <div className="col col-md-8">
          <h2 className="">Ejercicio 2</h2>
          <p className="fs-5 lh-lg">
            Encuentra el resultado de la suma
            <br />
            <Latex>{formula1}</Latex>
            <br />
            Usando la formula
            <br />
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
                    min="1"
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

export default Ejercicio5;
