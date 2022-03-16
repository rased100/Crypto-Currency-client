import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Topgainer.css';
import { setProducts } from '../redux/actions/productsActions'
import TopgainerSingle from '../TopgainerSingle/TopgainerSingle';

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
        dispatch(setProducts(response.data.data));
    };

    useEffect(() => {
        fatchProducts();
    }, []);
    console.log('products:', products)

    return (
        <div className='d-flex justify-content-center'>
            <div className='topgainerContainer'>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        products.slice(0, 6).map(product => <TopgainerSingle key={product.id} product={product}></TopgainerSingle>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Topgainer;