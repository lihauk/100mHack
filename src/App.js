import React from 'react';
import SimpleTabs from './components/Tabs';
import HomePage from './pages/HomePage';
import EinoPage from './pages/EinoPage';
import PaalPage from './pages/PaalPage';
import LisaPage from './pages/LisaPage';

const App = () => {
  return (
    <div>
      <div>LOGO $$$Pokemons4cash$$$</div>
      <SimpleTabs>
        <EinoPage Label={'Eino page'} />
        <LisaPage Label={'Lisa page'} />
        <PaalPage Label={'Om Pokemon4Cash'} />
        <HomePage Label={'the TEAM page'} />
      </SimpleTabs>
    </div>
  );
};

export default App;
