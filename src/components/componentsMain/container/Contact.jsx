import React from 'react';
import { Link } from 'react-router-dom';

import ButtonTop from '../buttons/ButtonTop';

import map from '../../../assets/png/map.png';
import contact from '../../../assets/png/contact.png'

export default function Contact() {
  return (

    <div className="contact">
      <h1 className="tituloContato">Entre em contato com a gente!</h1>
      <div class="certificates">
      </div>
      <div className='infoMaps'>
        <img src={map} className='contactsIcon' />
        <p className="info">Rua Bemtevi 132 - Arel Do Taquari, Paraty RJ CEP : 23.970-000</p>
      </div>
      <div className='infoMaps contactIcon'>
        <img src={contact} className='contactsIcon' />
        <p className="info">
          Informações: (24) 9 9922-3881<br />
          Reservas: (24) 9 9922-3881</p>
      </div>
      <ButtonTop />
    </div>
  );
}