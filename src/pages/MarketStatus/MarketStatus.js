import React from 'react';
import './MarketStatus.css';

const MarketStatus = () => {
    return (
        <div className='d-flex justify-content-center'>
            <div className='marketContainer'>
                <h2>In the past 24 hours <span className='mdColor'>Market is down</span> <span className='pColor'>1.14%</span></h2>
            </div>
        </div>
    );
};

export default MarketStatus;