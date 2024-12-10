import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Iron MBTI
        </Link>

        
      </div>
    </nav>
  );
}

export default Navbar;
