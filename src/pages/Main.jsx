import React from 'react';

import Navigation from'../components/menu/Navigation';
import ButtonTop from '../components/buttons/ButtonTop';
import ImageWoman from '../components/container/imageWoman';
import ContainerInfo from '../components/cards/ContainerInfo';
import ContainerInfoLeft from '../components/cards/containerInfoLeft';
import ContainerInfoRight from '../components/cards/containerInfoRight';
import Services from '../components/cards/Services';
import About from '../components/cards/About';
import Contact from '../components/cards/Contact';
import Footer from '../components/container/Footer';
import ButtonFloat from '../components//buttons/ButtonFloat';

import check from '../assets/check.png';
import reputation from '../assets/award.png';
import logo from '../assets/logo1.png';
import coconut from '../assets/coconut-tree.png';
import flip from '../assets/flip-flops.png'

export default function Main() {
  return(

      <body onScroll="onScroll()" className="" id="homePage">
            <Navigation/>
        <header>
        <div className="" id=""> 
        <div className='containerLogotipo'>
          <div className='logoContainerImage'>
            <img className='logoContainerLogotipo' src={logo}/>
         <div className='start' >
            <div className='containerStart'>
              <div className='iconStart'>
              <h2 className=' percentContainerStart'>100% 
              </h2>
              <img className='stars' src={check}/>
              </div>
              <p className='subtittleStart'>Feedbacks</p>
            </div>
            

            <div className='containerStart'>
            <div className='iconStart'>
              <h2 className=' percentContainerStart'>#1
              </h2>
              <img className='stars' src={reputation}/>
              </div>
              <p className='subtittleStart'>Excelência</p>
            </div>
            
           </div>
          </div>

          <img src={coconut} className='coconut'/>
          <div className='conteinerLogotipoText'>
              <h4 className="intro showtext">BOAS-VINDAS A CASA LUKE 👋</h4>
              <div className='containerCoconut'>
              <h1 className='tourismText'>Turismo de qualidade</h1>
              <img src={flip} className='flip'/>
              </div>
              <p className="intro">
                   Paraty na palma da sua mão
              </p>
              <ButtonTop/>
          </div>
        </div>
              <ImageWoman/>
              <div className="containersInfo">
              <ContainerInfoLeft/>
                <ContainerInfo/>
                <ContainerInfoRight/>
              </div>
                
              </div>
                <Services/>
                <About/>
              <Contact/>
                <Footer/>
        </header>
                <ButtonFloat/>
        </body>
      );
};
