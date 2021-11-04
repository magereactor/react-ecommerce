import React from "react";
import {Link} from "react-router-dom";

import Rating from "./Rating";

const Product = ({product}) => {
    return (
        <div className="card my-3 p-3 rounded product-card" >
            <Link to={`/products/${product._id}`}>
                <img src={product.image} alt="" className="card-img-top"/>
            </Link>

            <div className="card-body">
                <Link to={`/products/${product._id}`}>
                    <strong className="card-title">{product.name}</strong>
                </Link>

                <div className="card-text">
                    <div className="my-3">
                        <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                    </div>
                </div>

                <h3 className="card-text">${product.price}</h3>
            </div>
        </div>
    )
}

export default Product