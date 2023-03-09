import React from 'react';

import Navigation from'../../components/componentsMain/menu/Navigation';
import Footer from '../../components/componentsMain/container/Footer';
import ButtonFloat from '../../components/componentsMain/buttons/ButtonFloat';
import SocialLinks from '../../components/componentsArticles/SocialLinks';

import imageOne from '../../assets/imagesArticles/beachParaty.jpeg';

export default function ArticlesOne() {
  return(
    <body onScroll="onScroll()" className="" id="homePage">
    <Navigation/>

    <div>
      <h1 className='title'>10 melhores praias de Paraty</h1>
      <img className='imageOne' src={imageOne}></img>
    </div>
    <SocialLinks/>
    <div className='containerOnly'>
      <p> 
      Embora a arquitetura colonial seja um destaque e tanto entre as 
      dezenas de atrações da cidade histórica mais famosa do Rio de Janeiro,
      é impossível organizar uma viagem e não querer aproveitar também as 
      praias de Paraty.
      O que é compreensível, afinal, o mar por estes lados rende passeios privilegiados.
      E se engana quem pensa que o destino tem poucos pedaços de areia à disposição. 
      Apesar de as praias mais atraentes ficarem afastadas do centro-histórico de Paraty, 
      é possível dedicar ao menos três dias inteiros somente para se encantar com a costa da cidade.
      No entanto, como sei que nem todos os viajantes têm tanto tempo disponível, neste post vou te 
      contar o que você pode esperar das melhores praias de Paraty. 
      Tenha em mente, porém, que algumas das praias que serão indicadas não são paradisíacas. Ainda assim, 
      entraram nesta lista por alguma particularidade especial.
      </p>
      <h1>Melhores praias de Paraty</h1>
      <p>
      A primeira coisa que você precisa saber sobre as praias de Paraty, é: em muitas delas só dá para 
      chegar por trilha ou barco. Portanto, na minha opinião, vale a pena reservar ao menos um dia do 
      roteiro para estas atividades.

Aliás, se possível e se fizer o seu estilo, reserva um dia para trilha e outro para passeio de barco.

Ainda assim, se você prefere a comodidade de chegar até perto da areia de carro, saiba que também há praias em Paraty para o seu itinerário. Inclusive, ter um veículo próprio é a melhor maneira para se deslocar entre as praias acessíveis pela estrada.

Em todo caso, se você for depender do transporte público, a empresa Colitur possui linhas de ônibus para muitas vizinhanças de Paraty. Os ônibus saem da rodoviária da cidade, a passagem custa em torno de R$ 5,00 e o ideal é consultar os horários antecipadamente pois as saídas costumam ser de hora em hora.

      Por fim, se você se interessou pela ideia de fazer um passeio de barco pelas praias de Paraty, no site 
      da Civitatis dá para reservar os dois tours mais tradicionais da cidade: escuna e lancha.
      </p>
        <ul className='list'>
          <li className='subList'>Praia do Pontal</li>
          <li className='subList'>Praia do Jabaquara</li>
          <li className='subList'>Praias de Trindade</li>
          <li className='subList'>Praia do Sono</li>
          <li className='subList'>Praias de Antigos e Antiguinhos</li>
          <li className='subList'>Praia da Lula</li>
          <li className='subList'>Praia de São Gonçalo</li>
          <li className='subList'>Praia de Paraty-Mirim</li>
          <li className='subList'>Praia grande</li>
          <li className='subList'>Praia do Cruzeiro</li>
        </ul>
    </div>

    <ButtonFloat/>
    </body>
  );
};