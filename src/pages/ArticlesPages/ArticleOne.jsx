import React from 'react';
import Table from 'react-bootstrap/Table';

import Navigation from '../../components/componentsMain/menu/Navigation';
import Footer from '../../components/componentsMain/container/Footer';
import ButtonFloat from '../../components/componentsMain/buttons/ButtonFloat';
import SocialLinks from '../../components/componentsArticles/SocialLinks';
import ExplorerMenu from '../../components/componentsArticles/MenuExplorer';

import imageOne from '../../assets/jpeg/beachParaty.jpeg';
import praia2 from '../../assets/pontal.jpeg';
import praia3 from '../../assets/jabaquara.jpeg';
import praia4 from '../../assets/trindade.jpeg';
import praia5 from '../../assets/praia-do-sono.jpeg';
import praia6 from '../../assets/praia-da-lula.jpeg';
import praia7 from '../../assets/antigos.jpeg';
import praia8 from '../../assets/sao-goncalo.jpeg';
import praia9 from '../../assets/paraty-mirim.jpeg';
import praia10 from '../../assets/mamangua.jpeg';
import praia11 from '../../assets/cruzeiro.jpeg'; //cruzeiro


export default function ArticlesOne() {
const pontal = 'https://www.google.com/maps/place/Praia+do+Pontal/@-23.2147404,-44.7116967,15z/data=!3m1!4b1!4m6!3m5!1s0x9d6d3afb60987b:0x7767723b1e5eea23!8m2!3d-23.2147408!4d-44.7116967!16s%2Fg%2F1ptz6jdbs?hl=pt-BR';
const jabaquara = 'https://www.google.com/maps/place/Praia+do+Jabaquara/@-23.736406,-45.2922681,18z/data=!3m1!4b1!4m6!3m5!1s0x94d2a2724e5a22df:0x3eaee2319a74c11d!8m2!3d-23.7365784!4d-45.292503!16s%2Fg%2F121sdfpmm';
const trindade = 'https://www.google.com/maps/place/Trindade,+Paraty+-+RJ/@-23.3497856,-44.7301512,15z/data=!3m1!4b1!4m6!3m5!1s0x9d403f34e4eb93:0xdee9f117d1364b8e!8m2!3d-23.3507675!4d-44.7240118!16s%2Fg%2F122g3mmg';
const sono = 'https://www.google.com/maps/place/Praia+do+Sono+•+PARATY/@-23.3315644,-44.6418624,17z/data=!3m1!4b1!4m6!3m5!1s0x9d15157a1c97bf:0x45abd81a95cd3b77!8m2!3d-23.3315645!4d-44.6376406!16s%2Fg%2F11j0ht02b2';
const antigos = 'https://www.google.com/maps/search/praia+de+antigos+paraty/@-23.3315635,-44.6572316,14z';
const lula = 'https://www.google.com/maps/place/Praia+da+Lula/@-23.196627,-44.6968018,13z/data=!3m1!4b1!4m6!3m5!1s0x9d0de1ac3288cd:0x3b55b2a13ef7e1c5!8m2!3d-23.1966418!4d-44.629248!16s%2Fg%2F11bv2pqr92';
const goncalo = 'https://www.google.com/maps/place/Praia+de+São+Gonçalinho/@-23.047808,-44.6270719,14z/data=!3m1!4b1!4m6!3m5!1s0x9da73cf98ac1a1:0x73b44cd3ced42833!8m2!3d-23.0478093!4d-44.6095193!16s%2Fg%2F11b6v546vv';
const mirim = 'https://www.google.com/maps/place/Paraty+Mirim+-+Paraty-Mirim,+Paraty+-+RJ,+23970-000/@-23.2420896,-44.6567412,14z/data=!3m1!4b1!4m6!3m5!1s0x9d121795a3bced:0x912a725e89db81b8!8m2!3d-23.242091!4d-44.6391886!16s%2Fg%2F1tdfd9xn';
const mamangua = 'https://www.google.com/maps/place/Saco+do+Mamanguá/@-23.2649248,-44.6320062,17z/data=!3m1!4b1!4m6!3m5!1s0x9d13d9f3948bd3:0x2a940e276bc01d69!8m2!3d-23.2649248!4d-44.6298122!16s%2Fg%2F11c52m0mr4';
const cruzeiro = 'https://www.google.com/maps/place/Praia+do+cruzeiro/@-23.2653713,-44.624104,17z/data=!3m1!4b1!4m6!3m5!1s0x9d1182b11200a3:0x24605600c214d860!8m2!3d-23.2653713!4d-44.62191!16s%2Fg%2F11h8jns4kw';

  return (
    <body className="" id="homePage">
      <Navigation />
      <div className='articleTitle'>
        <h1 className='title'>10 melhores praias <br/>de Paraty</h1>
        <img className='imageOne' src={imageOne}></img>
      </div>
      <SocialLinks />
      <div className='containerOnly'>
        <p className='paragraphPt'>
          Embora a arquitetura colonial seja um destaque e tanto entre as
          dezenas de atrações da cidade histórica mais famosa do Rio de Janeiro,
          é impossível organizar uma viagem e não querer aproveitar também as
          praias de Paraty.
          <br />
          <br />
          <br />
          O que é compreensível, afinal, o mar por estes lados rende passeios privilegiados.
          E se engana quem pensa que o destino tem poucos pedaços de areia à disposição.
          Apesar de as praias mais atraentes ficarem afastadas do <span>centro-histórico</span> de Paraty,
          é possível dedicar ao menos três dias inteiros somente para se encantar com a costa da cidade.
          <br />
          <br />
          <br />
          No entanto, como sei que nem todos os viajantes têm tanto tempo disponível, neste post vou te
          contar o que você pode esperar das melhores praias de Paraty.
          Tenha em mente, porém, que algumas das praias que serão indicadas não são paradisíacas. Ainda assim,
          entraram nesta lista por alguma particularidade especial.
          <br />
          <br />
          <br />
        </p>

        <h1 className='titlePt'>Melhores praias de Paraty</h1>
        <p className='paragraphPt'>
          A primeira coisa que você precisa saber sobre as praias de Paraty, é: em muitas delas só dá para
          chegar por trilha ou barco. Portanto, na minha opinião, vale a pena reservar ao menos um dia do
          roteiro para estas atividades.
          <br />
          <br />
          <br />
          Aliás, se possível e se fizer o seu estilo, reserva um dia para trilha e outro para <span>passeio de barco</span>.

          Ainda assim, se você prefere a comodidade de chegar até perto da areia de carro, saiba que também há praias em Paraty para o seu itinerário. Inclusive, ter um veículo próprio é a melhor maneira para se deslocar entre as praias acessíveis pela estrada.
          <br />
          <br />
          <br />
          Em todo caso, se você for depender do transporte público, a empresa Colitur possui linhas de ônibus para muitas vizinhanças de Paraty. Os ônibus saem da rodoviária da cidade, a passagem custa em torno de R$ 5,00 e o ideal é consultar os horários antecipadamente pois as saídas costumam ser de hora em hora.

          Por fim, se você se interessou pela ideia de fazer um passeio de barco pelas praias de Paraty, no site
          da Civitatis dá para reservar os dois tours mais tradicionais da cidade: escuna e lancha.
          <br />
          <br />
          <br />
        </p>

      </div>
      <h1 className='titleTable'>Top 10 Praias</h1>
      <div className='containerColumn'>
        <Table striped bordered hover className='list'>
          <thead>
            <tr>
              <th>#</th>
              <th>Praia</th>
              <th>Endereço</th>
              <th>Recomendação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Praia do Pontal</td>
              <td>rua bababab bababb alajklja lkajla</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Praia do Jabaquara</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td >Praia de São Gonçalo e São Gonçalinho</td>
              <td>rua jajdjsklje klejrkejfdk</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <td>4</td>
              <td >Praia do Sono</td>
              <td>rua jajdjsklje klejrkejfdk</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <td>5</td>
              <td >Praia do Iriri</td>
              <td>rua jajdjsklje klejrkejfdk</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <td>6</td>
              <td >Praia da Lula</td>
              <td>rua jajdjsklje klejrkejfdk</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <td>7</td>
              <td >Praia de Paraty-Mirim</td>
              <td>rua jajdjsklje klejrkejfdk</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <td>8</td>
              <td >Praia de Paraty-Mirim</td>
              <td>rua jajdjsklje klejrkejfdk</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <td>9</td>
              <td >Praia de Antigos</td>
              <td>rua jajdjsklje klejrkejfdk</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <td>10</td>
              <td >Praia Grande</td>
              <td>rua jajdjsklje klejrkejfdk</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>

        <div className='containerOnly'>


          <img className='imageOne' src={praia2}></img>

          <h1 className='titlePt'>Praia do Pontal</h1>
          <p className='paragraphPt'>A <a target='_blank' href={pontal}>Praia do Pontal </a> 
            é a mais próxima do centro histórico de Paraty: basta cruzar a pontezinha situada ao lado da Praça da Matriz que você já estará nesta vizinhança.

            No entanto, o motivo de incluir este pedaço de areia em uma lista de melhores praias de Paraty não é o banho de mar, mas sim, a boa estrutura comercial que está bem ao lado do centro. Aliás, é por estas bandas que você encontrará algumas das pousadas mais baratas em Paraty.
            <br />
            <br />
            <br />
            Apesar de não ter o charme das ruelas do centro histórico, Pontal é um ótimo bairro para ficar em Paraty devido ao fácil acesso, boa oferta de restaurantes e preços ligeiramente menos inflacionados.

            Sobre a faixa de areia em si, na minha opinião, não vale a pena reservar um espaço na sua programação para ficar à toa por aqui. Aliás, normalmente a balneabilidade da Praia do Pontal está imprópria para banho.
            <br />
            <br />
            <br />
            Se estiver com tempo de sobra, vale mais visitar outro ponto turístico de Paraty que está por esta região: o Forte Defensor Perpétuo.
            <br />
            <br />
            <br />
          </p>

          <img className='imageOne' src={praia3}></img>
          <h1 className='titlePt'>Praia do Jabaquara</h1>
          <p className='paragraphPt'>A <a target='_blank' href={jabaquara}>Praia do Jabaquara </a> 
            é outra das praias centrais de Paraty e que se encontra a uma curta caminhada do centro-histórico: cerca de 20 minutos andando. Porém, apesar do fácil acesso, ela não é nem de longe uma das melhores praias de Paraty.

            Ainda assim, há quem se banhe nas suas águas que nem sempre estão com boa balneabilidade, ou aproveite um fim de tarde em algum dos seus vários quiosques à beira-mar – aliás, para mim o passeio só vale a pena pela boa estrutura pé na areia.

            De qualquer forma, não se preocupe em reservar um espaço no seu roteiro para a praia. Passe por lá apenas se estiver com tempo de sobra, ou caso decida se hospedar por essa região.
            <br />
            <br />
            <br />
            Apesar do mar pouco aproveitável, o bairro Jabaquara possui pousadas com excelente custo-benefício e oferece uma boa estrutura para os turistas. Lembre-se, porém, que você não estará grudado no centro-histórico. Diferente da sua vizinha Praia do Pontal, Jabaquara exige mais disposição para caminhar até o burburinho central.

            Por aqui, vale consultar as ofertas da Pousada Aquarium Beach, Planeta Banana B&B ou do Canguru Hostel.
            <br />
            <br />
            <br />
          </p>

          <img className='imageOne' src={praia4}></img>
          <h1 className='titlePt'>Vila de Trindade</h1>
          <p className='paragraphPt'>Localizada a 25 quilômetros do centro da cidade, a <a target='_blank' href={trindade}>Vila de Trindade </a> é um dos destinos mais concorridos pelos viajantes que querem aproveitar as praias de Paraty. Inclusive, é um lugar que sempre faço questão de voltar.

            Boa faixa de areia com estrutura de quiosques, fácil acesso apesar da distância e ambiente perfeito para um dia de frente para o mar: você encontrará tudo isso nas praias de Trindade.
            <br />
            <br />
            <br />
            Quem estiver de carro não terá a menor dificuldade para chegar até lá e poderá deixar o veículo em algum estacionamento. Por outro lado, vale chegar cedo para conseguir uma boa vaga caso o seu passeio seja durante um final de semana ensolarado ou nos meses de verão.

            Para os desmotorizados, há uma linha de ônibus que sai de hora em hora da rodoviária de Paraty rumo a Trindade, sendo que basta descer no ponto final que você estará a uma quadra da praia.
            <br />
            <br />
            <br />
            Além disso, as operadoras de turismo também oferecem um passeio guiado que sai do centro de Paraty e passa o dia visitando os principais atrativos de Trindade.

            Apesar de ser perfeitamente possível ir a Trindade por conta própria, o tour pode ser útil para quem quer se enturmar com outras pessoas ou não quer sacolejar no transporte público.
            <br />
            <br />
            <br />
            Sobre as praias em si, a faixa de areia principal de Trindade tem dois quilômetros de extensão e é dividida em três praias: Cepilho, Fora e Ranchos.

            Destas, Cepilho é a primeira que vemos ao chegar na vila, e é mais utilizada pelos surfistas devido à falta de estrutura e ondas mais constantes. Fora é a transição entre Cepilho e Ranchos. E por fim, a Praia dos Ranchos é o trecho mais ocupado pelos banhistas e onde estão os quiosques pé na areia.
            <br />
            <br />
            <br />
            Além disso, próximo à Praia dos Ranchos está o acesso que leva os visitantes até a Praia do Meio. Apesar de não ter estrutura turística, possui um cenário digno de cartão postal e é a minha favorita da vila.

            Finalmente, a partir da Praia do Meio se inicia a trilha para a Praia do Cachadaço, onde estão suas famosas piscinas naturais e a icônica Pedra Que Engole.
            <br />
            <br />
            <br />
            Para comes e bebes, além dos quiosques à beira-mar na Praia dos Ranchos, na Rua Principal de Trindade há padarias, lanchonetes e restaurantes.
            <br />
            <br />
            <br />
          </p>

          <img className='imageOne' src={praia5}></img>
          <h1 className='titlePt'>Praia do Sono</h1>
          <p className='paragraphPt'>Selvagem e hospitaleiro, assim é o ambiente que você encontrará na <a target='_blank' href={sono}>Praia do Sono</a>.

            Considerada por muitos a melhor praia de Paraty, para chegar lá é preciso enfrentar uma trilha de três quilômetros percorrida em aproximadamente uma hora, ou então fazer o deslocamento de barco que custa em torno de R$ 35,00 cada trecho.
            <br />
            <br />
            <br />
            Independente de qual seja a sua escolha, a primeira parada é o Condomínio das Laranjeiras, que é de onde saem os barcos e de onde se inicia a trilha. Atente-se, porém, que os pontos de partida não são os mesmos.

            Se estiver de carro peça instruções na portaria do condomínio, ou se for de ônibus – use a linha Vila Oratório – é só avisar o motorista onde deseja descer (se for pela trilha é o ponto final!).
            <br />
            <br />
            <br />
            Durante a alta temporada é comum encontrar muitos quiosques à disposição na praia. Por outro lado, durante a baixa é bom garantir e levar ao menos um pouco de água e uns lanchinhos para enganar a fome.
            <br />
            <br />
            <br />
            Quem quiser passar alguns dias neste paraíso saiba que a Praia do Sono possui alguns campings e quartos para alugar. Tenha em mente, porém, que toda a estrutura na praia é bastante simples.
            <br />
            <br />
            <br />
          </p>

          <img className='imageOne' src={praia6}></img>
          <h1 className='titlePt'>Praia de Antigos e Antiguinhos</h1>
          <p className='paragraphPt'>Com uma paisagem tão exuberante quanto a Praia do Sono, as <a target='_blank' href={antigos}>praias de Antigos e Antiguinho</a> são suas vizinhas. Porém, diferente da primeira mais famosa, por aqui você não encontrará nenhum tipo de estrutura. Ou seja, é um local deserto e ideal para quem estiver em busca de tranquilidade.

            O acesso até lá também é por trilha. No caso, a trilha para a Praia de Antigos começa no canto esquerdo da Praia do Sono. Apesar do início íngreme e assustador, o percurso total do caminho tem pouco menos de um quilômetros e leva em torno de 20 minutos.
            <br />
            <br />
            <br />
            Na minha opinião, um preço bastante justo para se chegar a este pedaço do paraíso e ainda desfrutar de uma vista panorâmica da Praia do Sono.

            Para ir à Praia de Antiguinhos basta caminhar por toda a extensão da Praia de Antigos e pegar a trilha que se encontra no canto esquerdo. Neste caso, a caminhada não vai durar nem 15 minutos.
            <br />
            <br />
            <br />
            Por fim, vale mencionar ainda outro pedaço de areia que está por estes lados e pode fazer parte da sua programação pelas praias de Paraty: a Praia de Ponta Negra.

            Assim como a Praia do Sono, a Ponta Negra tem uma estrutura mínima de serviços para passar o dia ou até mesmo pernoitar por lá. Porém, os serviços são ainda mais limitados.
            <br />
            <br />
            <br />
            Para chegar as opções são as mesmas: terra ou mar. Independente da sua escolha, o ponto de partida é o mesmo para a Praia do Sono: o Condomínio das Laranjeiras.

            Como a trilha acaba sendo mais cansativa, pois além dos 3 quilômetros até a Praia do Sono você precisará caminhar por mais 4 quilômetros – passando por Antigos e Antiguinhos – os viajantes costumam fazer o deslocamento de barco.
            <br />
            <br />
            <br />
          </p>

          <img className='imageOne' src={praia7}></img>
          <h1 className='titlePt'>Praia da Lula</h1>
          <p className='paragraphPt'>A <a target='_blank' href={lula}>Praia da Lula</a> é, para mim, a parada que faz o tradicional passeio de escuna em Paraty valer a pena.

            Acessada somente de barco, é àquele tipo de lugar que conquista logo de longe quando ainda estamos na embarcação: areia clarinha, mar calmo e esverdeado, além de uma vegetação abundante que ajuda a compor um cenário pra lá de fotogênico.

            Sem dúvida alguma é uma das melhores praias de Paraty. O inconveniente, porém, é que como ela é uma parada comum dos passeios de escuna, dificilmente você irá encontrá-la completamente vazia.
            <br />
            <br />
            <br />
            Além disso, normalmente só conseguimos ficar em torno de uma por lá. Afinal, este é o tempo de cada parada durante este passeio.</p>

          <img className='imageOne' src={praia8}></img>
          <h1 className='titlePt'>Praias de São Gonçalo</h1>
          <p className='paragraphPt'>A 30 quilômetros do centro de Paraty, sentido Angra dos Reis, a <a target='_blank' href={goncalo}>Praia de São Gonçalo</a> é uma boa pedida para quem gosta de praias com uma estrutura legal à beira mar, mas nem por isso quer ficar em um ambiente completamente urbano.

            Com uma extensa faixa de areia, mar quentinho e com pequenas ondas, a praia oferece ainda um riacho com água doce – aliás, prepare-se para atravessá-lo para chegar à praia.
            <br />
            <br />
            <br />
            Para quem for pra passar o dia, há uma boa oferta de quiosques para comes e bebes de frente para o mar.

            Além disso, outra possibilidade é incluir também no seu itinerário a travessia de barco até a Ilha do Pelado. Basta chegar à Praia de São Gonçalo você certamente será abordado por barqueiros que fazem este transporte.
            <br />
            <br />
            <br />
            Apesar de não ter visitado a ilha, quem já foi garante que suas águas são um tanto cristalinas e o visual estonteante. A travessia em táxi-boat custa, em média, R$ 30,00 por pessoa (ida e volta).
            <br />
            <br />
            <br />
            Por fim, considere esticar o seu passeio até a Praia de São Gonçalinho, a irmã caçula de de São Gonçalo e que pode ser acessada através de uma curta trilha que começa no canto esquerdo da praia.
            <br />
            <br />
            <br />
          </p>

          <img className='imageOne' src={praia9}></img>
          <h1 className='titlePt'>Praia de Paraty-Mirim</h1>
          <p className='paragraphPt'> Outro lugar para incluir no roteiro da sua viagem a Paraty é <a target='_blank' href={mirim}>Paraty-Mirim</a>, que fica a 15 quilômetros distante do burburinho central.

            Para chegar lá com o transporte público basta utilizar a linha de ônibus Paraty-Mirim, apenas consulte os horários antecipadamente porque não há muitas saídas por dia.
            <br />
            <br />
            <br />
            Assim como a Praia de São Gonçalo, Paraty-Mirim faz o tipo praiona ideal para passar o dia, e com um quiosque que fornece cadeiras e guarda-sol, além de quitutes à beira-mar, claro!

            Além disso, Paraty-Mirim também é o ponto de partida para quem quer explorar as belezas do Saco do Mamanguá. Chegando na praia é comum que barqueiros ofereçam seus serviços para levar os viajantes à lugares praticamente desertos, com areia clara e água verdinha.
            <br />
            <br />
            <br />
            Ainda que você não queira fazer nenhum passeio de barco, Paraty-Mirim é um lugar que vale a visita e rende um ótimo dia à beira-mar.
            <br />
            <br />
            <br />
          </p>

          <img className='imageOne' src={praia10}></img>
          <h1 className='titlePt'>Saco do Mamangua</h1>
          <p className='paragraphPt'>Apesar de indicar a Praia Grande neste texto, pelo simples fato dela ter sido a minha favorita durante um passeio de barco, saiba que o Saco do Mamanguá possui dezenas de refúgios que poderiam facilmente ocupar um espaço nas listas de melhores praias de Paraty.

            Para quem curte passeios de barco – no caso lanchas rápidas – fazer um tour pelo <a target='_blank' href={mamangua}>Saco do Mamanguá</a> é uma escolha certeira.
            <br />
            <br />
            <br />
            Além da Praia Grande, outras que costumam entrar em um passeio por estas bandas é o Saco da Velha, Praia do Engenho e Praia do Cruzeiro. Aliás, essa última se trata do ponto de partida para a trilha do Pico do Pão de Açúcar.
            <br />
            <br />
            <br />
            Os barqueiros costumam ser bastante flexíveis quanto aos pontos de paradas. Como esse é um passeio privado para poucas pessoas, você pode tanto aceitar as sugestões do próprio barqueiro como também indicar lugares que gostaria de conhecer. Tudo é negociável, do preço ao roteiro.

            Para conhecer as praias do Saco do Mamanguá é só ir direto a Paraty-Mirim, e lá negociar o serviço com algum barqueiro. O valor cobrado costuma depender do número de pessoas, e o ideal é que você já esteja com um grupo que pretende fazer o passeio.
            <br />
            <br />
            <br />
            No entanto, se você estiver sozinho – eu mesmo estava – a dica é ir para Paraty-Mirim e se enturmar com outras pessoas que também estejam sozinhas.

            No meu caso, acabamos formando um grupo de cinco pessoas (eu + duas amigas + duas amigas) e o barqueiro fez o passeio por R$ 500,00. Ou seja, R$ 100,00 para cada um.
            <br />
            <br />
            <br />
            Outra possibilidade é contratar o tour oferecido por algumas agências do centro-histórico. Neste caso, o preço por pessoa tende a ser mais alto e o roteiro do passeio é definido previamente.

            Por outro lado, tem-se a facilidade de poder embarcar do cais principal de Paraty, no centro histórico, sem a necessidade de ir à Paraty-Mirim.
            <br />
            <br />
            <br />
          </p>

          <img className='imageOne' src={praia11}></img>
          <h1 className='titlePt'>Praia do Cruzeiro</h1>
          <p className='paragraphPt'>Apesar de seu belo cenário que por si só já valeria a visita, a indicação da <a target='_blank' href={cruzeiro}>Praia do Cruzeiro</a> tem outro motivo. Isso porque, é daqui onde se inicia um dos melhores passeios para fazer em Paraty: a Trilha do Pico do Pão do Açúcar.

            Ok, verdade seja dita: a trilha é puxada, e, embora tenha apenas um quilômetro de extensão, se gasta cerca de uma hora para percorrê-la. Afinal, todo o caminho de ida será morro acima.
            <br />
            <br />
            <br />
            Ainda assim, ao terminar a caminhada você chegará no local que oferece a melhor vista de Paraty: para o Saco do Mamanguá.

            A Praia do Cruzeiro é acessada com os passeios de barco que saem de Paraty-Mirim. No caso, se você pretende fazer a trilha, a minha recomendação é que essa seja a sua última parada do tour.
            <br />
            <br />
            <br />
            Dessa forma você poderá fazer a trilha sem pressa, e ainda pode terminar o dia na simpática Praia do Cruzeiro. E, se estiver com fome, pode almoçar por lá mesmo no restaurante que leva o nome da praia.

            Além disso, se você não quiser fazer o passeio de barco completo pelo Saco do Mamanguá, dá para contratar um barqueiro para que ele te leve de Paraty-Mirim unicamente à Praia do Cruzeiro.
            <br />
            <br />
            <br />
            Por fim, vale deixar um aviso: nem todos os passeios de barco para o Saco do Mamanguá que saem do centro histórico de Paraty, fazem essa parada na Praia do Cruzeiro. Portanto, se você faz questão de fazer essa trilha, confirme com a empresa se ela, de fato, fará essa parada e com tempo hábil para subir ao Pico do Pão de Açúcar.
            <br />
            <br />
            <br />
          </p>
        </div>
      </div>
<section class="section section-divider white blog" id="blog">
        <div class="container">
          <p class="section-subtitle">Serviços</p>

          <h1 class="h2 section-title">
            Nossos <span class="span">Serviços</span>
          </h1>

          <p class="section-text">
            Aqui você conhece Paraty.
          </p>
</div>
</section>
      <ExplorerMenu/>

      <Footer />
    </body>
  );
};