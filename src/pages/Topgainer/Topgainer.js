import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Topgainer.css';
import { setProducts } from '../redux/actions/productsActions'

const Topgainer = () => {
    const products = useSelector((state) => state.allProducts.products);
    // const { title } = products[0];
    const dispatch = useDispatch();

    const fatchProducts = async () => {
        const response = await axios
            .get("http://localhost:5000/jsonData")
            .catch((err) => {
                console.log('error', err);
            });
        dispatch(setProducts(response.data));
    };

    useEffect(() => {
        fatchProducts();
    }, []);
    console.log('products:', products)





    return (
        <div className='d-flex justify-content-center'>
            <div className='topgainerContainer'>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100 cBody">
                            <div className="card-body ">
                                <h5 className="cText">Top gainer (24h)</h5>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <p className='cTitle'>Gods Unchained</p>
                                        {/* <p className='cTitle'>{title}</p> */}
                                        <p className='dolar'>$551.22</p>
                                    </div>
                                    <div>
                                        <p className='percent'>+26.2%</p>
                                        <p className='cLogo'>logo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 cBody">
                            <div className="card-body ">
                                <h5 className="cText">Top gainer (24h)</h5>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <p className='cTitle'>Gods Unchained</p>
                                        <p className='dolar'>$551.22</p>
                                    </div>
                                    <div>
                                        <p className='percent'>+26.2%</p>
                                        <p className='cLogo'>logo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 cBody">
                            <div className="card-body ">
                                <h5 className="cText">Top gainer (24h)</h5>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <p className='cTitle'>Gods Unchained</p>
                                        <p className='dolar'>$551.22</p>
                                    </div>
                                    <div>
                                        <p className='percent'>+26.2%</p>
                                        <p className='cLogo'>logo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 cBody">
                            <div className="card-body ">
                                <h5 className="cText">Top gainer (24h)</h5>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <p className='cTitle'>Gods Unchained</p>
                                        <p className='dolar'>$551.22</p>
                                    </div>
                                    <div>
                                        <p className='percent'>+26.2%</p>
                                        <p className='cLogo'>logo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 cBody">
                            <div className="card-body ">
                                <h5 className="cText">Top gainer (24h)</h5>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <p className='cTitle'>Gods Unchained</p>
                                        <p className='dolar'>$551.22</p>
                                    </div>
                                    <div>
                                        <p className='percent'>+26.2%</p>
                                        <p className='cLogo'>logo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 cBody">
                            <div className="card-body ">
                                <h5 className="cText">Top gainer (24h)</h5>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <p className='cTitle'>Gods Unchained</p>
                                        <p className='dolar'>$551.22</p>
                                    </div>
                                    <div>
                                        <p className='percent'>+26.2%</p>
                                        <p className='cLogo'>logo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Topgainer;