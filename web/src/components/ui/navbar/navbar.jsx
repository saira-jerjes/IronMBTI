import { Link } from 'react-router-dom';
import logo from '../../../assets/imgs/logo-web.png'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top transparent ">
      <div className="container-fluid  d-flex align-items-center">
        <Link className="navbar-brand ms-5" to="/">
          <img src={logo} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-center w-100 position-fixed" id="navbarNavAltMarkup">
          <div className="navbar-nav" >
            <Link className="nav-link" aria-current="page" to='personality-test' style={{color: 'white'}}>
              Test de personalidad
            </Link>
            <Link className="nav-link" aria-current="page" to='other-tests' style={{color: 'white'}}>
              Otros tests
            </Link>
            <Link className="nav-link" aria-current="page" to='our-team' style={{color: 'white'}}>
              Equipo
            </Link><Link className="nav-link" aria-current="page" to='our-team' style={{color: 'transparent'}}>
            
            </Link>
            
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
