import React from 'react';

import '../../layout/App.css'; 
import imageWoman from '../../assets/imageWoman.png';
import imageReview from '../../assets/review.png'
import imageHost from'../../assets/sustainable.png'


export default function ImageWoman() {
        return(     
           <div className="imagesTop">
                          <img  className="titleReview" src={imageHost} className="imageReview"></img>

              <img 
                src={imageWoman} 
                alt="imagel" 
                className="imageWoman"/>  
              <img  className="titleReview" src={imageReview} className="imageReview"></img>
 
            </div>      
        );
    };