import React from 'react';

import ButtonCloseMenu from '../components/ButtonCloseMenu';
import ButtonOpenMenu from '../components/ButtonOpenMenu';
import Menu from '../components/Menu';


class Navigation extends React.Component {
    render() {
return(
    <nav id="navigation" class="" >

        <div class="wrapper">          
            <img class="logotipo" src="assets/logo4.png" alt=""/>
            <ButtonCloseMenu onClick="closeMenu()" class="closeButton" id="closeMenu"/>
            <ButtonOpenMenu onClick="openMenu()" class="openButton" id="openButton"/>           
        </div>
        <Menu/>
    </nav>

      );
    }
  }

  export default Navigation;