import fifthRating from '../../../assets/png/fifthRating.png';
import luke1 from '../../../assets/services/casaluke.jpg';
import luke2 from '../../../assets/services/casaluke2.jpg';
import luke3 from '../../../assets/services/casaluke3.jpg';
import biri1 from '../../../assets/services/biri.jpg';
import biri2 from '../../../assets/services/biri2.jpg';
import biri3 from '../../../assets/services/otherr.jpg';
import lunna1 from '../../../assets/services/lunna1.jpg';
import lunna2 from '../../../assets/services/lunna2.jpg';
import lunna3 from '../../../assets/services/lunna3.jpg';
import sole1 from '../../../assets/services/sole1.jpg';
import sole2 from '../../../assets/services/sole2.jpg';
import sole3 from '../../../assets/services/sole3.jpg';
import coqueiro1 from '../../../assets/services/coqueiro1.jpg';
import coqueiro2 from '../../../assets/services/coqueiro2.jpg';
import coqueiro3 from '../../../assets/services/coqueiro3.jpg';
import escuna1 from '../../../assets/services/escuna1.jpg';
import escuna2 from '../../../assets/services/escuna2.jpg';
import escuna3 from '../../../assets/services/escuna3.jpg';

export default function CardHotel() {
  return(
                    <div className="experience">
                        <div className="fullCard">
                            <h1 className="titleCard">Casa Luke Paraty</h1>
                            <img src={fifthRating} className="userRating"></img>
                        </div>
                        <a target="_blank"
                            rel="noreferrer"
                            href='https://www.booking.com/hotel/br/pouso-luke-paraty.pt-br.html?aid=360920&label=New_Portuguese_PT_ROW_6409090206-_9oPl604g33uUPimd0_L7QS60966725406%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg&sid=9ade98234a453cce7691a7bd6e150349&dest_id=-659504;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1679523648;srpvid=c3509d1f07130199;type=total;ucfs=1&#hotelTmpl'
                        >
                            <button className="buttonCard" >Reserve aqui!</button>

                        </a>
                        <div className="photosServices">

                            <img className='gridPhotosRefer' src={luke2} />
                            <div className="drawPhotos">
                                <img className='gridPhotos' src={luke1} />
                                <img className='gridPhotos' src={luke3} />
                            </div>
                        </div>
                        <div className="fullCard">
                            <h1 className="titleCard">Casa Lunna Paraty</h1>
                            <img src={fifthRating} className="userRating"></img>
                        </div>
                        <a target="_blank"
                            rel="noreferrer"
                            href="https://www.booking.com/hotel/br/casa-valverde-praia-e-cachoeira.pt-br.html?aid=360920&label=New_Portuguese_PT_ROW_6409090206-_9oPl604g33uUPimd0_L7QS60966725406%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg&sid=9ade98234a453cce7691a7bd6e150349&dest_id=7884129;dest_type=hotel;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1679524867;srpvid=e19b9f8067670015;type=total;ucfs=1&#hotelTmpl"
                        >
                            <button className="buttonCard" >Reserve aqui!</button>

                        </a>
                        <div className="photosServices">

                            <img className='gridPhotosRefer' src={lunna1} />
                            <div className="drawPhotos">
                                <img className='gridPhotos' src={lunna2} />
                                <img className='gridPhotos' src={lunna3} />
                            </div>
                        </div>
                        <div className="fullCard">

                            <h1 className="titleCard">Casa Sole e Mare Paraty</h1>
                            <img src={fifthRating} className="userRating"></img>
                        </div>
                        <a target="_blank"
                            rel="noreferrer"
                            href='https://www.booking.com/hotel/br/casa-paraty-paraty1234567891011121314151617181920212223242526.pt-br.html?aid=360920&label=New_Portuguese_PT_ROW_6409090206-_9oPl604g33uUPimd0_L7QS60966725406%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg&sid=9ade98234a453cce7691a7bd6e150349&dest_id=6861929;dest_type=hotel;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1679524926;srpvid=74af9f9e56b10099;type=total;ucfs=1&#hotelTmpl'
                        >
                            <button className="buttonCard" >Reserve aqui!</button>

                        </a>
                        <div className="photosServices">

                            <img className='gridPhotosRefer' src={sole1} />
                            <div className="drawPhotos">
                                <img className='gridPhotos' src={sole2} />
                                <img className='gridPhotos' src={sole3} />
                            </div>
                        </div>
                        <div className="fullCard">

                            <h1 className="titleCard">Casa Dos Coqueiros</h1>
                            <img src={fifthRating} className="userRating"></img>
                        </div>
                        <a target="_blank"
                            rel="noreferrer"
                            href="https://wa.me/message/FZ3T42J3PJ5NH1"
                        >
                            <button className="buttonCard" >Reserve aqui!</button>

                        </a>

                        <div className="photosServices">
                            <img className='gridPhotosRefer' src={coqueiro1} />
                            <div className="drawPhotos">
                                <img className='gridPhotos' src={coqueiro2} />
                                <img className='gridPhotos' src={coqueiro3} />
                            </div>
                        </div>
                        <h1 className="titleCard">Passeios de Escuna e Lancha</h1>
                        <a target="_blank"
                            rel="noreferrer"
                            href="https://wa.me/message/FZ3T42J3PJ5NH1"
                        >
                            <button className="buttonCard" >Contrate aqui!</button>

                        </a>
                        <div className="photosServices">

                            <img className='gridPhotosRefer' src={escuna1} />
                            <div className="drawPhotos">
                                <img className='gridPhotos' src={escuna2} />
                                <img className='gridPhotos' src={escuna3} />
                            </div>
                        </div>

                        <h1 className="titleCard">Restaurantes Parceiros</h1>
                        <a target="_blank"
                            rel="noreferrer"
                            href="https://wa.me/message/FZ3T42J3PJ5NH1"
                        >
                            <button className="buttonCard" >Saiba mais...</button>

                        </a>
                        <div className="photosServices">

                            <img className='gridPhotosRefer' src={biri1} />
                            <div className="drawPhotos">
                                <img className='gridPhotos' src={biri2} />
                                <img className='gridPhotos' src={biri3} />
                            </div>
                        </div>
                    </div>
)
}