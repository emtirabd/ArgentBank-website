import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import '../designs/css/main.css'
import Navbar from './components/navbar.jsx'
import Footer from './components/footer.jsx'
import Home from './pages/home.jsx'
import Signin from './pages/signin.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
)
