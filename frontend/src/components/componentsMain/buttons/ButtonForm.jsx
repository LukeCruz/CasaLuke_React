import React from 'react';
import { Link } from 'react-router-dom';

export default function ButtonForm() {

    return(
        <Link to="/form">

        <button className= "buttonForm"> 
            clique aqui
         </button>

        </Link>  

      );
   };