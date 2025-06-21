import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import AppNavbar from './components/AppNavbar';
import HomePage from './pages/HomePage';
import RoleSelector from './components/RoleSelector';
import Login from './pages/Login';
import Register from "./pages/Register";

import AWWDashboard from "./pages/AWWDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import { useEffect } from "react";

// Wrapper to use `useLocation` with `AppNavbar`
function AppWrapper() {
  const location = useLocation();

  // Define routes where navbar should be hidden
  const hideNavbarRoutes = ["/admin/dashboard", "/anganwadi/dashboard"];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  // Optionally scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

import AWWDashboard from "./pages/AWWDashboard"; // adjust path if needed
import BeneficiaryDashboard from "./pages/BeneficiaryDashboard"; // adjust path if needed
import ViewBeneficiary from "./pages/ViewBeneficiary"; // adjust path if needed


  return (
    <>
      {!shouldHideNavbar && <AppNavbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/RoleSelector" element={<RoleSelector />} />
        <Route path="/login/:role" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/register/:role" element={<Register />} />
        <Route path="/anganwadi/dashboard" element={<AWWDashboard />} />


        <Route path="/beneficiary/dashboard" element={<BeneficiaryDashboard />} />
        <Route path="/anganwadi/beneficiaries" element={<ViewBeneficiary />} />


        {/* Add more routes as needed */}

      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
