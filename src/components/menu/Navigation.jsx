import React from 'react';

import ButtonCloseMenu from '../buttons/ButtonCloseMenu';
import ButtonOpenMenu from '../buttons/ButtonOpenMenu';
import Menu from './Menu';
import logo from '../../assets/logo4.png'

const NavBar = React.Component;

export default class Navigation extends NavBar {
    render() {
return(
    <nav 
      id="navigation" 
      className="" >
      <div className="wrapper">          
        <img 
          className="logotipo" 
          src={logo} 
          alt="logoMenu"/>
        
      </div>
    </nav>

    );
  }
};