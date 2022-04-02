import React from 'react';
import { useSelector } from 'react-redux';
import './MarketStatus.css';
import MarketStatusSingle from './MarketStatusSingle/MarketStatusSingle';

const MarketStatus = () => {
    const products = useSelector((state) => state.allProducts.products);
    return (
        <div>
            {
                products.slice(0, 1).map(product => <MarketStatusSingle key={product.id} product={product}></MarketStatusSingle>)
            }
        </div>
    );
};

export default MarketStatus;


