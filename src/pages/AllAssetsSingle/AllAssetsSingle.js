import React from 'react';
import { Button } from 'react-bootstrap';

const AllAssetsSingle = (props) => {
    const { name, rank, symbol } = props.product;
    return (
        <>
            <tr className='li2'>
                <td>{name}</td>
                <td>$56917.14</td>
                <td>-16.27%</td>
                <td>(icon)</td>
                <td>$6.27</td>
                <td><Button className='liBtn' >Buy</Button></td>
            </tr></>
    );
};

export default AllAssetsSingle;