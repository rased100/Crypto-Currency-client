import React from 'react';

const TopgainerSingle = (props) => {
    const { name, rank, symbol } = props.product;
    return (
        <div className="col">
            <div className="card h-100 cBody">
                <div className="card-body ">
                    <h5 className="cText">Top gainer (24h)</h5>
                    <div className='d-flex justify-content-between'>
                        <div>
                            {/* <p className='cTitle'>Gods Unchained</p> */}
                            <p className='cTitle'>{name}</p>
                            <p className='dolar'>$551.22</p>
                        </div>
                        <div>
                            {/* <p className='percent'>+26.2%</p> */}
                            <p className='percent'>Rank: {rank}</p>
                            <p className='cLogo'>symbol : {symbol}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopgainerSingle;