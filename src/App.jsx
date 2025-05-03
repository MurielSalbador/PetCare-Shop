import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './component/login/Login.jsx';
import Register from './component/register/Register.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
