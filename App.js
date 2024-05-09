
import "./App.css";
import  Navbar from "./Components/Navbar";
import Utama from "./Utama";
import { Component } from "react";

class App extends Component{
  render(){
    return(
      <>
      <Navbar/>
      <Utama/>
      </>
    );
  }
 
}

export default App;


// import React from 'react';
// import Utama from "./Utama";
// import {Link} from 'react-router-dom'

// class App extends React.Component {
//   render(){
//     return( 
//     <nav>
//     <div><hr/>
//       <Link style={{ textDecoration: 'none', color: '#3C3633'}} to='/'>Home</Link> 
//       <Link style={{ textDecoration: 'none', color: '#3C3633'}} to='/TentangSaya'>About Me</Link>
//       <Link style={{ textDecoration: 'none', color: '#3C3633'}} to='/Kontak' > Contact</Link>
//     </div>
//     <p><Utama /></p>
//     </nav>
//     )
//   }
// }

// export default App;


// import React, {Component} from 'react';
// import './App.css'; 
// // import Alert from './Components/Alert';
// import Media from './Components/Media'

// class App extends Component {
//   render(){
//     return (
//       <div className="App container">
//       <div className='alert alert-info'>
//         <h3 className='text-danger'>Ini Project Pertama React Js</h3>
//         <p className='subjudul'>Belajar React Js itu mudah</p>
//         <button className='mr-1 btn btn-success'>Success</button>
//         <button className='btn btn-info'>Iya</button>
//         </div>
//       // </div>
//       <div className='App container col-sm-6'>
//         <Alert type="danger"> Danger </Alert>
//         <Alert type="success"> Success </Alert>
//         <Alert type="warning"> warning </Alert>
//       </div>


//       <header>
//         <div className='title'>PANCASILA</div>
//         <div className='head-text'>
//         <div className='text-on-image'>
//           <strong>Sila Pertama</strong>
//           <br></br>
//           ketuhanan Yang Maha Esa
//         </div>
//         <Media image = "Sila 1.jpg"></Media>
//         </div>
        
//         <div className='head-text'>
//         <div className='text-on-image'>
//           <strong>Sila Kedua</strong>
//           <br></br>
//           Kemanusiaan Yang Adil Dan Beradap
//         </div>
//         <Media image = "Sila 2.jpg"></Media>
//         </div>

//         <div className='head-text1'>
//         <div className='textkanan'>
//           <strong>Sila Ketiga</strong>
//           <br></br>
//           Persatuan Indonesia
//         </div>
//         <Media image = "Sila 3.png"></Media>
//         </div>

//         <div className='head-text1'>
//         <div className='textkanan'>
//           <strong>Sila Keempat</strong>
//           <br></br>
//           Kerakyatan Yang Dipimpin oleh Hikmat Kebijaksanaan Dalam Permusyawaratan Perwakilan
//         </div>
//         <Media image = "Sila 4.png"></Media>
//         </div>

//         <div className='head-text'>
//         <div className='text-on-image'>
//           <strong>Sila Kelima</strong>
//           <br></br>
//           Keadilan Sosial Bagi Seluruh Rakyat Indonesia
//         </div>
//         <Media image = "Sila 5.png"></Media>
//         </div>

        
//         <hr></hr>

//         <div className="App Container">
//           <button className="mr-1 btn btn-danger">Button Merah</button>
//           <br></br>
//           <br></br>
//           <button className="mr-2 btn btn-warming">Button Kuning</button>
//           <br></br>
//           <br></br>
//           <button className="mr-3 btn btn-success">Button Hijau</button>
//           <br></br>
//           <br></br>
//           <button className="mr-4 btn btn-light">Button Putih</button>
//           <br></br>
//           <br></br>
//           <button className="mr-5 btn btn-dark">Button Hitam</button>
//           <br></br>
//           <br></br>
//         </div>


//         <hr></hr>
//         <hr></hr>

//           <div className="kotak">
//           <div className="form-daftar">
//             <p>Form Pendaftaran Osis</p>
//           </div>
//         </div>

//         <br></br>


//         <div className='jarak'>
//           <input type="text" id="Nama" className="form-input" placeholder='Jenis Kelamin' >
//             </input>
//            </div>

//            <div class='jarak'>
//             <select name="gender" id="jenis-kelamin" className='form-input' placeholder='Jenis Kelamin'>
//               <option value="">Jenis Kelamin</option>
//               <option value="Perempuan">Perempuan</option>
//               <option value="Laki-laki">Laki-laki</option>
//             </select>
//            </div>

        
//         <div className='jarak'>
//           <input type="text" id="alamat" className="form-input" placeholder="Alamat">
//          </input>
//          <div class='jarak'>
//           <button type="submit" class="button" className='bcolor'>Submit</button>
//          </div>
//         </div>
//       </header>
//     );
//   }
// }
// export default App; 
