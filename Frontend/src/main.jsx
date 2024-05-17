import React from 'react';
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import '/src/designs/css/main.css'
import Navbar from './components/navbar.jsx'
import Footer from './components/footer.jsx'
import Home from './pages/home.jsx'
import Signin from './pages/signin.jsx'
import User from './pages/user.jsx'

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/profile" element={<User />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
</Provider>
)
