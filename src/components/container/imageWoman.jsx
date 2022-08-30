import React from 'react';

import '../../layout/App.css'; 
import imageWoman from '../../assets/imageWoman.png';


export default function ImageWoman() {
        return(     
           <div>
              <img 
                src={imageWoman} 
                alt="imagel" 
                className="imageWoman"/>   
            </div>      
        );
    };