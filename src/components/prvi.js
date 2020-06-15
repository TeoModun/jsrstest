import React from 'react';
import slika from '../lamborghini-logo.png';
import {Link} from "react-router-dom";



  function Prvi(){ 
    return (
    <div className="jedan">

    <a href="https://www.lamborghini.com/en-en"><img src={slika} id="slika1"></img></a>
    <div class="div1">
    <h2 class="naslov_3">O Lamborghiniu</h2>

    <p class="tekst">Automobili Lamborghini S.p.A. is an Italian brand and manufacturer of luxury sports cars and SUVs based in Sant'Agata Bolognese. The company is owned by the Volkswagen Group through its subsidiary Audi.

Ferruccio Lamborghini, an Italian manufacturing magnate, founded Automobili Ferruccio Lamborghini S.p.A. in 1963 to compete with established marques, including Ferrari. The company was noted for using a rear mid-engine, rear-wheel drive. Lamborghini grew rapidly during its first decade, but sales plunged in the wake of the 1973 worldwide financial downturn and the oil crisis. The firm's ownership changed three times after 1973, including a bankruptcy in 1978. American Chrysler Corporation took control of Lamborghini in 1987 and sold it to Malaysian investment group Mycom Setdco and Indonesian group V'Power Corporation in 1994. In 1998, Mycom Setdco and V'Power sold Lamborghini to the Volkswagen Group where it was placed under the control of the group's Audi division.

New products and model lines were introduced to the brand's portfolio and brought to the market and saw an increased productivity for the brand. In the late 2000s, during the worldwide financial crisis and the subsequent economic crisis, Lamborghini's sales saw a drop of nearly 50 percent.

Lamborghini currently produces the V12-powered Aventador and the V10-powered Huracán, along with the Urus SUV powered by a twin-turbo V8 engine. In addition, the company produces V12 engines for offshore powerboat racing. Lamborghini Trattori, founded in 1948 by Ferruccio Lamborghini, is headquartered in Pieve di Cento, Italy and continues to produce tractors. </p></div>
<div class="div1">
<h2 class="naslov_3">Povijest</h2>
<p class="tekst">Manufacturing magnate Italian Ferruccio Lamborghini founded the company in 1963 with the objective of producing a refined grand touring car to compete with offerings from established marques such as Ferrari. The company's first models, such as the 350 GT, were released in the mid 1960s. Lamborghini was noted for the 1966 Miura sports coupé, which used a rear mid-engine, rear wheel drive layout.

Lamborghini grew rapidly during its first ten years, but sales fell in the wake of the 1973 worldwide financial downturn and the oil crisis. Ferruccio Lamborghini sold the company to Georges-Henri Rossetti and René Leimer and retired in 1974. The company went bankrupt in 1978, and was placed in the receivership of brothers Jean-Claude and Patrick Mimran in 1980. The Mimrans purchased the company out of receivership by 1984 and invested heavily in its expansion. Under the Mimrans' management, Lamborghini's model line was expanded from the Countach to include the Jalpa sports car and the LM002 high performance off-road vehicle.

The Mimrans sold Lamborghini to the Chrysler Corporation in 1987. After replacing the Countach with the Diablo and discontinuing the Jalpa and the LM002, Chrysler sold Lamborghini to Malaysian investment group Mycom Setdco and Indonesian group V'Power Corporation in 1994. In 1998, Mycom Setdco and V'Power sold Lamborghini to the Volkswagen Group where it was placed under the control of the group's Audi division. New products and model lines were introduced to the brand's portfolio and brought to the market and saw an increased productivity for the brand Lamborghini. In the late 2000s, during the worldwide financial crisis and the subsequent economic crisis, Lamborghini's sales saw a drop of nearly 50 percent. </p></div>


    <Link to ='/drugi'class="link">SLJEDEĆA</Link>
    
    </div>
  );
  }

export default Prvi;
