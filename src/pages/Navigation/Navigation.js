import React from 'react';
import './Navigation.css';
import cryptupLogo from '../../data/image/navLogo.png';
import { Button, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <>

            <div className=' '>
                <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                    <div className="container-fluid navContainer">
                        <img className='logoImage' src={cryptupLogo} alt="" />
                        <h2 className='textLogo'>Cryptup</h2>
                        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div>
                                <div className="navbar-nav d-flex navItems">
                                    <Link className='navItems' to="/">Home</Link>
                                    <Link className='navItems' to="/prices">Prices</Link>
                                    <Link className='navItems' to="/">Portfolio</Link>
                                    <Link className='navItems' to="/">Company</Link>
                                </div>
                            </div>
                            <div className="navbar-nav ms-auto">
                                <Button className='nav-item sBtn'>Sign In</Button>
                                <Button className='nav-item dBtn'>Download</Button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navigation;