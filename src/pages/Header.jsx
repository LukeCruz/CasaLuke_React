import React from 'react';

import Button from '../components/button';
import CardInformation from '../components/CardInformation';
import Artigos from '../components/Artigos';


class Header extends React.Component {
render() {
    return(
       <div>
        <h4>BOAS-VINDAS A CASA LUKE 👋</h4>
      <h1>Hospedagens de qualidade</h1>
      <p>
          Temos a melhor infraestutura de casas de temporada de paraty, contamos com diversas opções de acomodacoes
      </p>


<Button className="buttonHome"/>
<CardInformation className="infoContainer"/>
<Artigos/>


     
     
      </div>);
}
}

export default Header;

