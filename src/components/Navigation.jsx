import React from 'react';

import ButtonCloseMenu from './ButtonCloseMenu';
import ButtonOpenMenu from './ButtonOpenMenu';
import Menu from './Menu';
import logo from '../assets/logo4.png'


class Navigation extends React.Component {
    render() {
return(
    <nav id="navigation" class="" >

        <div class="wrapper">          
            <img class="logotipo" src={logo} alt="logoMenu"/>
            <ButtonCloseMenu onClick="closeMenu()" class="closeButton" id="closeMenu"/>
            <ButtonOpenMenu onClick="openMenu()" class="openButton" id="openButton"/>           
        </div>
        <Menu/>
    </nav>

      );
    }
  }

  export default Navigation;