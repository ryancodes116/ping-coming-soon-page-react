import React from 'react';
import './App.css';
import Details from './components/Details';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Details />
      <Dashboard />
      <Footer />
    </div>
  );
};

export default App;
