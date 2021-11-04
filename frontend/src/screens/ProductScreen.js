import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import {listProductDetails} from "../actions/productActions"
import Message from "../components/Message"
import Loader from "../components/Loader"

import Rating from "../components/Rating";

const ProductScreen = ({history, match}) => {
    const [qty, setQty] = useState(1)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(listProductDetails(match.params.id))
    }, [dispatch, match])

    const productDetails = useSelector(state => state.productDetails)
    const {isLoading, error, product} = productDetails

    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }

    return (
        <>
            <Link className="btn btn-sm btn-light my-3" to="/">Go Back</Link>
            {
                isLoading ? <Loader/> : error ? <Message color="danger">{error}</Message> : (
                    <div className="row">
                        <div className="col-md-6">
                            <img className="img-fluid" src={product.image} alt={product.name}/>
                        </div>
                        <div className="col-md-3">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <h3>{product.name}</h3>
                                </li>

                                <li className="list-group-item">
                                    <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                                </li>

                                <li className="list-group-item">
                                    Price: ${product.price}
                                </li>

                                <li className="list-group-item">
                                    Description: {product.description}
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-3">
                            <div className="card">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <div className="row">
                                            <div className="col">
                                                Price
                                            </div>
                                            <div className="col">
                                                <strong>${product.price}</strong>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="list-group-item">
                                        <div className="row">
                                            <div className="col">
                                                Status
                                            </div>
                                            <div className="col">
                                                {product.countInStock > 0 ? 'In Stock': 'Out of Stock' }
                                            </div>
                                        </div>
                                    </li>

                                    {product.countInStock > 0 && (
                                        <li className="list-group-item">
                                            <div className="row">
                                                <div className="col">
                                                    Qty
                                                </div>
                                                <div className="col">
                                                    <select value={qty} className="form-select" onChange={ e => setQty(e.target.value) }>
                                                        {
                                                            [...Array(product.countInStock).keys()].map( x => {
                                                                return (
                                                                    <option key={x+1} value={x+1}>{x+1}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                        </li>
                                    )}

                                    <li className="list-group-item">
                                        <div className="d-grid">
                                            <button className="btn-dark btn btn-lg" type="button"
                                                    onClick={addToCartHandler}
                                                    disabled={product.countInStock === 0}>Add To Cart</button>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default ProductScreen