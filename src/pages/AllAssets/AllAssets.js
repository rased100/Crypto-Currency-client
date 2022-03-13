import React from 'react';
import { Button, Dropdown, DropdownButton, Table } from 'react-bootstrap';
import './AllAssets.css';

const AllAssets = () => {
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
                                <tr className='li2'>
                                    <td>BTC Bitcoin</td>
                                    <td>$56917.14</td>
                                    <td>-16.27%</td>
                                    <td>(icon)</td>
                                    <td>$6.27</td>
                                    <td><Button className='liBtn' >Buy</Button></td>
                                </tr>
                                <tr className='li3'>
                                    <td>ETH Ethereum</td>
                                    <td>$680,175.06</td>
                                    <td>-12.27%</td>
                                    <td>(icon)</td>
                                    <td>$2.27</td>
                                    <td><Button className='liBtn' >Buy</Button></td>
                                </tr>
                                <tr className='li2'>
                                    <td>LTC Litecoin</td>
                                    <td>$680,175.06</td>
                                    <td>-2.27%</td>
                                    <td>(icon)</td>
                                    <td>$1.27</td>
                                    <td><Button className='liBtn' >Buy</Button></td>
                                </tr>
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