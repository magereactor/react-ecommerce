import React, {useEffect} from 'react'
import {Link} from "react-router-dom"

import {useDispatch, useSelector} from "react-redux"
import Message from "../components/Message"
import Loader from "../components/Loader"
import {addToCart} from "../actions/cartActions"

const CartScreen = ({match, location, history}) => {
    const productId = match.params.id
    const qty = location.search ? Number(location.search.split("=")[1]) : 1
    const dispatch = useDispatch()
    const cart = useSelector( state => state.cart)
    const {cartItems} = cart

    useEffect( () => {
        if(productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])

    return (
        <div className="row">
            <div className="col-md-8">
                <h1 className="py-3">Shopping Cart</h1>
                {cartItems.length === 0 ? <Message color="light">Cart is Empty <Link to="/">Continue Shopping</Link></Message>: (
                    <ul className="list-group list-group-flush">
                        { cartItems.map( cartItem => (
                            <li key={cartItem.product} className="list-group-item">
                                <div className="row">
                                    <div className="col-md-2">
                                        <img src={cartItem.image} alt={cartItem.name} className="img-fluid rounded"/>
                                    </div>
                                    <div className="col-md-2">
                                        <Link to={`/product/${cartItem.product}`}>
                                            {cartItem.name}
                                        </Link>
                                    </div>
                                    <div className="col-md-2">
                                        ${cartItem.price}
                                    </div>

                                    <div className="col-md-2">
                                        <select value={cartItem.qty} className="form-select" 
                                            onChange={ e => dispatch(addToCart(cartItem.product, Number(e.target.value))) }>
                                            {
                                                [...Array(cartItem.countInStock).keys()].map( x => {
                                                    return (
                                                        <option key={x+1} value={x+1}>{x+1}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>

                                    <div className="col-md-2">
                                        <button type="button" className="btn btn-light">
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className="col-md-4"></div>
        </div>
    )
}

export default CartScreen
