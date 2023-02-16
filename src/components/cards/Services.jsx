import React from 'react';
import houses from '../../assets/imgLuke3_resized.png';
import escuna from '../../assets/escuna.jpeg'
import iconDestione from '../../assets/destine.png';
import beach from '../../assets/beach_resized.jpeg';
import ocean from '../../assets/ocean.jpeg';

export default function Services() {

    return(
        <div className="services" id="">
            <img src={iconDestione} className='iconDestine'/>
    <h3 className="titulo "></h3>
    <h1 className="titleServices">Encontre o melhor para você!</h1>


  
    <div class="boxFront ">
      <div className="imgCard">   
        <svg className="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="12" fill="#DCE9E2"/>
          <path d="M17.091 8.18182L10.091 15.1818L6.90918 12" stroke="#00856F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <p className="card">Hospedagens</p>
        <p className="textCard">Aqui você encontra o melhor local para curtir seu passeio! Casas de temporada, pousadas e muito mais!</p>
    </div>

 

    <div class="boxFront boxFrontTwo ">
     <div className="imgCard">   
       <svg className="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="#DCE9E2"/>
        <path d="M17.091 8.18182L10.091 15.1818L6.90918 12" stroke="#00856F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
      <p className="card">Passeios  
      </p>
        <p className="textCard">Passeios de Lancha, Jeep , Escunas, passeios culturais e muito mais disponivel para você na cidade de Paraty.</p>
    </div>  


    <div class="boxFront boxFrontTree  ">     
     <div className="imgCard">   
        <svg className="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="12" fill="#DCE9E2"/>
          <path d="M17.091 8.18182L10.091 15.1818L6.90918 12" stroke="#00856F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <p className="card">Mergulhos</p>
        <p className="textCard">Mergulhos na bacia de Paraty, um dos lugares mais incriveis do Brasil para se conhecer a fauna e flora marinha! </p>
    </div>

    <div class="boxFront boxFrontFour  ">      <div className="imgCard">   
        <svg className="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="12" fill="#DCE9E2"/>
          <path d="M17.091 8.18182L10.091 15.1818L6.90918 12" stroke="#00856F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <p className="card">Transporte</p>
        <p className="textCard">Transfer, motoristas particulares, transporte até pontos turisticos e viagens de carro, van, ônibus ou barco. </p>
    </div>

    <div class="boxFront  boxFrontFive ">      <div className="imgCard">   
        <svg className="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="12" fill="#DCE9E2"/>
          <path d="M17.091 8.18182L10.091 15.1818L6.90918 12" stroke="#00856F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <h1 className="card">Ilhas</h1>
        <p className="textCard">São 65 ilhas paradisíacas na bacia da costa verde de Paraty, são opcões para todos os públicos </p>
    </div>

    <div class="boxFront boxFrontSix">      <div className="imgCard">   
        <svg className="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="12" fill="#DCE9E2"/>
          <path d="M17.091 8.18182L10.091 15.1818L6.90918 12" stroke="#00856F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <h1 className="card">Praias</h1>
        <p className="textCard">Com as mais de 300 praias na cidade de Paraty , será um local ideal para você se conectar com a natureza e aproveitar a vista.</p>
    </div>    
  </div>

    );
  };
