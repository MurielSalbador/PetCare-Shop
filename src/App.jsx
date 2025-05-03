import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './component/login/Login.jsx';
import Register from './component/register/Register.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
