import "./buttonActive.css";
import { Link } from "react-router-dom";

export const FunButton = () => {
  return (
    <div>
      <button className="buttonActive">
        <Link to="/about-me">DA CLICK AQUÍ</Link>
      </button>
    </div>
  );
};

export const VisitButton = () => {
  return (
    <div>
      <button className="visit-button">VISITAR</button>
    </div>
  );
};
