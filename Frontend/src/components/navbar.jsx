import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src="../src/designs/img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        <NavLink className="main-nav-item" to="/signin">
          <i className="fa fa-user-circle"></i>
          Sign In
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
