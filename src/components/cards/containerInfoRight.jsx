import React from 'react';
import Fade from 'react-reveal/Fade';
import imageUser from '../../assets/user.png'
// import * as Scroll from 'react-scroll';
// let scroll = Scroll.animateScroll;

export default function ContainerInfoRight() {
      return(
    <div  
        className="containerInfo containerInfoRight" 
        id="containerInfo">
    <Fade top>
    <div className="containerGuestReview">
      <img src={imageUser} className="imageUser"></img>
      <h3 className="h3-right">Júlia Marques Alves</h3>
    </div>
        <p  
        className="p1-right">
            Maravilhoso, sem palavras para descrever o quanto tornaram nossa estadia inesquecível</p>
    <div className="containerGuestReview">
      <img src={imageUser} className="imageUser"></img>
      <h3 className="h3-right">Vitoria Milena</h3>
    </div>  
        <p 
        className="p1-right">
            Gostamos bastante das acomodações, anfitrião solicito a todo momento ajudou muito com as dicas</p>
    <div className="containerGuestReview">
      <img src={imageUser} className="imageUser"></img>        
      <h3 className="h3-right">Fábio Silva Cunha</h3>
    </div>
        <p 
        className="p1-right">
            Incrível como existe um local lindo e confortável nesse preço, sem dúvidas o melhor da cidade!</p>
    </Fade>
    </div>

    );
  };