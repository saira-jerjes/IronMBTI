import { NavLink } from 'react-router-dom';
import logo from '../../../assets/imgs/logo-web.png'
import './navbar.css'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top transparent" style={{ zIndex: 10 }}>
      <div className="container-fluid  d-flex align-items-center">
        <NavLink className="navbar-brand ms-5" to="/" style={{ zIndex: 20 }} >
          <img src={logo} alt="logo" style={{ cursor: 'pointer' }} />
        </NavLink>
  
        <div className="collapse navbar-collapse d-flex justify-content-center w-100 position-fixed" id="navbarNavAltMarkup">
          <div className="navbar-nav" >
            <NavLink className="nav-link" aria-current="page" to='personality-test'  style={({ isActive }) => {
              return isActive ? { color: "white", opacity: '100%' } : { color: "white",  opacity: '60%' };}}>
              Test de personalidad
            </NavLink>
            <NavLink className="nav-link" aria-current="page" to='other-tests' style={({ isActive }) => {
              return isActive ? { color: "white", opacity: '100%' } : { color: "white",  opacity: '60%' };}}>
              Otros tests
            </NavLink>
            <NavLink className="nav-link" aria-current="page" to='our-team'  style={({ isActive }) => {
              return isActive ? { color: "white", opacity: '100%' } : { color: "white",  opacity: '60%' };}}>
              Equipo
            </NavLink>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
