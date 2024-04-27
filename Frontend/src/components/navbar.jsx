function Navbar() {

  return (
    <div>
      <nav className="main-nav">
      <a className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src="./designs/img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
      <a className="main-nav-item" to="/sign-in">
          <i className="fa fa-user-circle"></i>
          Sign In
        </a>
      </div>
      </nav>
    </div>
  )
}
export default Navbar