import React from 'react';

import trip2020 from '../../assets/trip2020.png';
import trip2021 from '../../assets/trip2021.jpg';
import trip2022 from '../../assets/trip2022.jpg';

export default function About () {
        return(

    <div className="sobreNos" 
         id="about">
        <h3 
          className="titulo">Sobre Nós</h3>
        <h1>Entenda quem somos e por que existimos</h1>
        <img class="tripAdvisor" src={trip2020}/>
        <img class="tripAdvisor" src={trip2021}/>
        <img class="tripAdvisor" src={trip2022}/>

        <p className="SobreNosArtigo">
          Buscamos a excelência em oferecer
          as melhores soluções para que seu sonho , desejo , férias ou mesmo um pesseio de final de semana
          sejam incríveis e inesqueciveis! Trazemos desde hospedagens aos mais variados tipos de serviço, tudo para que nossos hospedes, ammigos e parceiros 
          tenham a melhor experiência possível. 
          Nosso trabalho é realizar o seu Sonho!
        </p>
    </div>
  );
 }