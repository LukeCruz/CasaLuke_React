import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import hotel from '../../../assets/jpeg/Praia.jpeg';

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className='carousel'>
      <Carousel.Item>
        <img
          className="imageCarousel"
          src={hotel}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 className='displayTitle'>Hospedagem</h1>
          <p className='displayParagraph'>Aqui você encontra o melhor local para curtir seu passeio! Casas de temporada, pousadas e muito mais! </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="imageCarousel"
          src={hotel}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1 className='displayTitle'>Passeios</h1>
          <p className='displayParagraph'>Passeios de Lancha, Jeep , Escunas, passeios culturais e muito mais disponivel para você na cidade de Paraty.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="imageCarousel"
          src={hotel}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1 className='displayTitle'>Mergulho</h1>
          <p className='displayParagraph'>
            Mergulhos na bacia de Paraty, um dos lugares mais incriveis do Brasil para se conhecer a fauna e flora marinha! 
          </p>
        </Carousel.Caption>
      </Carousel.Item>

<Carousel.Item>
        <img
          className="imageCarousel"
          src={hotel}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1 className='displayTitle'>Transporte</h1>
          <p className='displayParagraph'>
            Transfer, motoristas particulares, transporte até pontos turisticos e viagens de carro, van, ônibus ou barco. 
</p>
        </Carousel.Caption>
      </Carousel.Item>

<Carousel.Item>
        <img
          className="imageCarousel"
          src={hotel}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1 className='displayTitle'>Ilhas</h1>
          <p className='displayParagraph'>
            São 65 ilhas paradisíacas na bacia da costa verde de Paraty, são opcões para todos os públicos. 
          </p>
        </Carousel.Caption>
      </Carousel.Item>
<Carousel.Item>
        <img
          className="imageCarousel"
          src={hotel}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1 className='displayTitle'>Praias</h1>
          <p className='displayParagraph'>
            São 65 ilhas paradisíacas na bacia da costa verde de Paraty, são opcões para todos os públicos. 
          </p>
        </Carousel.Caption>
      </Carousel.Item>



    </Carousel>
  );
}