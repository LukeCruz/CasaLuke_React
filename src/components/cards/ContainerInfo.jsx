import React from 'react';
import Fade from 'react-reveal/Fade';

// import * as Scroll from 'react-scroll';
// let scroll = Scroll.animateScroll;

export default function ContainerInfo() {
      return(
    <div  
        className="containerInfo" 
        id="containerInfo">
    <Fade top>
    <h3 className="numeros">
        <a href='https://linkfly.to/maresestrellados
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
    </Fade>
    </div>

    );
  };