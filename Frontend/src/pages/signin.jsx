import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Signin() {
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // état de connexion local
  const passwordRef = useRef();
  const usernameRef = useRef();
  const navigate = useNavigate();

  // Rediriger si l'utilisateur est déjà connecté
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/profile');
    }
  }, [isLoggedIn, navigate]);

  // Requête de connexion
  const loginRequest = async () => {
    const loginForm = {
      email: usernameRef.current.value,
      password: passwordRef.current.value,
    };

    const response = await fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginForm),
    });

    return response.json(); // analyse la réponse JSON
  };

  // Gestion du formulaire de connexion
  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await loginRequest();
      if (response.error) {
        triggerLoginFailureAnimation(); // animation en cas d'échec
      } else {
        const token = response.body.token;
        localStorage.setItem('token', token);

        if (rememberMe) {
          localStorage.setItem('token', token);
        }

        setIsLoggedIn(true); // mettre à jour l'état de connexion
        navigate('/profile'); // redirection après succès
      }
    } catch (error) {
      triggerLoginFailureAnimation(); // gestion des erreurs
    }
  };

  // Animation en cas d'échec
  const triggerLoginFailureAnimation = () => {
    passwordRef.current.classList.add('loginFailed');
    usernameRef.current.classList.add('loginFailed');
    setTimeout(() => {
      passwordRef.current.classList.remove('loginFailed');
      usernameRef.current.classList.remove('loginFailed');
    }, 500);
  };

  // Structure du composant
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleLogin}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" required ref={usernameRef} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required ref={passwordRef} />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button" type="submit">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}

export default Signin;
