import fifthRating from '../../../assets/png/fifthRating.png';
import lancha1 from '../../../assets/jpeg/lancha1.jpeg';
import lancha2 from '../../../assets/jpeg/lancha2.jpeg';
import lancha3 from '../../../assets/jpeg/lancha3.jpeg';

import jeep1 from '../../../assets/jpeg/jeep2.jpeg';
import jeep2 from '../../../assets/jpeg/jeep3.jpeg';
import jeep3 from '../../../assets/jpeg/jeep3.jpeg';

import guia1 from '../../../assets/jpeg/guia1.png';
import guia2 from '../../../assets/jpeg/guia2.jpeg';
import guia3 from '../../../assets/jpeg/guia3.jpeg';

import mergulho1 from '../../../assets/jpeg/mergulho2.jpeg';
import mergulho2 from '../../../assets/png/mergulho3.png';
import mergulho3 from '../../../assets/jpg/mergulho1.jpg';

import escuna1 from '../../../assets/jpeg/escuna3.jpeg';
import escuna2 from '../../../assets/jpg/escuna1.jpg';
import escuna3 from '../../../assets/jpg/escuna2.jpg';

export default function CardHotel() {
    return (
        <div className="experience">
            <div className="fullCard">
                <h1 className="titleCard">Passeio de Lancha</h1>
                <img src={fifthRating} className="userRating"></img>
            </div>
            <a target="_blank"
                rel="noreferrer"
                href='https://www.booking.com/hotel/br/pouso-luke-paraty.pt-br.html?aid=360920&label=New_Portuguese_PT_ROW_6409090206-_9oPl604g33uUPimd0_L7QS60966725406%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg&sid=9ade98234a453cce7691a7bd6e150349&dest_id=-659504;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1679523648;srpvid=c3509d1f07130199;type=total;ucfs=1&#hotelTmpl'
            >
                <button className="buttonCard" >Reserve aqui!</button>

            </a>
            <div className="photosServices">

                <img className='gridPhotosRefer' src={lancha1} />
                <div className="drawPhotos">
                    <img className='gridPhotos' src={lancha2} />
                    <img className='gridPhotos' src={lancha3} />
                </div>
            </div>
            <div className="fullCard">
                <h1 className="titleCard">Passeio de Escuna</h1>
                <img src={fifthRating} className="userRating"></img>
            </div>
            <a target="_blank"
                rel="noreferrer"
                href="https://www.booking.com/hotel/br/casa-valverde-praia-e-cachoeira.pt-br.html?aid=360920&label=New_Portuguese_PT_ROW_6409090206-_9oPl604g33uUPimd0_L7QS60966725406%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg&sid=9ade98234a453cce7691a7bd6e150349&dest_id=7884129;dest_type=hotel;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1679524867;srpvid=e19b9f8067670015;type=total;ucfs=1&#hotelTmpl"
            >
                <button className="buttonCard" >Reserve aqui!</button>

            </a>
            <div className="photosServices">

                <img className='gridPhotosRefer' src={escuna1} />
                <div className="drawPhotos">
                    <img className='gridPhotos' src={escuna2} />
                    <img className='gridPhotos' src={escuna3} />
                </div>
            </div>
            <div className="fullCard">

                <h1 className="titleCard">Passeio de Jeep</h1>
                <img src={fifthRating} className="userRating"></img>
            </div>
            <a target="_blank"
                rel="noreferrer"
                href='https://www.booking.com/hotel/br/casa-paraty-paraty1234567891011121314151617181920212223242526.pt-br.html?aid=360920&label=New_Portuguese_PT_ROW_6409090206-_9oPl604g33uUPimd0_L7QS60966725406%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg&sid=9ade98234a453cce7691a7bd6e150349&dest_id=6861929;dest_type=hotel;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1679524926;srpvid=74af9f9e56b10099;type=total;ucfs=1&#hotelTmpl'
            >
                <button className="buttonCard" >Reserve aqui!</button>

            </a>
            <div className="photosServices">

                <img className='gridPhotosRefer' src={jeep1} />
                <div className="drawPhotos">
                    <img className='gridPhotos' src={jeep2} />
                    <img className='gridPhotos' src={jeep3} />
                </div>
            </div>
            <div className="fullCard">

                <h1 className="titleCard">Mergulhos guiados</h1>
                <img src={fifthRating} className="userRating"></img>
            </div>
            <a target="_blank"
                rel="noreferrer"
                href="https://wa.me/message/FZ3T42J3PJ5NH1"
            >
                <button className="buttonCard" >Reserve aqui!</button>

            </a>

            <div className="photosServices">
                <img className='gridPhotosRefer' src={mergulho1} />
                <div className="drawPhotos">
                    <img className='gridPhotos' src={mergulho2} />
                    <img className='gridPhotos' src={mergulho3} />
                </div>
            </div>
            <h1 className="titleCard">Guia Turistico</h1>
            <a target="_blank"
                rel="noreferrer"
                href="https://wa.me/message/FZ3T42J3PJ5NH1"
            >
                <button className="buttonCard" >Contrate aqui!</button>

            </a>
            <div className="photosServices">

                <img className='gridPhotosRefer' src={guia1} />
                <div className="drawPhotos">
                    <img className='gridPhotos' src={guia2} />
                    <img className='gridPhotos' src={guia3} />
                </div>
            </div>
        </div>
    )
}