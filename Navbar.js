import {Component} from 'react';
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/Aboutme">Aboutme</Link>
        <Link to="/Karya">Karya</Link>
        <Link to="/Kontak">Kontak</Link>
        <Link to="/Gallery">Gallery</Link>
      </div>
    )
  }
}