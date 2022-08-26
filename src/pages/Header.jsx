import React from 'react';

import Navigation from'../components/Navigation';
import Button from '../components/button';
import ImageWoman from '../components/imageWoman';
import ContainerInfo from '../components/ContainerInfo';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ButtonFloat from '../components/ButtonFloat';

class Main extends React.Component {
render() {
    return(
<div>

        <body className="body">
            <Navigation/>
        <header className="header">
            <div class="">
              <h4>BOAS-VINDAS A CASA LUKE 👋</h4>
              <h1>Hospedagens de qualidade</h1>
              <p>
                        Temos a melhor infraestutura de casas de temporada de paraty, contamos com diversas opções de acomodacoes
              </p>
              </div>
              <div className="homePage">
                <Button/>
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
</div>
      );
    }
  }

export default Main;

