import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2><Link to="/dashboard" className="sidebar-link">Dashboard</Link></h2>
      <h2><Link to="/transactions" className="sidebar-link">Transaction History</Link></h2>
      <h2><Link to="/search" className="sidebar-link">Search and Filter</Link></h2>
      <h2><Link to="/notifications" className="sidebar-link">Notifications</Link></h2>
      <h2><Link to="/invoice" className="sidebar-link">Invoice Generation</Link></h2>
      <h2><Link to="/payment" className="sidebar-link">Payment Integration</Link></h2>
      <h2><Link to="/reports" className="sidebar-link">Reports</Link></h2>
      <h2><Link to="/backup" className="sidebar-link">Data Backup and Security</Link></h2>
    </div>
  );
}

export default Sidebar;