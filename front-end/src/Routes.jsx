import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="/login" /> } />
      <Route path="/login" element={ <Login /> } />
    </Routes>
  );
}

export default AppRoutes;
