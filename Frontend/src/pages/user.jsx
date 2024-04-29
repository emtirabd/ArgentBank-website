import Account from "../components/account"


function User() {

  return (

    <main className="main bg-dark">
    <div className="header">
      <h1>Welcome back<br />Tony Jarvis!</h1>
      <button className="edit-button">Edit Name</button>
    </div>
    <Account />
  </main>

  )
}
export default User