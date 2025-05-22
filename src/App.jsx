import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Login from './component/login/Login.jsx';
import Register from './component/register/Register.jsx';
import FaqQuestions from './component/faq/FaqQuestions.jsx';
import Footer from './component/footer/Footer.jsx';
import Home from './component/home/Home.jsx'
import Shop from '../src/componentsCart/Shop.jsx';
import CartHeader from '../src/componentsCart/CartHeader.jsx';
import ContactForm from './component/contact/ContactForm.jsx'
import './App.css';

function AppContent() {
  const location = useLocation();


  const hideFooter = location.pathname === '/login' || location.pathname === '/register'|| 
  location.pathname === '/cart' ||
  location.pathname === '/contact';

  return (
    <>
      <div className="app-wrapper">
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/faq" element={<FaqQuestions />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<CartHeader />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
      </main>
      
      {!hideFooter && <Footer />}
      </div>
      <ToastContainer position="top-right" autoClose={1500} />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
