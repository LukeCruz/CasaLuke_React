import React from "react";
import { Link } from "react-router-dom";

import beachParaty from '../../assets/imagesArticles/beachParaty.jpeg';

export default function ContainerArticles() {
    return (
      <div className="articles">
       
       <Link to='/1'>
       <div className="containerArticles">
        <h1 className="hiddenPhrase">Ler mais...</h1>
       <h1 className="articleTitle">
            Quais as 10 melhores praias de Paraty
        </h1>
        <div className="containerRow">
        <p className="articleParagraph">
        Embora a arquitetura colonial seja um destaque e tanto entre as dezenas de atrações
         da cidade histórica mais famosa do Rio de Janeiro, 
        é impossível organizar uma viagem e não querer aproveitar também as praias de Paraty.
        </p>
        <img className='imagesArticles' src={beachParaty}/>
        </div>
       </div>
       </Link>
       <div className="containerArticles">
       <h1 className="hiddenPhrase">Ler mais...</h1>

        <h1 className="articleTitle">
            Titulo
        </h1>
        <p className="articleParagraph">
            paragrafo
        </p>
       </div>

       <div className="containerArticles">
       <h1 className="hiddenPhrase">Ler mais...</h1>

        <h1 className="articleTitle">
            Titulo
        </h1>
        <p className="articleParagraph">
            paragrafo
        </p>
       </div>
       <div className="containerArticles">
       <h1 className="hiddenPhrase">Ler mais...</h1>

        <h1 className="articleTitle">
            Titulo
        </h1>
        <p className="articleParagraph">
            paragrafo
        </p>
       </div>


       <div className="containerArticles">
       <h1 className="hiddenPhrase">Ler mais...</h1>

        <h1 className="articleTitle">
            Titulo
        </h1>
        <p className="articleParagraph">
            paragrafo
        </p>
       </div>

       <div className="containerArticles">
       <h1 className="hiddenPhrase">Ler mais...</h1>

        <h1 className="articleTitle">
            Titulo
        </h1>
        <p className="articleParagraph">
            paragrafo
        </p>
       </div>

     </div>
    )
}