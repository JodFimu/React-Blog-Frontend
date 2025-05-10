import React from 'react';
import {SearchAppBar} from '../components/NavBar';
import './dashboardPage.css';

export const DashboardPage = () => {
  return (
    <div className="dashboard-container">
        <div className='dashboard-background'/>
        <SearchAppBar />
        <h1>Dashboard</h1>
    </div>
  );
}