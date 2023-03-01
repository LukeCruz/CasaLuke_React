import React from 'react';

import '../../layout/App.css'; 
import imageWoman from '../../assets/imageWoman.png';
//import imageHost from'../../assets/sustainable.png'


export default function ImageWoman() {
        return(  
          
          <div className='containerImages'>
            
         <img
                src={imageWoman} 
                alt="imagel" 
                className="imageWoman"/>  
        </div>
        );
    };