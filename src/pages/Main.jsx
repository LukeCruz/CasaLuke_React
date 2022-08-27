import React from 'react';

import Navigation from'../components/menu/Navigation';
import ButtonTop from '../components/buttons/ButtonTop';
import ImageWoman from '../components/container/imageWoman';
import ContainerInfo from '../components/cards/ContainerInfo';
import Services from '../components/cards/Services';
import About from '../components/cards/About';
import Contact from '../components/cards/Contact';
import Footer from '../components/container/Footer';
import ButtonFloat from '../components//buttons/ButtonFloat';

class Main extends React.Component {
render() {
    return(

        <body onScroll="onScroll()" className="" id="homePage">
            <Navigation/>
        <header>
            <div class="" id="">
              <h4>BOAS-VINDAS A CASA LUKE 👋</h4>
              <h1>Hospedagens de qualidade</h1>
              <p>
                  Temos a melhor infraestutura de casas de temporada de paraty, contamos com diversas opções de acomodacoes
              </p>
               <ButtonTop/>
                <ImageWoman/>
                <ContainerInfo/>
                <Services/>
              </div>
                <About/>
                <Contact/>
                <Footer/>
                <ButtonFloat/>
        </header>
        </body>
      );
    }
  }

export default Main;

