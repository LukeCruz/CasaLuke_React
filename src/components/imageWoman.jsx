/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

import '../layout/App.css'; 
import imageWoman from '../assets/imageWoman.png';

export default class ImageWoman extends React.Component {
    render() {
        return(
            <div>
                <img src={imageWoman} alt="imagel" class="imageWoman" />
            </div>


            
        )
    }
}