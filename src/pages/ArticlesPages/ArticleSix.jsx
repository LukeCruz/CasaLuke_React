import React from 'react';

import Navigation from'../../components/componentsMain/menu/Navigation';
import Footer from '../../components/componentsMain/container/Footer';
import ButtonFloat from '../../components/componentsMain/buttons/ButtonFloat';
import SocialLinks from '../../components/componentsArticles/SocialLinks';

import barco from '../../assets/jpeg/barcomamangua.jpeg';

export default function ArticlesOne() {
  return(
    <body className="" id="homePage">
    <Navigation/>

    <div className='articleTitle'>
      <h1 className='title'>SACO DO MAMANGUÁ EM PARATY – O QUE FAZER E ONDE FICAR</h1>
      <img className='imageOne' src={imageOne}></img>
    </div>
    <SocialLinks/>
    <div className='containerOnly'>
      <p> 
Já ouviu falar no Saco do Mamanguá? Esse paraíso pouco explorado no litoral do Rio de Janeiro está localizado no município de Paraty e é um excelente destino para uma viagem de final de semana. Descubra onde é, como chegar, os melhores lugares para se hospedar e os passeios imperdíveis da região.

Dizem por aí que esse é o único fiorde brasileiro. Realmente o lugar é lindo demais! Chegando lá, nos deparamos com um braço de mar de coloração verde esmeralda margeado por íngremes montanhas da Mata Atlântica. Aqui e ali encontramos vilas de pescadores habitadas pela comunidade caiçara – povo nativo, formado por uma mistura de índios, brancos e negros. E quando chegamos no final, nos deparamos com um manguezal de beleza exuberante.
      </p>
      <h1>Entendendo o Saco do Mamanguá</h1>
      <p>
      Sabe aquele lugar perfeito para se desconectar do mundo e entrar em sintonia com a natureza a sua volta? Esse é o Saco do Mamanguá. Lá você vai esquecer seus problemas para trás e mergulhar em local onde não há sinal de telefonia, não há bancos ou quaisquer vestígios de cidade grande.

A rede elétrica chegou recentemente por lá. Os moradores são simpáticos, tranquilos e apaixonados pelo lugar. O ritmo é lento e todo mundo dorme cedo. É um lugar para recarregar as energias e sair renovado.

A estrutura é bem básica, portanto leve tudo o que você precisar, pois não há vendas ou locais para sacar dinheiro.
      </p>

    </div>
   <h1>Como Chegar ?</h1>
 <img src={barco} className='imageOne'></img>
<p>A maneira mais comum para chegar na região é através de barco (cerca de 20 min), mas para os mais aventureiros, existe um trekking de nível pesado que pode durar de 3 a 10 dias, dependendo do número de paradas. Se você ficou interessado nessa opção, confira mais informações no blog A Montanhista, no blog Expedição Andando Por Aí,  e no site Trilhas e Rumos.</p>
    <ButtonFloat/>
    </body>
  );
};