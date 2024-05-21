import { NavLink, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Navbar() {

  const isLoggedIn = useSelector((state) => state.log.isLoggedIn);
  const userData = useSelector((state) => state.user);
  const location = useLocation();
  const dispatch = useDispatch();

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    localStorage.removeItem('token');
    dispatch({ type: 'LOGOUT' });
  };

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
        {isLoggedIn ? (
          <div>
            <NavLink to="/profile" className="main-nav-item">
              <i className="fa fa-user-circle"></i> {userData.userName}
            </NavLink>
              <NavLink
                to="/"
                onClick={handleLogout}
                className="main-nav-item"
              >
                <i className="fa fa-sign-out"></i> Sign Out
              </NavLink> 
          </div>
        ) : (
          <NavLink to="/signin" className="main-nav-item">
            <i className="fa fa-user-circle"></i> Sign In
          </NavLink>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
