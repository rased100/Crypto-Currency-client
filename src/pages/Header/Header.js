import React from 'react';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import Navigation from '../Navigation/Navigation';
import TopBar from '../TopBar/TopBar';

const Header = () => {
    return (
        <div>
            <TopBar></TopBar>
            <Navigation></Navigation>
            <HeaderComponent></HeaderComponent>
        </div>
    );
};

export default Header;