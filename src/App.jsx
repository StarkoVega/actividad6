import "./App.css";
import Induccion from "./Induccion";
import Nav from "./Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Ejercicio1 from "./Ejercicio1";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Induccion />} />
          <Route path="/Ejercicio1" element={<Ejercicio1 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
