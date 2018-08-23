import React, { Component } from 'react';
import logo from '../assets/Logo.png';
import '../App.css';

class Header extends Component {
    render(){
        return(
            <div className='header'>
                <a href='/' className='logo'><img src={logo} className='textLogo'/></a>
                <input className='menu-btn' type='checkbox' id='menu-btn'/>
                <label className='menu-icon' htmlFor='menu-btn'><span className='navicon'></span></label>
                <nav className='menu'>
                    <a className='links slide-center-out' href="./about.html">ABOUT</a>
                    <a className='links slide-center-out'>EDITORIAL</a>
                    <a className='links slide-center-out'>BRIDAL</a>
                    <a className='links slide-center-out'>LIFESTYLE</a>
                    <a className='links slide-center-out'>SWIMWEAR</a>
                    <a className='links slide-center-out'>COMMERIACL</a>
                    <a className='links slide-center-out'>CONTACT</a>
                </nav>
            </div>
        );
    }
}

export default Header;