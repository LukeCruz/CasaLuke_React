import React from 'react';

import imageAbout from '../assets/imgLuke3.png'

class About extends React.Component {
    render(){
        return(

    <div class="sobreNos" id="about">
        <h3 class="titulo">Sobre Nós</h3>
        <h1>Entenda quem somos e por que existimos</h1>
        < p class="SobreNosArtigo">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
        </p>
        <img src={imageAbout} alt="imagem dos quartos" class="imageSobreNos"/>
    </div>
);
}}

export default About;