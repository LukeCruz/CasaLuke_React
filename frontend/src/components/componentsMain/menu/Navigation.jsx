import React from 'react';
import {Link} from 'react-router-dom';

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
        <Link className="listLink" to='/'>inicio</Link>
      </li>
      <li className="listDesktop" >
        <Link className="listLink" to='/About'>Sobre </Link>
      </li>
      <li className="listDesktop">
        <Link className="listLink"  to="/services" >Serviços</Link>
      </li>
      <li className="listDesktop">
        <Link className="listLink"  to='articles' >Paraty</Link>
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