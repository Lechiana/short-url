import "./menu.css";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="menu">
      <button className="btn btn-active btn-primary">
        <Link to="/links" className="menu-item">
          รายการของฉัน
        </Link>
      </button>
    </div>
  );
}
