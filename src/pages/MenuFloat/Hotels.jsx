import React from "react";

import MenuExplorer from "../../components/componentsArticles/MenuExplorer";
import CardHotel from "../../components/componentsMain/cards/CardHotels";
import Navigation from "../../components/componentsMain/menu/Navigation";

export default class Hotels extends React.Component {
  render() {
    return(
      <>
        <Navigation/>
          <p class="section-subtitle">Hospedagens</p>

          <h2 class="h2 section-title">
            Escolha onde<span class="span">Ficar !</span>
          </h2>

          <p class="section-text">
            Aqui você conhece Paraty.
          </p>
      <div className="explorer">
        <h1 className="textRed">Hospedagens</h1>
        <h1 className="textWhite"> Paraty</h1>
      </div>
        <MenuExplorer/>
<section class="section section-divider white blog" id="blog">
        <div class="container">
          <p class="section-subtitle">Hospedagens</p>

          <h2 class="h2 section-title title-h2">
            Escolha onde <span class="span">ficar !</span>
          </h2>

          <p class="section-text">
            Aqui você conhece Paraty.
          </p>
</div>
</section>
        <CardHotel/>
      </>  
    )
  }
}