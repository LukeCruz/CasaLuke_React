import React from "react";
import { Link } from "react-router-dom";

import guiaParaty from '../../assets/guia-paraty.jpeg';
import mamangua from '../../assets/mamangua.jpeg';

export default function Blog() {
  return (
    <section class="section section-divider white blog" id="blog">
      <div class="container">

        <p class="section-subtitle">Dicas</p>

        <h2 class="h2 section-title">
          Dicas e pontos<span class="span">Turisticos</span>
        </h2>

        <p class="section-text">
          Aqui você conhece Paraty.
        </p>

        <ul class="blog-list">

          <li>
            <div class="blog-card">

              <div class="card-banner">
                <img src={mamangua} width="600" height="390" loading="lazy"
                  alt="What Do You Think About Cheese Pizza Recipes?" class="w-100" />

                <div class="badge">Dica</div>
              </div>

              <div class="card-content">

                <div class="card-meta-wrapper">

                  <a href="#" class="card-meta-link">
                    <ion-icon name="calendar-outline"></ion-icon>

                    <time class="meta-info" datetime="2022-01-01">Jan 01 2022</time>
                  </a>

                  <a href="#" class="card-meta-link">
                    <ion-icon name="person-outline"></ion-icon>

                    <p class="meta-info">Luke Paraty</p>
                  </a>

                </div>

                <h3 class="h3">
                  <Link to='/1' className="linkStyle">
                    <a href="#" class="card-title">Quais as 10 melhores praias de Paraty</a>
                  </Link>
                </h3>

                <p class="card-text">
                  Embora a arquitetura colonial seja um destaque e tanto entre as dezenas de atrações
                  da cidade histórica mais famosa do Rio de Janeiro, as praias...
                </p>

                <a href="#" class="btn-link">
                  <span>Ler mais</span>

                  <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                </a>

              </div>

            </div>
          </li>

          <li>
            <div class="blog-card">

              <div class="card-banner">
                <img src={guiaParaty} width="600" height="390" loading="lazy"
                  alt="Making Chicken Strips With New Delicious Ingridents." class="w-100" />

                <div class="badge">Conheça</div>
              </div>

              <div class="card-content">

                <div class="card-meta-wrapper">

                  <a href="#" class="card-meta-link">
                    <ion-icon name="calendar-outline"></ion-icon>

                    <time class="meta-info" datetime="2022-01-01">Mar 22 2023</time>
                  </a>

                  <a href="#" class="card-meta-link">
                    <ion-icon name="person-outline"></ion-icon>

                    <p class="meta-info">Luke Paraty</p>
                  </a>

                </div>

                <h3 class="h3">
                  <Link to='/2' className="linkStyle">
                    <a href="#" class="card-title">Um guia completo de Paraty.</a>
                  </Link>
                </h3>

                <p class="card-text">
                  Paraty une história e paisagens naturais realmente estonteantes e, o melhor de tudo,
                  Paraty está em uma das mais lindas baías do país.
                </p>

                <a href="#" class="btn-link">
                  <span>Ler mais</span>

                  <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                </a>

              </div>

            </div>
          </li>

          <li>
            <div class="blog-card">

              <div class="card-banner">
                <img src={mamangua} width="600" height="390" loading="lazy"
                  alt="Innovative Hot Chessyraw Pasta Make Creator Fact." class="w-100" />

                <div class="badge">Viaje</div>
              </div>

              <div class="card-content">

                <div class="card-meta-wrapper">

                  <a href="#" class="card-meta-link">
                    <ion-icon name="calendar-outline"></ion-icon>

                    <time class="meta-info" datetime="2022-01-01">Abr 06 2023</time>
                  </a>

                  <a href="#" class="card-meta-link">
                    <ion-icon name="person-outline"></ion-icon>

                    <p class="meta-info">Luke Paraty</p>
                  </a>

                </div>

                <h3 class="h3">
                  <Link to='/3' className="linkStyle">
                    <a href="#" class="card-title">Fiorde Brasileiro - Saco do Mamanguá</a>
                  </Link>
                </h3>

                <p class="card-text">
                  Já ouviu falar no Saco do Mamanguá? Esse paraíso pouco explorado no litoral do Rio
                  de Janeiro está localizado no município de Paraty e é um excelente destino para...
                </p>

                <a href="#" class="btn-link">
                  <span>Ler mais</span>

                  <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                </a>

              </div>

            </div>
          </li>

        </ul>

      </div>
    </section>
  )
}