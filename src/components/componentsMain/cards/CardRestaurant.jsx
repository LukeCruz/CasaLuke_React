import Footer from '../container/Footer';
import ButtonFloat from '../buttons/ButtonFloat';

import fifthRating from '../../../assets/png/fifthRating.png';
import coqueiro1 from '../../../assets/jpeg/coqueiro.jpeg';
import coqueiro2 from '../../../assets/jpeg/coqueiro2.jpeg';
import coqueiro3 from '../../../assets/jpeg/camarao2.png';
import bardapraia1 from '../../../assets/jpeg/bardapraia1.jpeg';
import bardapraia2 from '../../../assets/jpeg/bardapraia2.jpeg';
import bardapraia3 from '../../../assets/jpeg/baedapraia3.jpeg';
import francisco1 from '../../../assets/jpeg/francisco1.jpeg';
import francisco2 from '../../../assets/jpeg/francisco2.jpeg';
import francisco3 from '../../../assets/jpeg/francisco3.jpeg';
import toca1 from '../../../assets/jpeg/toca1.webp';
import toca2 from '../../../assets/jpeg/toca2.jpeg';
import toca3 from '../../../assets/jpeg/toca3.webp';

export default function CardRestaurant() {
  return (
    <div className="experience">
      <div className="fullCard">
        <h1 className="titleCard">Bar do Coqueiro - Ilha do Cedro</h1>
        <img src={fifthRating} className="userRating"></img>
      </div>
        <button className="buttonCard" >Saiba mais</button>
      <div className="photosServices">

        <img className='gridPhotosRefer' src={coqueiro1} />
        <div className="drawPhotos">
          <img className='gridPhotos' src={coqueiro2} />
          <img className='gridPhotos' src={coqueiro3} />
        </div>
      </div>
      <div className="fullCard">
        <h1 className="titleCard">Bar da Praia - São Gonçalo</h1>
        <img src={fifthRating} className="userRating"></img>
      </div>
      <button className="buttonCard" >Saiba mais</button>

      <div className="photosServices">

        <img className='gridPhotosRefer' src={bardapraia2} />
        <div className="drawPhotos">
          <img className='gridPhotos' src={bardapraia1} />
          <img className='gridPhotos' src={bardapraia3} />
        </div>
      </div>
      <div className="fullCard">

        <h1 className="titleCard">Restaurante Quiosque São Francisco</h1>
        <img src={fifthRating} className="userRating"></img>
      </div>
      <button className="buttonCard" >Saiba mais</button>

      <div className="photosServices">

        <img className='gridPhotosRefer' src={francisco1} />
        <div className="drawPhotos">
          <img className='gridPhotos' src={francisco2} />
          <img className='gridPhotos' src={francisco3} />
        </div>
      </div>
      <div className="fullCard">

        <h1 className="titleCard">Toca Do Pastel</h1>
        <img src={fifthRating} className="userRating"></img>
      </div>
      <button className="buttonCard" >Saiba mais</button>

      <div className="photosServices">
        <img className='gridPhotosRefer' src={toca1} />
        <div className="drawPhotos">
          <img className='gridPhotos' src={toca2} />
          <img className='gridPhotos' src={toca3} />
        </div>
      </div>
      <Footer/>
      <ButtonFloat/>
    </div>
  )
}