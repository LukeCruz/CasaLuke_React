import React from 'react';

import Navigation from '../components/componentsMain/menu/Navigation';
import MenuExplorer from '../components/componentsArticles/MenuExplorer.jsx';
import Canva from '../components/componentsMain/menu/OffCanvas';
import Toast from '../components/componentsMain/container/Toast';
import About from '../components/componentsMain/container/About';
import Contact from '../components/componentsMain/container/Contact';
import Footer from '../components/componentsMain/container/Footer';
import ButtonFloat from '../components/componentsMain/buttons/ButtonFloat';

export default function Main() {
  return (
    <body className="" id="homePage">
      <Navigation />
      <header>
      <div className="explorer">
        <h1 className="textRed">Explore</h1>
        <h1 className="textWhite"> Paraty</h1>
      </div>
        <MenuExplorer/>
        <h1 className=' titleAbout '>Reserve aqui também :</h1>
        <Toast />
        <div className=" servicesAbout dragscroll " id="">


        </div>

        <div className='containerAbout'>
          <About />
          <Contact />
        </div>
        <Footer />
      </header>
      <ButtonFloat />
    </body>
  );
};
