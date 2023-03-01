import React from 'react';
import imageUser from '../../assets/user.png'
import imageReview from '../../assets/review.png'
import fifthRating from '../../assets/fifthRating.png';
import fourthRating from '../../assets/fourthRating.png';

// import * as Scroll from 'react-scroll';
// let scroll = Scroll.animateScroll;

export default function ContainerInfoRight() {
      return(
    <div  
        className="containerInfo containerInfoRight" 
        id="containerInfo">
          <div className='containerInfoImage'>
            <img
                src={imageReview} 
                alt="imagel" 
                className="imageReview"/> 
          </div>
    <div className="containerGuestReview">
      <img src={imageUser} className="imageUser"></img>
      <h3 className="h3-right">Júlia Marques Alves</h3>
      <img src={fifthRating} className="userRating"></img>

    </div>
        <p  
        className="p1-right">
            Maravilhoso, sem palavras para descrever o quanto tornaram nossa estadia inesquecível</p>
    <div className="containerGuestReview">
      <img src={imageUser} className="imageUser"></img>
      <h3 className="h3-right">Vitoria Milena</h3>
      <img src={fifthRating} className="userRating"></img>

    </div>  
        <p 
        className="p1-right">
            Gostamos bastante das acomodações, anfitrião solicito a todo momento ajudou muito com as dicas</p>
    <div className="containerGuestReview">
      <img src={imageUser} className="imageUser"></img>        
      <h3 className="h3-right">Fábio Silva Cunha</h3>
      <img src={fourthRating} className="userRating"></img>

    </div>
        <p 
        className="p1-right">
            Incrível como existe um local lindo e confortável nesse preço, sem dúvidas o melhor da cidade!</p>
    </div>

    );
  };