import React from 'react';

import ButtonOpenMenu from '../buttons/ButtonOpenMenu';
import ButtonWhatsApp from '../buttons/ButtonWhatsApp';
import logo from '../../../assets/logo4.png'

const NavBar = React.Component;

export default class Navigation extends NavBar {
    render() {
return(
    <nav 
      id="navigation" 
      className="nav" >
        <div className='wrapper'>
        <img 
          className="logotipo" 
          src={logo} 
          alt="logoMenu"/>

<ul className='ListMenuDesktop'>
      <li className="listDesktop"> 
        <a className="listLink" onclick="closeMenu()" href="#homePage">inicio</a>
      </li>
      <li className="listDesktop" >
        <a className="listLink" onclick="closeMenu()" href="#about">Sobre </a>
      </li>
      <li className="listDesktop">
        <a className="listLink" onclick="closeMenu()" href="#services" >Serviços</a>
      </li>
      <li className="listDesktop">
        <a className="listLink" onclick="closeMenu()" href="#services" >Paraty</a>
      </li>
      <li className="listDesktop">
      </li>

    </ul>
    <ButtonOpenMenu/>
    <ButtonWhatsApp/>
        </div>
    </nav>

    );
  }
};