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
      <a target="_blank"
        rel="noreferrer"
        href='https://www.booking.com/hotel/br/pouso-luke-paraty.pt-br.html?aid=360920&label=New_Portuguese_PT_ROW_6409090206-_9oPl604g33uUPimd0_L7QS60966725406%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg&sid=9ade98234a453cce7691a7bd6e150349&dest_id=-659504;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1679523648;srpvid=c3509d1f07130199;type=total;ucfs=1&#hotelTmpl'
      >
        <button className="buttonCard" >Contato</button>
        <button className="buttonCard" >Endereço</button>
        <button className="buttonCard" >Mais...</button>

      </a>
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
      <a target="_blank"
        rel="noreferrer"
        href="https://www.booking.com/hotel/br/casa-valverde-praia-e-cachoeira.pt-br.html?aid=360920&label=New_Portuguese_PT_ROW_6409090206-_9oPl604g33uUPimd0_L7QS60966725406%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg&sid=9ade98234a453cce7691a7bd6e150349&dest_id=7884129;dest_type=hotel;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1679524867;srpvid=e19b9f8067670015;type=total;ucfs=1&#hotelTmpl"
      >
        <button className="buttonCard" >Contato</button>
        <button className="buttonCard" >Endereço</button>
        <button className="buttonCard" >Mais...</button>

      </a>
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
      <a target="_blank"
        rel="noreferrer"
        href='https://www.booking.com/hotel/br/casa-paraty-paraty1234567891011121314151617181920212223242526.pt-br.html?aid=360920&label=New_Portuguese_PT_ROW_6409090206-_9oPl604g33uUPimd0_L7QS60966725406%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg&sid=9ade98234a453cce7691a7bd6e150349&dest_id=6861929;dest_type=hotel;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1679524926;srpvid=74af9f9e56b10099;type=total;ucfs=1&#hotelTmpl'
      >
        <button className="buttonCard" >Contato</button>
        <button className="buttonCard" >Endereço</button>
        <button className="buttonCard" >Mais...</button>

      </a>
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
      <a target="_blank"
        rel="noreferrer"
        href="https://wa.me/message/FZ3T42J3PJ5NH1"
      >
        <button className="buttonCard" >Contato</button>
        <button className="buttonCard" >Endereço</button>
        <button className="buttonCard" >Mais...</button>
      </a>

      <div className="photosServices">
        <img className='gridPhotosRefer' src={toca1} />
        <div className="drawPhotos">
          <img className='gridPhotos' src={toca2} />
          <img className='gridPhotos' src={toca3} />
        </div>
      </div>
      
    </div>
  )
}