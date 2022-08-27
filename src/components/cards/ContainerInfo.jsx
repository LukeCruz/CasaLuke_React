import React from 'react';

const ContainerInformation = React.Component;
// import * as Scroll from 'react-scroll';
// import Fade from 'react-reveal/Fade';
// let scroll = Scroll.animateScroll;

export default class ContainerInfo extends ContainerInformation {
    render() {
      return(

    <div  
        className="containerInfo" 
        id="containerInfo">
    <h3 
        className="numeros">
        <a 
        href='https://linkfly.to/maresestrellados
        ' 
        target="_blank" 
        rel="noreferrer"> 
            +20
        </a>
    </h3>
        <p  
        className="p1">acomodações disponiveis</p>
    <h3 
        className="numeros">+10000</h3>
        <p 
        className="p1">hospedagens realizadas</p>
    <h3 
        className="numeros">+3</h3>
        <p 
        className="p1" 
        id="">Anos no mercado</p>
    </div>

    );
  }
};