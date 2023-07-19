import React from 'react';

import Navigation from '../components/componentsMain/menu/Navigation';
import CardsOnTop from '../components/componentsMain/cards/CardsOnTop';
import ImageWoman from '../components/componentsMain/cards/ImageWoman';
import ContainerInfo from '../components/componentsMain/container/ContainerInfo';
import ContainerInfoLeft from '../components/componentsMain/container/ContainerInfoLeft';
import ContainerInfoRight from '../components/componentsMain/container/ContainerInfoRight';
import ControlledCarousel from '../components/componentsMain/container/carrousel';
import About from '../components/componentsMain/container/About';
import Contact from '../components/componentsMain/container/Contact';
import Footer from '../components/componentsMain/container/Footer';
import ButtonFloat from '../components/componentsMain/buttons/ButtonFloat';

import crab from '../assets/png/crab.png';


export default function Main() {
  return (

    <body onScroll="onScroll()" className="" id="homePage" data-testid='home-test'>
      <Navigation />
      <header>
        <div className="" id="" data-testid='card-test'>
          <CardsOnTop />
          <ImageWoman />

          <div className="containers" data-testid='containers-test'>
            <ContainerInfoLeft />
            <ContainerInfo />
            <ContainerInfoRight />
          </div>

        </div>
        <ControlledCarousel />
        <div className='containerAbout' data-testid='about-test'>
          <About />
          <Contact />
          <img src={crab} className='crab'/>
          </div>
          
        <Footer />
      </header>

      <ButtonFloat />

    </body>
  );
};
