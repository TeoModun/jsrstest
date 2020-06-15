import React, { Component } from 'react';
import {Link} from "react-router-dom";



export class Peti extends Component{
    state={
    model:'',
    boja:'',
    unutrasnjost:'',
  }
  onSubmit= e =>{e.preventDefault(); console.log("Zahtjev je zaprimljen",this.state.ime);}
  render()
    {
        return(
            <div  class="div1">
            <h2 class="naslov_3">Kreiraj svoj auto</h2>
            <form onSubmit>
            <p class="tekst">Odabrani model je {this.state.model}</p>
            <input placeholder='Model' value={this.state.model} onChange={e=>this.setState({model: e.target.value})}/>
            <br></br>
            <br></br>
            <p class="tekst">Odabrana boja je {this.state.boja}</p>
            <input placeholder='Boja' value={this.state.boja} onChange={e=>this.setState({boja: e.target.value})}/>
            <br></br>
            <br></br>
            <p class="tekst">Odabrana unutrašnjost je {this.state.unutrasnjost}</p>
            <input placeholder='Unutrasnjost' value={this.state.unutrasnjost} onChange={e=>this.setState({unutrasnjost: e.target.value})}/>
            <br></br>
            <br></br>
            <button onClick={e=>this.onsubmit(e)}>Potvrdi</button>
            </form>

            <a href="https://configurator.lamborghini.com/configurator/?lang=ita&country=it"><p id="tekst">Kreiraj auto po svom ukusu</p></a>

            <Link to ='/'class="link">Početna</Link>
            </div>
        )
    }
  }

export default Peti;