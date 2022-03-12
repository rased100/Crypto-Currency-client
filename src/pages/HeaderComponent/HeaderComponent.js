import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import './HeaderComponent.css';

const HeaderComponent = () => {
    return (
        <div className='headerComBg'>
            <div className='headerComponent'>
                <div className='d-flex align-items-center justify-content-between'>
                    <div>
                        <h2>Pricing</h2>
                    </div>
                    <div>
                        {/* <InputGroup className="inputCoin">
                            <FormControl
                                placeholder="Search Coin"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Text className='inputBtnGroup' id="basic-addon2"><button className='inputBtn'><span className='textBtn'>Search</span></button></InputGroup.Text>
                        </InputGroup> */}

                        <div className='d-flex'>
                            <InputGroup className="inputCoin">
                                <FormControl
                                    placeholder="Search Coin"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />

                            </InputGroup>
                            <Button className='inputBtn' variant="outline-secondary" id="button-addon2">
                                Search
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default HeaderComponent;