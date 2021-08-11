import React from 'react';
import logo from '../images/logo.svg'; 

function Header () {
  return (
    <header className="header">
      <a href="/index.html" className="header__link" target="_blank"><img className="header__logo" src={logo} alt="Логотип"/></a>
    </header>
  )
}

export default Header