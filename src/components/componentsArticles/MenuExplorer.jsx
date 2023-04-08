import React from "react";
import { Link } from "react-router-dom";

export default function MenuExplorer(){
  return (
    <div>
      <div className="explorer">
        <h1 className="textRed">Explore</h1>
        <h1 className="textWhite"> Paraty</h1>
      </div>
      <div className="floatMenu">
        <Link to='/Hotels'>
          <div className="explorerFloatMenu"><h3>Hospedagens</h3></div>
        </Link>
        <Link to=''>
          <div className="explorerFloatMenu"><h3>Passeios</h3></div>
        </Link>
        <Link to=''>
          <div className="explorerFloatMenu"><h3>O que fazer</h3></div>
        </Link>
        <Link to=''>
          <div className="explorerFloatMenu"><h3>Restaurantes</h3></div>
        </Link>
      </div>
    </div>
  )
}