import React from 'react';

import Navigation from'../components/componentsMain/menu/Navigation';
import Footer from '../components/componentsMain/container/Footer';
import ButtonFloat from '../components/componentsMain/buttons/ButtonFloat';
import ContainerArticles from '../components/componentsArticles/ContainerArticles';

export default function Articles() {
  return(

      <body onScroll="onScroll()" className="" id="homePage">
            <Navigation/>
        <header>
        <div className="" id=""> 
         <ContainerArticles/>
        </div>
                <Footer/>
        </header>
        <ButtonFloat/>
        </body>
      );
};
