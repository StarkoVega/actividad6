import "./App.css";
import Induccion from "./Induccion";
import Nav from "./Nav";
import Ejercicio1 from "./Ejercicio1";
import Ejercicio2 from "./Ejercicio2";
import Ejercicio3 from "./Ejercicio3";
import Ejercicio4 from "./Ejercicio4";
import Ejercicio5 from "./Ejercicio5";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Induccion />} />
          <Route path="/Ejercicio1" element={<Ejercicio1 />} />
          <Route path="/Ejercicio2" element={<Ejercicio2 />} />
          <Route path="/Ejercicio3" element={<Ejercicio3 />} />
          <Route path="/Ejercicio4" element={<Ejercicio4 />} />
          <Route path="/Ejercicio5" element={<Ejercicio5 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
