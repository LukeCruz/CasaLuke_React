import React from 'react';

import * as Scroll from 'react-scroll';
import Fade from 'react-reveal/Fade';

let scroll = Scroll.animateScroll;

class ContainerInfo extends React.Component {
    render() {
return(

    <div  className="containerInfo" id="containerInfo">
    <h3 className="numeros">+20</h3>
        <p className="p1">acomodações disponiveis</p>
    <h3 className="numeros">+10000</h3>
        <p className="p1">hospedagens realizadas</p>
   <h3 className="numeros">+3</h3>
        <p className="p1" id="">Anos no mercado</p>
</div>

);

    }
}

export default ContainerInfo ;