import React from "react";

import Blog from "./Blog";
import MenuExplorer from "./MenuExplorer";

import beachParaty from '../../assets/banner-grid.jpeg';
import beachParaty2 from '../../assets/banner-grid-2.jpeg';
import beachParaty3 from '../../assets/jpeg/beachParaty.jpeg';

export default function ContainerArticles() {
    return (
        <div className="servicesHome">
            <body id="homePage">
                <MenuExplorer />
                <div className="photos">
                    <img className='gridPhotosRefer' src={beachParaty} />
                    <button>Ver todas as fotos</button>
                    <div className="drawPhotos">
                        <img className='gridPhotos' src={beachParaty2} />
                        <img className='gridPhotos' src={beachParaty3} />
                    </div>
                </div>
                <Blog />
            </body>
        </div>
    )
}
