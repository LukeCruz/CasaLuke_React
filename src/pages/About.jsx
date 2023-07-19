import React from 'react';
import { Link } from "react-router-dom";

import Navigation from '../components/componentsMain/menu/Navigation';
import MenuExplorer from '../components/componentsArticles/MenuExplorer.jsx';
import Canva from '../components/componentsMain/menu/OffCanvas';
import Toast from '../components/componentsMain/container/Toast';
import About from '../components/componentsMain/container/About';
import Contact from '../components/componentsMain/container/Contact';
import Footer from '../components/componentsMain/container/Footer';
import ButtonFloat from '../components/componentsMain/buttons/ButtonFloat';

import booking from '../assets/booking.jpg';
import airbnb from '../assets/airbnb.png';
import expedia from '../assets/expedia.jpeg';

export default function Main() {
  return (
    <div className="" id="homepage">
      <Navigation />

      <div>
      <div className="explorer">
        <h1 className="textRed">Explore</h1>
        <h1 className="textWhite"> Paraty</h1>
      </div>
        <Toast />
  

        <section class="section section-divider white blog" id="blog">
        <div class="container">

          <p class="section-subtitle">Conheça mais!</p>

          <h2 class="h2 section-title">
            Nossos Parceiros <span class="span">Digitais</span>
          </h2>

          <p class="section-text">
            Aqui você vive Paraty.
          </p>

          <ul class="blog-list">

            <li>
              <div class="blog-card">

                <div class="card-banner">
                  <img src={booking} width="600" height="230" loading="lazy"
                    alt="card of book" class="w-100" />

                  <div class="badge">Reserve</div>
                </div>

                <div class="card-content">

                  <div class="card-meta-wrapper">

                    <a target='_blank' href="https://www.booking.com/hotel/br/pouso-luke-paraty.html?lang=xu" class="card-meta-link">
                      <ion-icon name="calendar-outline"></ion-icon>

                    </a>

                    <a target='_blank' href="https://www.booking.com/hotel/br/pouso-luke-paraty.html?lang=xu" class="card-meta-link">
                      <ion-icon name="person-outline"></ion-icon>

                      <p class="meta-info">Luke Paraty</p>
                    </a>

                  </div>

                  <h3 class="h3">
                      <a target='_blank' href="https://www.booking.com/hotel/br/pouso-luke-paraty.html?lang=xu" class="card-title">Booking.com</a>
                  </h3>

                  <p class="card-text">
                  Encontre nossas Acomodações de Acordo com o Seu Bolso. Sem Taxas de Reserva. 
                  o Maior Website de Viagens do Mundo.
                  </p>

                  <a target='_blank' href="https://www.booking.com/hotel/br/pouso-luke-paraty.html?lang=xu" class="btn-link">
                    <span>Saiba Mais</span>

                    <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                  </a>

                </div>

              </div>
            </li>

            <li>
              <div class="blog-card">

                <div class="card-banner">
                  <img src={airbnb} width="600" height="200" loading="lazy"
                    alt="card of book." class="w-100" />

                  <div class="badge">Reserve</div>
                </div>

                <div class="card-content">

                  <div class="card-meta-wrapper">

                    <a target='_blank' href="https://www.airbnb.com.br/rooms/51957247?source_impression_id=p3_1688080290_VDOrxET%2B8G5eLe%2FY" class="card-meta-link">
                      <ion-icon name="calendar-outline"></ion-icon>

                    </a>

                    <a target='_blank' href="https://www.airbnb.com.br/rooms/51957247?source_impression_id=p3_1688080290_VDOrxET%2B8G5eLe%2FY" class="card-meta-link">
                      <ion-icon name="person-outline"></ion-icon>

                      <p class="meta-info">Luke Paraty</p>
                    </a>

                  </div>

                  <h3 class="h3">
                      <a target='_blank'  href="https://www.airbnb.com.br/rooms/51957247?source_impression_id=p3_1688080290_VDOrxET%2B8G5eLe%2FY" class="card-title">Airbnb</a>
                  </h3>

                  <p class="card-text">
                  Encontre o lugar perfeito a um preço incrível. 
                  O mundo é a sua casa com o Airbnb.
                  </p>

                  <a target='_blank'  href="https://www.airbnb.com.br/rooms/51957247?source_impression_id=p3_1688080290_VDOrxET%2B8G5eLe%2FY" class="btn-link">
                    <span>Saiba mais</span>

                    <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                  </a>

                </div>

              </div>
            </li>

            <li>
              <div class="blog-card">

                <div class="card-banner">
                  <img src={expedia} width="600" height="230" loading="lazy"
                    alt="csrd of book" class="w-100" />

                  <div class="badge">Reserve</div>
                </div>

                <div class="card-content">

                  <div class="card-meta-wrapper">

                    <a target='_blank' href="https://www.airbnb.com.br/rooms/51957247?source_impression_id=p3_1688080290_VDOrxET%2B8G5eLe%2FY" class="card-meta-link">
                      <ion-icon name="calendar-outline"></ion-icon>

                    </a>

                    <a target='_blank' href="https://www.airbnb.com.br/rooms/51957247?source_impression_id=p3_1688080290_VDOrxET%2B8G5eLe%2FY" class="card-meta-link">
                      <ion-icon name="person-outline"></ion-icon>

                      <p class="meta-info">Luke Paraty</p>
                    </a>

                  </div>

                  <h3 class="h3">
                      <a  target='_blank' href="https://www.trivago.com.br/pt-BR/oar/casa-apartamento-inteiro-casa-luke-paraty-praia-e-cachoeira-im%C3%B3vel-de-luxo?search=100-24969854&sem_keyword=&sem_creativeid=599786197847&sem_matchtype=&sem_network=g&sem_device=c&sem_placement=&sem_target=&sem_adposition=&sem_param1=&sem_param2=&sem_campaignid=338952668&sem_adgroupid=28383559148&sem_targetid=dsa-39154095400&sem_location=1032132&cip=551131&gclid=Cj0KCQjw1_SkBhDwARIsANbGpFtbpjiGQiE9Jp8EzHeUTnRVGqjr-tgi2L7tA4Sq9GPhQjHH3LucqAwaAl8dEALw_wcB" class="card-title">Expedia</a>
                  </h3>

                  <p class="card-text">
                  O site que tem tudo para você fazer a viagem dos sonhos.
                   Economize ainda mais reservando um pacote que inclui voo ou aluguel de carro.
                  </p>

                  <a target='_blank' href="https://www.trivago.com.br/pt-BR/oar/casa-apartamento-inteiro-casa-luke-paraty-praia-e-cachoeira-im%C3%B3vel-de-luxo?search=100-24969854&sem_keyword=&sem_creativeid=599786197847&sem_matchtype=&sem_network=g&sem_device=c&sem_placement=&sem_target=&sem_adposition=&sem_param1=&sem_param2=&sem_campaignid=338952668&sem_adgroupid=28383559148&sem_targetid=dsa-39154095400&sem_location=1032132&cip=551131&gclid=Cj0KCQjw1_SkBhDwARIsANbGpFtbpjiGQiE9Jp8EzHeUTnRVGqjr-tgi2L7tA4Sq9GPhQjHH3LucqAwaAl8dEALw_wcB" class="btn-link">
                    <span>Saiba mais</span>

                    <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                  </a>

                </div>

              </div>
            </li>

          </ul>

        </div>

      </section>

        <div className='containerAbout'>

          <About />
          <Contact />
        </div>
        <MenuExplorer/>
        <Footer />
      </div>
      <ButtonFloat />
    </div>
  );
};
