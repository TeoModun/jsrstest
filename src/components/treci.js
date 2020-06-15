import React from 'react';
import {Link} from "react-router-dom";
import "../App.css";
import Evo from '../huracan evo.jpg';
import Evo_S from '../evo spyder.jpg';
import Rwd from '../rwd.jpg';
import Rwd_S from '../rwd s.jpg';




function Treci() {
  return(
  <div className="tri">
      <div class="div1">
        <h2 class="naslov_3">Huracan</h2>
        <p class="tekst">The Lamborghini Huracán is a sports car manufactured by Italian automotive manufacturer Lamborghini replacing the previous V10 offering, the Gallardo.The Huracán made its worldwide debut at the 2014 Geneva Auto Show, and was released in the market in the second quarter of 2014. The LP 610-4 designation comes from the car having a 610 metric horsepower and 4 wheel drive, while LP stands for "Longitudinale Posteriore", which refers to the longitudinal mid-rear engine position. The Huracán's name (huracán being the Spanish word for hurricane) is inspired by a Spanish fighting bull. Names from historical Spanish fighting bulls has been the traditional naming scheme of most Lamborghini car models. Huracán was a bull known for its courage that fought in 1879.</p>
        </div>
        <div class="div1">
        <h2 class="naslov_3">DESIGNED TO PUSH BEYOND PERFORMANCE</h2>
        <p class="tekst">Discover all the new models of this exclusive car family, created to shape to your deepest emotions. Combining the highest expression of Lamborghini’s power with the exclusive refinement of Italian handicraft, this series embodies authentic design and state-of-the-art mechanical technology. The Lamborghini Huracán is the perfect fusion of technology and design. With its crisp, streamlined lines, designed to cut through the air and tame the road, you’ll get a thrill just by looking at it. The only thing better than taking in this beauty from a distance is actually touching it. The finest Italian craftsmanship lavished on finishes of unprecedented prestige and quality.</p></div>
        <div class="div1">
        <h2 class="naslov_3">DESIGN</h2>
        <p class="tekst">Sculptured and sensual, the Huracán’s design is based on the spiky hexagonal forms of the carbon atom, while the seamless roof profile is an unmistakable mark of the Lamborghini DNA. The Huracán is unique even in the dark, thanks to the alluringly “technological” light of its full-LED lighting system. Choose your favourite Lamborghini Huracán and discover its technical specifications. </p></div>

        <div class="div1">
          <h2 class="naslov_3">Lamborghini Huracan Evo</h2>
          <a href="https://www.lamborghini.com/en-en/models/huracan/huracan-evo"><img src={Evo} class="slika2"></img></a>
        </div>

        <div class="div1">
          <h2 class="naslov_3">Lamborghini Huracan Evo Spyder</h2>
          <a href="https://www.lamborghini.com/en-en/models/huracan/huracan-evo-spyder"><img src={Evo_S} class="slika2"></img></a>
        </div>

        <div class="div1">
          <h2 class="naslov_3">Lamborghini Huracan Rwd</h2>
          <a href="https://www.lamborghini.com/en-en/models/huracan/huracan-evo-rwd"><img src={Rwd} class="slika2"></img></a>
        </div>

        <div class="div1">
          <h2 class="naslov_3">Lamborghini Huracan Rwd Spyder</h2>
          <a href="https://www.lamborghini.com/en-en/models/huracan/huracan-evo-rwd-spyder"><img src={Rwd_S} class="slika2"></img></a>
        </div>

<Link to ='/cetvrti'class="link">SLJEDEĆA</Link>
    </div>
    )
}

export default Treci;