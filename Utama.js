import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Aboutme from './Pages/Aboutme';
import Karya from './Pages/Karya';
import Kontak from './Pages/Kontak';
import Gallery from './Pages/Gallery';
import Cart from './Pages/Cart';

class Utama extends React.Component {
    render() {
        return (
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/Aboutme" Component={Aboutme} />
                <Route path="/Karya" Component={Karya} />
                <Route path="/Kontak" Component={Kontak} />
                <Route path="/Gallery" Component={Gallery} />
                <Route path="/Cart" Component={Cart}/>
            </Routes>
        )
    }
}

export default Utama;
