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
    let a = parseInt(input.a);
    let r = parseInt(input.r);
    let n = parseInt(input.n);
    let str = "";
    let resultado1 = 0;
    for (let i = 0; i <= n; i++) {
      i === 0 || a * Math.pow(r, i) < 0
        ? (str = str.concat(`$$${a * Math.pow(r, i)}$$`))
        : (str = str.concat(`$$+${a * Math.pow(r, i)}$$`));
      resultado1 += a * Math.pow(r, i);
    }
    str = str.concat(`$$=${resultado1}$$`);
    setFormula3(str);
    let resultado2;
    if (r !== 1) {
      resultado2 = (a * Math.pow(r, n + 1) - a) / (r - 1);
      setFormula4(
        `$$\\sum_{i=0}^{${n}} ${a}(${r}^i) = \\frac{${a}(${r}^{${n + 1}})${
          a < 0 ? `+${Math.abs(a)}` : `-${a}`
        }}{${r - 1}} =${resultado2}$$`
      );
    } else {
      resultado2 = a * (n + 1);
      setFormula4(
        `$$\\sum_{i=0}^{${n}} ${a}(${r}^i) = ${a}(${n}+1) =${resultado2}$$`
      );
    }
  };

  const handleChange = (event) => {
    setInput({ ...input, [event.target.id]: event.target.value });
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
                  <label htmlFor="a" className="form-label">
                    a:
                  </label>
                  <input
                    type="number"
                    className="form-control mb-4"
                    id="a"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="r" className="form-label">
                    r:
                  </label>
                  <input
                    type="number"
                    className="form-control mb-4"
                    id="r"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="n" className="form-label">
                    n:
                  </label>
                  <input
                    type="number"
                    className="form-control mb-4"
                    id="n"
                    onChange={handleChange}
                    min="0"
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
