import React from 'react';
import './Footer.css';
import cryptupLogo from '../../data/image/footerLogo.png';

const Footer = () => {
    return (
        <div className='fContainer'>
            <div className='fTopSection'>
                <div className='footerIcon'>
                    <img src={cryptupLogo} alt="" />
                </div>
                <div className='d-flex justify-content-around aboutUs'>
                    <div className='aboutText'>
                        <h4>About Us</h4>
                        <h4>Portfolio</h4>
                        <h4>Contact Us</h4>
                    </div>
                    <div className='buysellText'>
                        <h4>Buy & sell</h4>
                        <h4>Wallet</h4>
                        <h4>Card</h4>
                    </div>
                </div>
                <div className='footerContuctUs'>
                    <h1>Contact Us</h1>
                </div>
            </div>
            <div className='fBottomSection'>
                <div className='d-flex justify-content-evenly justify-content-center fEnd'>
                    <h4>© Jessan  - All Rights Reserved</h4>
                    <h4> About | Privacy Policy | Term & Service</h4>
                    <h4><span>Web Design </span>JK</h4>
                </div>
            </div>
        </div>
    );
};

export default Footer;