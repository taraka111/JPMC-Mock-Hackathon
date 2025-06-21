import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppNavbar from './components/AppNavbar';
import HomePage from './pages/HomePage';
import RoleSelector from './components/RoleSelector';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import AnganwadiDashboard from './pages/AnganwadiDashboard';
import BeneficiaryDashboard from './pages/BeneficiaryDashboard';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/RoleSelector" element={<RoleSelector />} />
        <Route path="/login/:role" element={<Login />} />
        <Route path="/register" element={<Register />} /> 
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/anganwadi/dashboard" element={<AnganwadiDashboard />} />
        <Route path="/beneficiary/dashboard" element={<BeneficiaryDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
