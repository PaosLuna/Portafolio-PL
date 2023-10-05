import "./buttonActive.css";
import { Link } from "react-router-dom";

const FunButton = () => {
  return (
    <div>
      <button className="buttonActive">
        <Link to="/about-me">DA CLICK AQUÍ</Link>
      </button>
    </div>
  );
};

export default FunButton;
