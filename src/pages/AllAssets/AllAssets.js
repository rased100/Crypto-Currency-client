import React from 'react';
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';
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
                <div>
                    table
                </div>
            </div>
        </div>
    );
};

export default AllAssets;