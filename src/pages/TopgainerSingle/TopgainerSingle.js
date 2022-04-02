import React from 'react';

const TopgainerSingle = (props) => {
    const { name, symbol, cmc_rank } = props.product;
    const { price, percent_change_24h } = props.product.quote.USD;
    const priceOf = price.toFixed(3);
    const percent_change_24hOf = percent_change_24h.toFixed(2);
    console.log('pp', props.product)
    console.log('pr', priceOf)
    return (
        <div className="col">
            <div className="card h-100 cBody">
                <div className="card-body ">
                    <h5 className="cText">{name}</h5>
                    <div className='d-flex justify-content-between'>
                        <div>
                            {/* <p className='cTitle'>Gods Unchained</p> */}
                            <p className='cTitle'>{symbol}</p>
                            <p className='dolar'>$ {priceOf}</p>
                        </div>
                        <div>
                            <p className='percent'>{percent_change_24hOf} %</p>
                            <p className='percent'>Rank: {cmc_rank}</p>
                            {/* <p className='cLogo'>symbol : {symbol}</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopgainerSingle;