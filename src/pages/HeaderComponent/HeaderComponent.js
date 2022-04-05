import React from 'react';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import './HeaderComponent.css';

const HeaderComponent = () => {
    return (
        <div className='headerComBg d-flex justify-content-center'>
            <div className='headerComponent'>
                <div className='d-flex align-items-center justify-content-between'>
                    <div className='headerMargin'>
                        <h2>Pricing</h2>
                    </div>
                    <div className='headerMargin'>
                        <div className='inputStyle'>
                            <InputGroup className="inputCoin">
                                <FormControl
                                    placeholder="Search Coin"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                            </InputGroup>
                            <Button className=''>
                                Search
                            </Button>
                        </div>
                    </div>
                </div>

                {/* buy BTC */}

                <div className='btcBg d-flex justify-content-between'>
                    <div className="inputUSD text-start">
                        <Form.Label className='text-start' htmlFor="basic-url">For</Form.Label>
                        <InputGroup className="mb-3">
                            <input className='input1' placeholder=' 500' type="text" />
                            <Button className='input1btn'> USD</Button>
                        </InputGroup>

                    </div>
                    <div className="inputUSD text-start">
                        <Form.Label className='text-start' htmlFor="basic-url">You Get</Form.Label>
                        <InputGroup className="mb-3">
                            <input className='input1' placeholder=' 0.000869675' type="text" />
                            <Button className='input1btn'> BTC</Button>
                        </InputGroup>

                    </div>
                    <div>
                        <Button className='usdBtcButton'>
                            Buy BTC
                        </Button>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default HeaderComponent;