import React, { Component } from "react";
import './Main.css';
import Media from "./Image/Media";
import {Link} from 'react-router-dom'

class Home extends Component{
  render(){
  return (
    <div>
    <div>
    <h1 style={{textAlign: "center"}}>Hallo</h1>
    <br></br>

    <div className='head-text2'>
       <div className='text'>
       <h3>Selamat Datang Di Website</h3>
          HI, i'am Neira from Indonesia
           i'm also a front-end developer and general doodler with a keen eye for
            creating engaging UI, bringing products to life.
        </div>
         <Media image = "Home.jpg"></Media>
          </div>

          
    <br></br>
    <Link to="/Karya">
        <button className="button">Karya</button>
      </Link>
    <Link to="/Kontak">
        <button className="button">Kontak</button>
      </Link>

      </div>
    </div>
  )
}
}
export default Home;