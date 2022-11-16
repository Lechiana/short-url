import "./error.css";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="container-error">
      <img src="/not-found.png" alt="ไม่พบหน้านี้" />
      <h1>ไม่พบหน้านี้</h1>
      <Link to="/">กลับหน้าแรก</Link>
    </div>
  );
}
