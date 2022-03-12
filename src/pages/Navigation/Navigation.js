import React from 'react';
import './Navigation.css';
import cryptupLogo from '../../data/image/logo-removebg-preview.png';

const Navigation = () => {
    return (
        <>
            <div className='d-flex align-items-center justify-content-between navContainer'>
                <div className='d-flex align-items-center logo'>
                    <img className='logoImage' src={cryptupLogo} alt="" />
                    <h2 className='textLogo'>Cryptup</h2>
                </div>
                <div>
                    <ul className='d-flex navItems'>
                        <li className='navItemHome'>Home</li>
                        <li className='navItem'>Prices</li>
                        <li className='navItem'>Portfolio</li>
                        <li className='navItem'>Company</li>
                    </ul>
                </div>
                <div>
                    <button className='sBtn'><span className='textBtn'>Sign In</span></button>
                    <button className='dBtn'><span className='textBtn'>Download</span></button>
                </div>
            </div>
        </>
    );
};

export default Navigation;