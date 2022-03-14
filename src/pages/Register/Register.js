import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import './Register.css';

const Register = () => {
    return (
        <div className='d-flex justify-content-center regBg'>
            <div className='regContainer d-flex justify-content-center align-items-center'>
                <div>
                    <h4>Register and start trading</h4>
                    <p>Start trading in just 2 minutes</p>
                    <div className='regStyle'>
                        <InputGroup className="inputReg">
                            <FormControl
                                placeholder="Search Coin"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                        </InputGroup>
                        <Button className='regBtn' variant="outline-secondary" id="button-addon2">
                            Search
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;