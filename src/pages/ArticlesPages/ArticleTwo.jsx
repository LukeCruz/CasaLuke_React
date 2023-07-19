import React from 'react';
import Table from 'react-bootstrap/Table';

import Navigation from'../../components/componentsMain/menu/Navigation';
import Footer from '../../components/componentsMain/container/Footer';
import ButtonFloat from '../../components/componentsMain/buttons/ButtonFloat';
import SocialLinks from '../../components/componentsArticles/SocialLinks';
import MenuExplorer from '../../components/componentsArticles/MenuExplorer';

import guia from '../../assets/alambique.webp';
import caminhada from '../../assets/caminhada.jpeg';
import escuna from '../../assets/escunna.jpeg';
import cachaca from '../../assets/cachaca.jpeg';
import sono from '../../assets/praia-do-sono.jpeg';
import centro from '../../assets/centro.jpeg';

import imageOne from '../../assets/jpeg/beachParaty.jpeg';

export default function ArticlesOne() {
  return(
    <body className="" id="homePage">
    <Navigation/>

    <div className='articleTitle'>
      <h1 className='title'>Guia Turistico de Paraty</h1>
      <img className='imageOne' src={guia}></img>
    </div>
    <SocialLinks/>
    <MenuExplorer/>
    <div className='containerOnly'>
      <p className='paragraphPt'> 
      Patrimônio cultural, Paraty é um dos locais mais conhecidos e procurados internacionalmente
       pelas suas belezas naturais, pelo rico acervo histórico
Paraty, no estado do Rio de Janeiro, esta entre a serra e o mar e que teve seu apogeu no Ciclo do Ouro, 
 patrimônio cultural da humanidade. Casarões do período colonial dão charme às ruelas da cidade que é 
 conhecida internacionalmente pelas suas belezas naturais, rico acervo histórico-cultural e pela variedade
  de passeios que oferece aos turistas. O Bairro Histórico, tombado como Patrimônio Histórico e Artístico 
  Nacional, localizado na parte central da cidade, destaca-se por construções dos séculos XVIII e XIX e pelo 
  calçamento pé-de-moleque de grandes pedras irregulares, nas quais o tráfego motorizado é proibido. Composto de 
  belos sobrados, num quadrilátero de 35 quarteirões é considerado pela Unesco o conjunto arquitetônico mais harmonioso
   do séc. XVIII. A Casa da Cultura é um dos mais importantes casarões no renomado Centro Histórico de Parati.
    O forte da comida paratyense são os pratos à base de frutos do mar, com suas deliciosas caldeiradas, moquecas e pirões.
     Surpreende também os restaurantes "alternativos", especializados em cozinha tailandesa, persa e até em pratos exóticos
      à base de carne de javali e jacaré. Praias, cachoeiras, trilhas, fazendas históricas e muita cultura é o que oferece
       esta cidade que está localizada a 241 km ao sul da cidade do Rio de Janeiro, ao pé da Serra do Mar. Os passeios de 
       barcos e escuna podem ser uma das melhores maneiras de conhecer algumas das muitas praias e ilhas de Parati.
        Partem todos os dias do cais. Já na vila de Trindade, a 19 quilômetros, lindas praias selvagens e acessíveis por trilhas,
         como a do Sono e do Cachadaço, atraem a turma jovem e aventureira. A pesca é abundante e rica em variedade de espécies.
          Existem também vários pontos de mergulho. Os mais procurados são Ilha Comprida, Ilha dos Ratos, do Catimbau,
           dos Ganchos e dos Meros. Seu clima quente e úmido, de serra e mar, são muito agradáveis.
            A temperatura média anual é de 27 ºC. O relevo irregular e aos rios que percorrem a região faz com que ela 
            seja repleta de cachoeiras e cascatas, como a Cachoeira do Tobogã, uma enorme pedra lisa, onde se pode escorregar
             e cair numa piscina natural. Cachoeiras Pedra Branca e Tobogã formam piscinas perfeitas para relaxar. O cenário
              utilizado nas festas religiosas, como a do Divino, é o mesmo onde a turma brinca o Carnaval, os fãs da branquinha
               degustam a bebida no Festival da Cachaça e os intelectuais badalam durante a concorrida Festa Literária 
               Internacional, a Flip.
      </p>
      <h1 className='titlePt'>Dicas do que fazer em Paraty</h1>
      <p className='paragraphPt'>
      A primeira coisa que você deve saber para organizar o seu roteiro, é: dificilmente dará para visitar todos os pontos turísticos de Paraty em uma única viagem.

O cenário perfeito, na minha opinião, seria ter uma semana inteira para visitar Paraty. Porém, como sei que essa é uma realidade para poucos viajantes, saiba que com três dias inteiros já dá para planejar um belo itinerário.

E, se a sua intenção é passar apenas um final de semana, a solução é investir em um roteiro mais básico: centro histórico e passeio de barco.

Para se locomover na cidade há várias possibilidades. Ter um veículo próprio ajuda, mas não é primordial. Inclusive, nunca fui de carro a Paraty e sempre consegui me virar.

Perambular pelo burburinho central de Paraty vai exigir apenas disposição. Isso porque, tudo é muito perto e nas principais ruas do centro histórico não é permitido a circulação de carros.

Para completar o roteiro em Paraty com atrações que estão mais afastadas do centro, você pode utilizar o transporte público e os passeios em grupo oferecidos pelas agências de turismo. 

No caso de utilizar os ônibus, sempre consulte o horário antecipadamente, pois a maior parte das linhas têm frequência espaçada, sendo muitas vezes de hora em hora.

Por fim, para fazer os passeios de barco, jipe ou city tours, há muitas empresas espalhadas pelo centro histórico de Paraty. Em períodos de baixa temporada você consegue reservar os seus passeios de um dia para o outro.
      </p>

    </div>

  <div className='containerOnly'>

<h1 className='titlePt'>Faa um Walking tour sobre a história da cidade</h1>
<img className='imageOne' src={caminhada}></img>
<p className='paragraphPt'>
Uma das grandes surpresas que tive quando estava planejando minha viagem para Paraty é que a cidade possui um Free Walking Tour. Como sou fã dessas caminhadas, logo reservei uma manhã para fazê-lo.

Esse foi meu primeiro passeio em Paraty e recomendo que você faça o mesmo.

O motivo? Depois de conhecer um pouco da história e curiosidades deste destino, sua estada será completamente diferente. Afinal, será impossível caminhar por uma quadra sem se lembrar de algum fato importante sobre a cidade.

Além disso, fazer esse passeio no começo da trip te dá a possibilidade de conseguir dicas de lugares que você nem sequer tinha ouvido falar, seja com o guia ou com os outros participantes.
    </p>

<h1 className='titlePt'>Conheça o Centro Histórico de Paraty</h1>
<img className='imageOne' src={centro}></img>
<p className='paragraphPt'>O tour que recomendei como primeiro passeio já é pelo centro histórico. Ainda assim, sugiro que você reserve mais algum tempo para percorrer com calma as suas charmosas ruas.

Observe atentamente os detalhes das construções antigas, tire algumas fotos, pare em algum bar ou café – tudo sem pressa.  Aliás, caminhar apressadamente pelo centro histórico de Paraty é uma coisa que eu não te recomendo.  Isso porque, as chances de você tropeçar e machucar o pé são enormes. 

Alguns dos pontos turísticos do centro histórico de Paraty para incluir na sua programação, são: igrejas de Nossa Senhora dos Remédios, Nossa Senhora das Dores, Santa Rita e Nossa Senhora do Rosário e de São Benedito, além do Museu de Arte Sacra, Casa da Cultura, Teatro Espaço e Sesc Paraty.

Além disso, tenha em mente que você também encontrará diversas lojas de artesanato, pequena galerias de arte, cafeterias e empórios.</p>

<h1 className='titlePt'>Conheça a vila de Trindade e a Praia do Sono</h1>
<img className='imageOne' src={sono}></img>
<p className='paragraphPt'>Rodeada pela vegetação da Mata Atlântica, a Praia do Sono é uma das mais lindas praias de Paraty. A simplicidade dos seus poucos restaurantes, campings e quartos para se hospedar, é o principal motivo que leva os viajantes a terem o mar como quintal de casa por alguns dias.

Para chegar até lá, primeiro você precisa ir até a Vila do Oratório, situada a 27 quilômetros do centro de Paraty. Os ônibus da Colitur saem da rodoviária de Paraty com esse destino de hora em hora, a passagem custa R$ 5,00 e o deslocamento leva aproximadamente 45 minutos.

Depois disso há duas opções para chegar à Praia do Sono: trilha ou barco.

Para fazer a trilha desça no ponto final e basta seguir pelo caminho onde há uma placa com indicação do início da trilha. Por outro lado, se acaso preferir ir de barco, pergunte ao motorista em qual ponto descer pois não é o mesmo.

Achei a trilha tranquila. No caso, levei 50 minutos para percorrer os três quilômetros. O trecho é bem demarcado e em muitos pontos há até corrimão e degraus bem feitos.

Por outro lado, para ir à Praia do Sono de barco não se gasta nem 15 minutos nesta etapa do percurso, e o preço gira em torno de R$ 40,00 por pessoa (cada trecho).

Além de curtir a Praia do Sono, neste dia você pode esticar o seu passeio em Paraty até as praias de Antigo e Antiguinhos. Afinal, o acesso à estes pedaços de areia é por uma trilha íngreme de 700 metros que começa no canto esquerdo da Praia do Sono.

Por fim, se você for à Praia do Sono durante a semana na baixa temporada, é bom levar água e lanchinhos suficientes para passar o dia. Embora eventualmente possa ter algum quiosque aberto, nos períodos de marasmo a maioria fica fechado.</p>

<h1 className='titlePt'>Faça um passeio de Barco</h1>
<img className='imageOne' src={escuna}></img>
<p className='paragraphPt'>Para conhecer algumas das mais belas ilhas e praias da região será necessário fazer um passeio de barco em Paraty. Afinal, muitos lugares só são acessados pelo mar.

Portanto, seja em uma escuna ou em uma lancha privada, reserve pelo menos um dia para fazer um passeio desse tipo.

A navegação mais tradicional da cidade é o passeio de escuna – uma embarcação de grande porte. Embora possa ter pequenas mudanças de itinerário, o mais comum é que os tours passem pela Praia da Lula, Praia Vermelha, Ilha Comprida e Aquário Natural.

Estes passeios saem do Caís Principal de Paraty, que fica no centro histórico, e duram em torno de cinco horas (normalmente, das 11hs às 16hs).

O passeio mais básico não inclui nenhum tipo de refeição. No entanto, à bordo da escuna há um bar onde você poderá comprar bebidas geladas, porções de petiscos e até mesmo refeições mais completas. </p>
<button className="buttonTravel" >Reserve um Passeio</button>

<h1 className='titlePt'>Conheça os Alambiques da cidade e Tome uam cachaça Gabriela</h1>
<img className='imageOne' src={cachaca}></img>
<p className='paragraphPt'>Além das belas praias e do agradável centro histórico, Paraty também é uma cidade muito famosa pelas cachaças que produz. E, dentre elas, uma se tornou bastante popular entre os turistas: Gabriela.

A cachaça Gabriela é bastante adocicada e pode ser encontrada em praticamente todos os bares e restaurantes de Paraty. A bebida, que mais parece um licor, possui cravo, canela e muitas vezes gengibre na sua composição.

Além disso, também temos o Jorge Amado, que é um drink preparado com a cachaça Gabriela, limão e maracujá. A mistura da bebida doce com a acidez dessas frutas forma uma combinação muito boa. Mais uma vez, praticamente todos os bares e restaurantes da cidade servem esse drink.</p>
 </div>
 <MenuExplorer/>
 <Footer/>
 <ButtonFloat/>
</body>
  );
};