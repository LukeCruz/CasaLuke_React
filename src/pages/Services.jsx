import React from "react";
import { Link } from "react-router-dom";

import Navigation from "../components/componentsMain/menu/Navigation";
import Footer from "../components/componentsMain/container/Footer";
import CardHotel from "../components/componentsMain/cards/CardHotels";

export default function service() {
    return (
        <div className="servicesHome">
            <Navigation />
            <body id="homePage">
                <div>
                    <div className="explorer">
                        <h1 className="textRed">EXPERIÊNCIAS</h1>
                        <h1 className="textWhite"> Paraty</h1>
                    </div>
                    <div className="floatMenu">
                        <div className="explorerFloatMenu"><h3>Hospedagens</h3></div>
                        <div className="explorerFloatMenu"><h3>Passeios</h3></div>
                        <div className="explorerFloatMenu"><h3>O que fazer</h3></div>
                        <div className="explorerFloatMenu"><h3>Restaurantes</h3></div>
                    </div>
                    <CardHotel/>

                </div>
            </body>
<Footer/>
        </div>
    )
}
