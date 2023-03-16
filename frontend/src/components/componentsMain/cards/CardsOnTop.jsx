import React from 'react';

import ButtonTop from '../buttons/ButtonTop';

import check from '../../../assets/png/check.png';
import reputation from '../../../assets/png/award.png';
import logo from '../../../assets/png/logo2.png';
import coconut from '../../../assets/png/coconut-tree.png';
import flip from '../../../assets/png/flip-flops.png'

export default function CardsOnTop() {
  return (
          <div className='containerLogotipo'>
            <div className='logoContainerImage'>
              <img className='logoContainerLogotipo' src={logo} />
              <div className='start' >
                <div className='containerStart'>
                  <div className='iconStart'>
                    <h2 className=' percentContainerStart '>100%
                    </h2>
                    <img className='stars' src={check} />
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
              <ButtonTop />
            </div>
          </div>
  );
}