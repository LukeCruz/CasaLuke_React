import React from 'react';

import imageAbout from '../../assets/imgLuke3.png'

export default function About () {
        return(

    <div className="sobreNos" 
         id="about">
        <h3 
          className="titulo">Sobre Nós</h3>
        <h1>Entenda quem somos e por que existimos</h1>
        <p className="SobreNosArtigo">
          Buscamos a excelência em oferecer
          as melhores soluções para que seu sonho , desejo , férias ou mesmo um pesseio de final de semana
          sejam incríveis e inesqueciveis! Trazemos desde hospedagens aos mais variados tipos de serviço, tudo para que nossos hospedes, ammigos e parceiros 
          tenham a melhor experiência possível. 
          Nosso trabalho é realizar o seu Sonho!
        </p>
        <a href="https://casa-luke-paraty-praia-e-cachoeira-casa-inteira.ibooked.com.br/"
           target="_blank" 
           rel="noreferrer">
            <img src={imageAbout} 
             alt="imagem dos quartos" 
             class="imageSobreNos"/></a>
    </div>
  );
 }