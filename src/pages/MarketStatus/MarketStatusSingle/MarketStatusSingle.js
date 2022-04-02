import React from 'react';

const MarketStatusSingle = (props) => {
    const { name } = props.product;
    const { percent_change_24h } = props.product.quote.USD;
    const percent_change_24hOf = percent_change_24h.toFixed(2);
    let upDown = "";
    if (percent_change_24hOf > 0) {
        upDown = "up"
    } else {
        upDown = "down"
    }

    return (

        <div className='d-flex justify-content-center'>
            <div className='marketContainer'>
                <h2>In the past 24 hours <span className='mdColor'>{name} is {upDown}</span> <span className='pColor'>{percent_change_24hOf} %</span></h2>
            </div>
        </div>

    );
};

export default MarketStatusSingle;