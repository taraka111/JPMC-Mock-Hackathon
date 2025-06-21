import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import HomePage from './pages/HomePage';
import RoleSelector from './components/RoleSelector';


function App() {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/RoleSelector" element={<RoleSelector />} />
      </Routes>
    </Router>
  );
}

export default App;
