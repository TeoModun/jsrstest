import React from 'react';
import {Link} from 'react-router-dom';
import Aventador from '../aventador.jpg';
import Roadster from '../aventadorsvj.jpg';
import S from '../aventador s.jpg';
import S_Roadster from '../aventador s roadster.jpg';


function Drugi() {
  return (
    <div className="dva">
      <div class="div1">
        <h2 class="naslov_3">Aventador</h2>
        <p class="tekst">The Lamborghini Aventador is a mid-engine sports car produced by the Italian automotive manufacturer Lamborghini. In keeping with Lamborghini tradition, the Aventador is named after a fighting bull.Production of the Aventador was planned to be limited to 4,000 vehicles; however, in 2016, it achieved the 5,000 unit milestone. The molds used to make the carbon-fibre monocoque are expected to last 500 molds each and only 8 have been made.The car's shape borrows heavily from Lamborghini's limited-edition Reventón and the Estoque concept car.The Aventador was unveiled at Lummus Park, Miami, followed by Miami International Airport, followed by Auto China 2014 (with Nazionale configuration via Lamborghini Ad Personam personalization program). </p>
        </div>
        <div class="div1">
        <h2 class="naslov_3">DESIGNED TO PUSH BEYOND PERFORMANCE</h2>
        <p class="tekst">Revolutionary thinking is at the heart of every idea from Automobili Lamborghini. Whether it is aerospace-inspired design or technologies applied to the naturally aspirated V12 engine or carbon-fiber structure, going beyond accepted limits is part of our philosophy. The Aventador advances every concept of performance, immediately establishing itself as the benchmark for the super sports car sector. Giving a glimpse of the future today, it comes from a family of supercars already considered legendary.</p></div>
        <div class="div1">
        <h2 class="naslov_3">DESIGN</h2>
        <p class="tekst">Each and every detail of the Aventador bears the hallmarks of the House of the Raging Bull. It is a true masterpiece of design that expresses dynamism and power, with the carbon-fiber monocoque the jewel in its crown. The interior combines high-level technology and luxury equipment, crafted by skilled artisans using </p></div>

        <div class="div1">
          <h2 class="naslov_3">Lamborghini Aventador SVJ</h2>
          <a href="https://www.lamborghini.com/en-en/models/aventador/aventador-svj"><img src={Aventador} class="slika2"></img></a>
        </div>

        <div class="div1">
          <h2 class="naslov_3">Lamborghini Aventador SVJ Roadster</h2>
          <a href="https://www.lamborghini.com/en-en/models/aventador/aventador-svj-roadster"><img src={Roadster} class="slika2"></img></a>
        </div>

        <div class="div1">
          <h2 class="naslov_3">Lamborghini Aventador S</h2>
          <a href="https://www.lamborghini.com/en-en/models/aventador/aventador-s"><img src={S} class="slika2"></img></a>
        </div>

        <div class="div1">
          <h2 class="naslov_3">Lamborghini Aventador S Roadster</h2>
          <a href="https://www.lamborghini.com/en-en/models/aventador/aventador-s-roadster"><img src={S_Roadster} class="slika2"></img></a>
        </div>

<Link to ='/treci'class="link">SLJEDEĆA</Link>
    </div>
  );
}

export default Drugi;