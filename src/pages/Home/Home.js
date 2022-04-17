import React from 'react';
import AllAssets from '../AllAssets/AllAssets';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import MarketStatus from '../MarketStatus/MarketStatus';
import Register from '../Register/Register';
import Topgainer from '../Topgainer/Topgainer';

const Home = () => {
    return (
        <div>
            <HeaderComponent></HeaderComponent>
            <MarketStatus></MarketStatus>
            <Topgainer></Topgainer>
            <AllAssets></AllAssets>
            <Register></Register>
            <Footer></Footer>
        </div>
    );
};

export default Home;