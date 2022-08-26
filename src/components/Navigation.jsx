import React from 'react';

import ButtonCloseMenu from './ButtonCloseMenu';
import ButtonOpenMenu from './ButtonOpenMenu';
import Menu from './Menu';
import logo from '../assets/logo4.png'

import openMenu from '../actions/openMenu'
import closeMenu from '../actions/closeMenu'
class Navigation extends React.Component {
    render() {
return(
    <nav id="navigation" className="" >

        <div className="wrapper">          
            <img className="logotipo" src={logo} alt="logoMenu"/>
            <ButtonCloseMenu onClick={closeMenu} className="closeButton" id="closeMenu"/>
            <ButtonOpenMenu onClick={openMenu} className="openButton" id="openButton"/>           
        </div>
        <Menu/>
    </nav>

      );
    }
  }

  export default Navigation;