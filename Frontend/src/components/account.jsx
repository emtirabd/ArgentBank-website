import data from '../data/account.json'; 
import '/src/designs/css/main.css'

function Account() {
    const user = data.usersAccounts.find((u) => u.id === "Tony Stark"); // Remplacez par l'utilisateur souhaité

  return (
    <section className="account">
      {user.accounts.map((account, index) => (
        <div key={index} className="account-content-wrapper">
          <h3 className="account-title">{account.name}</h3>
          <p className="account-amount">${account.solde}</p>
          <p className="account-amount-description">{account.balance}</p>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </div>
      ))}
    </section>
  )
}
export default Account