import React from 'react';
import { Button } from 'react-bootstrap';

const AllAssetsSingle = (props) => {
    const { name, rank, symbol } = props.product;
    const { price, percent_change_24h, market_cap_dominance, volume_change_24h } = props.product.quote.USD;
    const priceOf = price.toFixed(2);
    const percent_change_24hOf = percent_change_24h.toFixed(2);
    const market_cap_dominanceOf = market_cap_dominance.toFixed(2);
    const volume_change_24hOf = volume_change_24h.toFixed(2);
    return (
        <>
            <tr className='li2'>
                <td>{name}</td>
                <td>$ {priceOf}</td>
                <td>{percent_change_24hOf} %</td>
                <td>{volume_change_24hOf}</td>
                <td>$ {market_cap_dominanceOf}</td>
                <td><Button className='liBtn' >Buy</Button></td>
            </tr></>
    );
};

export default AllAssetsSingle;