import React from "react";
import { Link } from "react-router-dom";

import ButtonReturn from "../componentsMain/buttons/buttonReturn";


export default function MenuExplorer(){
  return (
    <div className="menuExplorer">
      <ButtonReturn/>
                    <div className="floatMenu">
                        <Link to='/Hotels'>
                          <div className="explorerFloatMenu"><h3>Hospedagens</h3></div>
                        </Link>
                        <Link to='/travels'>
                        <div className="explorerFloatMenu"><h3>Passeios</h3></div>
                        </Link>
                        <Link to='/articles'>
                        <div className="explorerFloatMenu"><h3>O que fazer</h3></div>
                        </Link>
                        <Link to='/restaurants'>
                        <div className="explorerFloatMenu"><h3>Restaurantes</h3></div>
                        </Link>
                    </div>
    </div>
  )
}