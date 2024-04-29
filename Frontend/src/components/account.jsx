import data from '../data/account.json'; 
import '/src/designs/css/main.css'

function Account() {
    const user = data.usersAccounts.find((u) => u.id === "Tony Stark"); // Remplacez par l'utilisateur souhaité

  return (
    <div>
    {user.accounts.map((account, index) => (
      <section key={index} className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">{account.name}</h3>
          <p className="account-amount">${account.solde}</p>
          <p className="account-amount-description">{account.balance}</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    ))}
  </div>
  )
}
export default Account