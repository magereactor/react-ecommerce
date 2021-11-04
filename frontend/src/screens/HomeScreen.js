import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"

import Product from "../components/Product";
import {listProducts} from "../actions/productActions"
import Message from "../components/Message"
import Loader from "../components/Loader"


const HomeScreen = () => {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const {isLoading, error, products} = productList

    useEffect(()=> {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <>
            <h1>Latest Products</h1>
            { isLoading ? <Loader/> : error ? <Message color="danger">{error}</Message> : (
                <div className="row">
                {
                    products.map( product => (
                        <div key={product._id} className="col-12 col-md-6 col-lg-4 col-xl-3">
                            <Product product={product}/>
                        </div>
                    )
                )}
            </div>
            )}
            
        </>
    )
}

export default HomeScreen