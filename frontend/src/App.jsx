import { Routes, Route, Navigate } from 'react-router-dom';
import LoginSignup from './pages/LoginSignup';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Routes>
      {/* Redirect root URL to /login */}
      <Route path="/" element={<Navigate to="/login" />} />

      {/* Login / Signup page */}
      <Route path="/login" element={<LoginSignup />} />

      {/* Dashboard page */}
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
