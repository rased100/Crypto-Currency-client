import React from 'react';
import { Button, Dropdown, DropdownButton, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import AllAssetsSingle from '../AllAssetsSingle/AllAssetsSingle';
import './AllAssets.css';

const AllAssets = () => {
    const products = useSelector((state) => state.allProducts.products);
    // console.log('allasset products', products)
    return (
        <div className='d-flex justify-content-center'>
            <div className='assetsContainer'>
                <div className='buttons d-flex justify-content-between'>
                    <div>
                        <Button className='assetBtn1' >All assets</Button>
                        <Button className='assetBtn' variant="primary">Tradable</Button>
                        <Button className='assetBtn' variant="primary">Gainers</Button>
                        <Button className='assetBtn' variant="primary">Losers</Button>
                    </div>
                    <div>
                        <DropdownButton
                            variant="light"
                            title="1 Hour"
                            id="input-group-dropdown-1"
                        >
                            <Dropdown.Item href="#">12 Hours</Dropdown.Item>
                            <Dropdown.Item href="#">24 Hours</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#">1 Day</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </div>
                <div className='d-flex justify-content-center'>
                    <div className='dataList'>
                        <Table className='tBody' responsive="sm">
                            <tbody>
                                <tr className='li1'>
                                    <td>NAME</td>
                                    <td>PRICE</td>
                                    <td>CHANGE</td>
                                    <td>PRICE CHART</td>
                                    <td>MARKET CAP</td>
                                    <td>TRADE</td>
                                </tr>

                                {
                                    products.slice(0, 3).map(product => <AllAssetsSingle key={product.id} product={product}></AllAssetsSingle>)
                                }

                            </tbody>
                        </Table>
                    </div>
                </div>




                {/* <div className='dataList'>
                    <ul className='d-flex justify-content-around li1'>
                        <li>NAME</li>
                        <li>PRICE</li>
                        <li>CHANGE</li>
                        <li>PRICE CHART</li>
                        <li>MARKET CAP</li>
                        <li>TRADE</li>
                    </ul>
                    <ul className='d-flex justify-content-around li2'>
                        <li className='li1stText'>BTC Bitcoin</li>
                        <li className='li2ndText'>$56917.14</li>
                        <li className='li2ndText'>-16.27%</li>
                        <li>(icon)</li>
                        <li className='li2ndText'>$6.27</li>
                        <li><Button className='liBtn' >Buy</Button></li>
                    </ul>
                    <ul className='d-flex justify-content-around'>
                        <li className='li1stText'>BTC Bitcoin</li>
                        <li className='li2ndText'>$56917.14</li>
                        <li className='li2ndText'>-16.27%</li>
                        <li>(icon)</li>
                        <li className='li2ndText'>$6.27</li>
                        <li><Button className='liBtn' >Buy</Button></li>
                    </ul>
                    <ul className='d-flex justify-content-around'>
                        <li className='li1stText'>BTC Bitcoin</li>
                        <li className='li2ndText'>$56917.14</li>
                        <li className='li2ndText'>-16.27%</li>
                        <li>(icon)</li>
                        <li className='li2ndText'>$6.27</li>
                        <li><Button className='liBtn' >Buy</Button></li>
                    </ul>

                </div> */}
            </div>
        </div>
    );
};

export default AllAssets;