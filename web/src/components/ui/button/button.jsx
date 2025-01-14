import { Link } from "react-router-dom";
import "./buton.css";

function Button() {
  return (
    <Link
      className="link-underline-opacity-0  m-3 btn rounded rounded-pill"
      to="personality-test"
    >
      Llévame al test
    </Link>
  );
}
export default Button;
