import React from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom";

import Header from './components/Header'
import Footer from './components/Footer'

import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from './screens/CartScreen';

const App = () => {
  return (
    <Router>
      <Header/>
        <main className="container">
            <Route path="/" component={HomeScreen} exact/>
            <Route path={`/products/:id`} component={ProductScreen}/>
            <Route path={`/cart/:id?`} component={CartScreen}/>
        </main>
      <Footer/>
    </Router>
  )
}

export default App
