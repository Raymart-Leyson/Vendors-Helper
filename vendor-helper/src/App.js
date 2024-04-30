import React from 'react';
import './App.css';
import Sidebar from './pages/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transaction';
import Search from './pages/Search';
import Notifications from './pages/Notification';
import Invoice from './pages/Invoice_Generation';
import Payment from './pages/Payment_Integration';
import Reports from './pages/Reports';
import Backup from './pages/Data_Backup';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/search" element={<Search />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/backup" element={<Backup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;