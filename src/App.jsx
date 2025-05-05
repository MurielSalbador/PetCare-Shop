import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Login from './component/login/Login.jsx';
import Register from './component/register/Register.jsx';
import FaqQuestions from './component/faq/FaqQuestions.jsx';
import Footer from './component/footer/Footer.jsx';
import './App.css';

function AppContent() {
  const location = useLocation();

  // Podés ocultar el footer en login y register si querés
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
