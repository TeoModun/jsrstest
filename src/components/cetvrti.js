import React from 'react';
import {Link} from "react-router-dom";
import Urus from '../urus.jpg'


function Cetvrti() {
  return(
  <div className="cetiri">
      <div class="div1">
        <h2 class="naslov_3">Urus</h2>
        <p class="tekst">The Lamborghini Huracán is a sports car manufactured by Italian automotive manufacturer Lamborghini replacing the previous V10 offering, the Gallardo.The Huracán made its worldwide debut at the 2014 Geneva Auto Show, and was released in the market in the second quarter of 2014. The LP 610-4 designation comes from the car having a 610 metric horsepower and 4 wheel drive, while LP stands for "Longitudinale Posteriore", which refers to the longitudinal mid-rear engine position. The Huracán's name (huracán being the Spanish word for hurricane) is inspired by a Spanish fighting bull. Names from historical Spanish fighting bulls has been the traditional naming scheme of most Lamborghini car models. Huracán was a bull known for its courage that fought in 1879.</p>
        </div>
        <div class="div1">
        <h2 class="naslov_3">Overview</h2>
        <p class="tekst">The soul of a super sports car and the functionality of an SUV: Lamborghini Urus is the first Super Sport Utility Vehicle in the world. With extreme proportions, breathtaking design, extraordinary driving dynamics and heart-pounding performance, Urus represents freedom in its quintessential state. You can experience any road, from track to the sand, ice, gravel or rocks, thus unlocking any road. You can explore any new terrain, thus expressing yourself.</p></div>
        <div class="div1">
        <h2 class="naslov_3">Exterior and interior</h2>
        <p class="tekst">Its design assumes multiple guises: sporty, elegant and off-road. Muscular surfaces lend a decisive appearance, while the massive tires and wheels impart the look of a luxury super sports car. Every surface places a focus on functionality. The signature style of Lamborghini is immediately recognizable, with details such as Y-shaped and hexagonal details, the front hood with center peak, and the crossed lines on the rear hood. Urus is the lowest SUV in its segment. The luxury of Italian craftsmanship meets state-of-the-art technology. Aerospace-inspired design and driver-oriented instrumentation, featuring three TFT screens, make the driving experience more comfortable and engaging. The interior can be customized and made even more sporty or elegant, thanks to the wide range of colors and materials: leather, Alcantara, wood, aluminum or carbon-fiber finishes.</p></div>

        <div class="div1">
          <h2 class="naslov_3">Urus</h2>
          <a href="https://www.lamborghini.com/en-en/models/urus"><img src={Urus} class="slika2"></img></a>
        </div>


<Link to ='/peti'class="link">SLJEDEĆA</Link>
    </div>
    )
}

export default Cetvrti;