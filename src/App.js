import React from 'react';
import logo from './logo.svg';
import './App.css';

import { TopContainer }         from './components/TopContainer';
import { Header }               from './components/pages/Header';
import { DevHeader }            from './components/pages/DevHeader';
import { Main }                 from './components/pages/Main';
import { Footer }               from './components/pages/Footer';



function App() {
  return (
    <div className="app_container">
      <Header />
      <DevHeader />
      <Main />
      <Footer />
    </div>
    
  );
}

export default App;

