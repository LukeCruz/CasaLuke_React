import image1 from '../assets/imgLuke.jpg';
import image2 from '../assets/paraty1.jpg'
import image3 from '../assets/beach_resized.jpeg'


export default function House() {
    return (
        <section class="slider">
        <input name='slide' type="radio"/>
        <input name='slide' type="radio" checked/>
        <input name='slide' type="radio"/>
        <input name='slide' type="radio"/>
    
        <div class="slider-content">
            <div className="sliderItem"><img className="imageItem" src={image1} alt="" /></div>
            <div className="sliderItem"><img className="imageItem" src={image2} alt="" /></div>
            <div className="sliderItem"><img className="imageItem" src={image3} alt="" /></div>
            <div className="sliderItem"><img className="imageItem" src={image4} alt="" /></div>
        </div>
    </section>
    )
}