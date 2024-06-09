import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../reducers/user.reducer";
import UserEdit from "../components/editUser";
import Account from "../components/account";
import data from "../data/account.json";

function User() {
  const isLoggedIn = useSelector((state) => state.log.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!isLoggedIn) {
        navigate("/signin");
        return;
      }

      const token = window.sessionStorage.getItem("token") || window.localStorage.getItem("token");

      try {
        const response = await fetch(`http://localhost:3001/api/v1/user/profile`, {
          method: "POST",
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!response.ok) {
          throw new Error("Problème de récupération de l'utilisateur:");
        }

        const userData = await response.json();
        dispatch(setUser(userData.body));

        // GET ACCOUNTS //
        const userId = `${userData.body.firstName} ${userData.body.lastName}`;
        const userAccounts = data.usersAccounts.find((userAccount) => userAccount.id === userId);
        if (userAccounts) {
          setAccounts(userAccounts.accounts);
        }
      } catch (error) {
        console.error("Problème de récupération de l'utilisateur:", error);
      }
    };

    fetchData();
  }, [isLoggedIn, dispatch, navigate]);

  return (
    <main className="main bg-dark">
      <UserEdit />
      <h2 className="sr-only">Accounts</h2>
      {accounts.map((account) => (
        <Account
          key={account.name}
          name={account.name}
          solde={account.solde}
          balance={account.balance}
        />
      ))}
    </main>
  );
}

export default User;
