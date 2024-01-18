import { Routes, Route, Link } from "react-router-dom";
import Red from "./components/Red";
import Blue from "./components/Blue";
import Home from "./components/Home";
import Yellow from "./components/Yellow";

export default function App() {
  return (
    <div id="container">
      <h1>React Router Colors</h1>
      <div id="navbar">
        <Link to="/home">Home</Link>
        <Link to="/red">Red</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/yellow">Yellow</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/red" element={<Red />} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/yellow" element={<Yellow />} />
        </Routes>
      </div>
      <div>
        <footer className="footer">
          <Link to="/home">Home</Link>
          <Link to="/red">Red</Link>
          <Link to="/blue">Blue</Link>
          <Link to="/yellow">Yellow</Link>
        </footer>
      </div>
    </div>
  );
}