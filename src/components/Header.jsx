import React from 'react';
import logo from '../assets/cocretainc.jpg'; 

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Logo de Cocreta INC" style={{ width: '100px', height: 'auto' }} />
      <h1>Bienvenido a Cocreta INC</h1>
    </header>
  );
};

export default Header;