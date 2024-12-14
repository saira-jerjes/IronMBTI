import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand ms-5 me-5" to="/">
          Iron MBTI
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
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={{ float: 'right'}}>
          <div className="navbar-nav" >
            <Link className="nav-link" aria-current="page" to='personality-test'>
              Personality Test
            </Link>
            <Link className="nav-link" aria-current="page" to='other-tests'>
              Other Tests
            </Link>

            <Link className="nav-link" aria-current="page" to='our-team'>
              Our team
            </Link>
            
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
