import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppNavbar from './components/AppNavbar';
import HomePage from './pages/HomePage';
import RoleSelector from './components/RoleSelector';
import Login from './pages/Login';
import Register from "./pages/Register";
import AWWDashboard from "./pages/AWWDashboard"; // adjust path if needed



function App() {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/RoleSelector" element={<RoleSelector />} />
        <Route path="/login/:role" element={<Login />} />
        <Route path="/register" element={<Register />} /> 
       
        

        <Route path="/register/:role" element={<Register />} />
        <Route path="/anganwadi/dashboard" element={<AWWDashboard />} />

        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
