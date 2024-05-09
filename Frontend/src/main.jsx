import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import '/src/designs/css/main.css'
import Navbar from './components/navbar.jsx'
import Footer from './components/footer.jsx'
import Home from './pages/home.jsx'
import Signin from './pages/signin.jsx'
import User from './pages/user.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin/>} />
      <Route path="/profile" element={<User/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
)
