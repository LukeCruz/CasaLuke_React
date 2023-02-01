import React from 'react';

import Navigation from'../components/menu/Navigation';
import ButtonTop from '../components/buttons/ButtonTop';
import ImageWoman from '../components/container/imageWoman';
import ContainerInfo from '../components/cards/ContainerInfo';
import ContainerInfoRight from '../components/cards/containerInfoRight';
import Services from '../components/cards/Services';
import About from '../components/cards/About';
import Contact from '../components/cards/Contact';
import Footer from '../components/container/Footer';
import ButtonFloat from '../components//buttons/ButtonFloat';



export default function Main() {
    return(

        <body onScroll="onScroll()" className="" id="homePage">
            <Navigation/>
        <header>
            <div class="" id="">
              <h4 class="intro">BOAS-VINDAS A CASA LUKE 👋</h4>
              <h1>Hospedagens de qualidade</h1>
              <p class="intro">
                  Temos a melhor infraestutura de casas de temporada de paraty, contamos com diversas opções de acomodacoes
              </p>
               <ButtonTop/>
              <div className="containersInfo">
                <ContainerInfo/>
                <ContainerInfo/>
                <ContainerInfoRight/>
              </div>
                <Services/>
              </div>
                <About/>
                <Contact/>
                <tripAdvisor/>
                <Footer/>
                <ButtonFloat/>
        </header>
        </body>
      );
};
