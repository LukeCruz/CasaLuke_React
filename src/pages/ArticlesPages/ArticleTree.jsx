import React from 'react';
import Table from 'react-bootstrap/Table';

import Navigation from '../../components/componentsMain/menu/Navigation';
import Footer from '../../components/componentsMain/container/Footer';
import ButtonFloat from '../../components/componentsMain/buttons/ButtonFloat';
import SocialLinks from '../../components/componentsArticles/SocialLinks';

import imageOne from '../../assets/jpeg/beachParaty.jpeg';
import mamangua1 from '../../assets/mamangua-1.jpeg';
import mamangua2 from '../../assets/mamangua-2.jpeg';
import mamangua3 from '../../assets/mamangua-3.jpeg';

export default function ArticlesOne() {
  return (
    <body className="" id="homePage">
      <Navigation />

      <div className='articleTitle'>
        <h1 className='title'>Conheça o Saco do Mamanguá: <br />Um paraíso pouco explorado em Paraty</h1>
        <img className='imageOne' src={mamangua1}></img>
      </div>
      <SocialLinks />
      <div className='containerOnly'>
        <p className='paragraphPt'>
          Já ouviu falar no Saco do Mamanguá? Esse paraíso pouco explorado no litoral do Rio de Janeiro está localizado no
          município de Paraty e é um excelente destino para uma viagem de final de semana. Descubra onde é, como chegar, os
          melhores lugares para se hospedar e os passeios imperdíveis da região.

          Dizem por aí que esse é o único fiorde brasileiro. Realmente o lugar é lindo demais! Chegando lá, nos deparamos
          com um braço de mar de coloração verde esmeralda margeado por íngremes montanhas da Mata Atlântica. Aqui e ali
          encontramos vilas de pescadores habitadas pela comunidade caiçara – povo nativo, formado por uma mistura de índios,
          brancos e negros. E quando chegamos no final, nos deparamos com um manguezal de beleza exuberante.
        </p>
        <h1 className='titlePt'>Entendendo o Saco do Mamanguá</h1>
        <p className='paragraphPt'>
          Sabe aquele lugar perfeito para se desconectar do mundo e entrar em sintonia com a natureza a sua volta?
          Esse é o Saco do Mamanguá. Lá você vai esquecer seus problemas para trás e mergulhar em local onde não há
          sinal de telefonia, não há bancos ou quaisquer vestígios de cidade grande.

          A rede elétrica chegou recentemente por lá. Os moradores são simpáticos, tranquilos e apaixonados pelo lugar.
          O ritmo é lento e todo mundo dorme cedo. É um lugar para recarregar as energias e sair renovado.

          A estrutura é bem básica, portanto leve tudo o que você precisar, pois não há vendas ou locais para sacar dinheiro.
        </p>

      </div>
      <h1 className='titleLocal'>Como chegar ?</h1>
      <p className='paragraphPt paragraphtree'>
        A maneira mais comum para chegar na região é através de barco (cerca de 20 min), mas para os mais aventureiros,
        existe um trekking de nível pesado que pode durar de 3 a 10 dias, dependendo do número de paradas. Se você ficou
        interessado nessa opção, confira mais informações no blog A Montanhista, no blog Expedição Andando Por Aí,  e no
        site Trilhas e Rumos.
        <br />
        <br />
        <br />
      </p>

      <div className='containerOnly'>
        <img className='imageOne' src={mamangua2}></img>

        <h1 className='titlePt'>Passeios imperdíveis</h1>
        <p className='paragraphPt'>
          O Saco do Mamanguá  é um prato cheio para quem gosta de contato com a natureza e de atividades outdoor. Lá você
          encontra a possibilidade de fazer trilhas de diversos níveis, kayak, remo, snorkeling, SUP….

          O meio de transporte utilizado por lá são as canoas. E só de remar um pouquinho você vai descobrir praias quase
          particulares, pequenas vilas de pescadores e o incrível manguezal da região. Ouvimos dizer que há canoas disponíveis
          na comunidadade como meio de transporte público. Portanto se você chegar lá e encontrar alguma delas, pode dar uma
          volta para conhecer a região (de graça!).
          <br />
          <br />
          <br />
        </p>
        <img className='imageOne' src={mamangua3}></img>
        <h1 className='titlePt'>Velejar pelo Saco do Mamanguá</h1>
        <p className='paragraphPt'>
          Quem veleja pela primeira vez nunca esquece! Não estava nos nossos planos velejar por lá, até porque não sabíamos
          que existia essa possibilidade. Eu, amante dos mares e das velas, sempre tive curiosidade em saber qual é a sensação
          de comandar um barco, suas velas e a direção do vento.

          Lá conhecemos o Lincoln, um niteroiense que resolveu se aposentar nas águas calmas do Mamanguá. Descobrimos que
          ele dava aulas para pequenos grupos a bordo de um veleiro. Resultado? Uma experiência incrível e inesquecível.
          Velejamos até o por do sol, sofremos com a falta de vento em certos momentos e aprendemos muito a respeito da vida
          no mar e dos tipos de embarcações.

          Tempo total do passeio: 4h a 6h
          Valor: R$50 por pessoa
          <br />
          <br />
          <br />
        </p>

      </div>
      <Footer />
    </body>
  );
};