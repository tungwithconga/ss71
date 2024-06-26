import React, { useState } from 'react';
import Count from './components/bt1/Count';
import ListNumber from './components/bt2/ListNumber';
import Switch from './components/bt3/Switch';
import Bt4 from './components/bt4/Bt4';
import Bt5 from './components/bt5/Bt5';
import LanguageToggle from './components/bt6/LanguageToggle';
import Bt7 from './components/bt7/Bt7';
import Bt8 from './components/bt8/Bt8';
import Login from './components/bt8/Login';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      
      <h1>Bt1:</h1>
      <Count />
      <h1>Bt2:</h1>
      {/* <ListNumber /> */}
      <h1>Bt3:</h1>
      <Switch />
      <h1>Bt4:</h1>
      <Bt4 />
      <h1>Bt5:</h1>
      <Bt5 />
      <h1>Bt6:</h1>
      <LanguageToggle />
      <h1>Bt7:</h1>
      <Bt7 />
      <h1>Bt8:</h1>
      {isLoggedIn ? (
        <Login onLogout={handleLogout} />
      ) : (
        <Bt8 onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}
