import React from 'react';

import '../../layout/App.css'; 
import imageWoman from '../../assets/imageWoman.png';

const Image = React.Component;

export default class ImageWoman extends Image {
    render() {
        return(   
           
           <div>
              <img 
                src={imageWoman} 
                alt="imagel" 
                className="imageWoman"/>   
            </div>      
        );
    }
};