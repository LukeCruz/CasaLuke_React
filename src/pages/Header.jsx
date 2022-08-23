import React from 'react';

import Button from '../components/button';
import CardInformation from '../components/CardInformation';
import Services from '../components/Services';
import About from '../components/About';
import Navigation from'../components/Navigation';


class Header extends React.Component {
render() {
    return(

        <body className="body">
            <Navigation/>
            <header class="header">

                <div class="">
                    <h4>BOAS-VINDAS A CASA LUKE 👋</h4>
                    <h1>Hospedagens de qualidade</h1>
                    <p>
                        Temos a melhor infraestutura de casas de temporada de paraty, contamos com diversas opções de acomodacoes
                    </p>

                <Button className="buttonHome"/>
                <CardInformation className="infoContainer"/>
                <Services/>
                <About/>

                </div>
            </header>
        </body>
      );
    }
  }

export default Header;

