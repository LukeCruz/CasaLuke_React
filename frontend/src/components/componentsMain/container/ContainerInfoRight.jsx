import React from 'react';

import travelImage from '../../../assets/png/viajante.png';
// import * as Scroll from 'react-scroll';
// let scroll = Scroll.animateScroll;

export default function ContainerInfoLeft() {
    return (
        <div
            className="containerInfo"
            id="containerInfo">
            <div className='containerInfoImage'>
                <img
                    src={travelImage}
                    alt="imagel"
                    className="imageTraveler" />
            </div>
            <h3 className="leftTextContainer">
                <a
                    id="houseLinks"
                    href='https://linkfly.to/maresestrellados'
                    target="_blank"
                    rel="noreferrer">
                    visitação
                </a>
            </h3>
            <p
                className="p1">Disponiveis em Paraty</p>
            <h3
                className="leftTextContainer">Praias</h3>
            <p
                className="p1">Paradisíacas</p>


            <h3
                className="leftTextContainer">Cachoeiras</h3>


            <p
                className="p1"
                id="">De tirar o folego</p>
        </div>

    );
};