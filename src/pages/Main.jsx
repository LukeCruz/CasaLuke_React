import React from 'react';

import Navigation from'../components/menu/Navigation';
import ButtonTop from '../components/buttons/ButtonTop';
import ImageWoman from '../components/container/imageWoman';
import ContainerInfo from '../components/cards/ContainerInfo';
import ContainerInfoLeft from '../components/cards/containerInfoLeft';
import ContainerInfoRight from '../components/cards/containerInfoRight';
import Services from '../components/cards/Services';
import About from '../components/cards/About';
import Contact from '../components/cards/Contact';
import Footer from '../components/container/Footer';
import ButtonFloat from '../components//buttons/ButtonFloat';

import stars from '../assets/stars.png';
import logo from '../assets/logo1.png';

export default function Main() {
  return(

      <body onScroll="onScroll()" className="" id="homePage">
            <Navigation/>
        <header>
        <div className="" id=""> 
        <div className='containerLogotipo'>
          <div className='logoContainerImage'>
          <img className='logoContainerLogotipo' src={logo}/>
         <div className='containerStart'>
          <h2 className='numeros percentContainerStart'>100% 
          </h2>
          <img className='stars' src={stars}></img>
          </div>
          <p>Feedbacks</p>
          </div>
          <div className='conteinerLogotipoText'>
              <h4 className="intro showtext">BOAS-VINDAS A CASA LUKE 👋</h4>
              <h1>Hospedagens de qualidade</h1>
              <p className="intro">
                  Temos a melhor infraestutura de casas de temporada de paraty, contamos com diversas opções de acomodacoes
              </p>
              <ButtonTop/>
          </div>
        </div>
              <ImageWoman/>
              <div className="containersInfo">
              <ContainerInfoLeft/>
                <ContainerInfo/>
                <ContainerInfoRight/>
              </div>
                
              </div>
                <About/>
              <Contact/>
                <Footer/>
        </header>
                <ButtonFloat/>
        </body>
      );
};
