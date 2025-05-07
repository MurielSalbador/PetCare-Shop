import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Login from './component/login/Login.jsx';
import Register from './component/register/Register.jsx';
import FaqQuestions from './component/faq/FaqQuestions.jsx';
import Footer from './component/footer/Footer.jsx';
import './App.css';

function AppContent() {
  const location = useLocation();


  const hideFooter = location.pathname === '/login' || location.pathname === '/register';

  return (
    <>
      <div className="app-wrapper">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/faq" element={<FaqQuestions />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={1500} />

      {!hideFooter && <Footer />}
      </div>
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
