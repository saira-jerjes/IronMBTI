

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Iron MBTI
        </a>
        <div className="navbar-nav mb-2 me-auto"></div>
        <ul className="navbar-nav me-auto mb-lg-0 pe-5">
          <li className="nav-item pe-5">Personality test</li>
          <li className="nav-item pe-5">Other tests</li>
          <li className="nav-item pe-5">Our Team</li>

        </ul>

        
      </div>
    </nav>
  );
}

export default Navbar;
