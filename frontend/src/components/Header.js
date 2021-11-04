import React from 'react'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <h3>React-Ecommerce</h3>
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mainNav"
                        aria-controls="false"
                        aria-label="Toggle Navigation">
                        <span className="navbar-toggler-icon">&nbsp;</span>
                    </button>

                    <div className="collapse navbar-collapse" id="mainNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/catalog">Catalog</Link>
                            </li>
                        </ul>

                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/cart">
                                    <i className="fas fa-shopping-cart"/>&nbsp;Cart&nbsp;(0)
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/signin">
                                    <i className="fas fa-user"/>&nbsp;My Account
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
