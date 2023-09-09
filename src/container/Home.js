import React from "react";
import { Route,Routes } from "react-router-dom";
import Header  from '../component/Header.js';
import Dashboard from "./Dashboard.js";
import Product from "./Product.js";
import Cart from "./Cart.js"
import Checkout from "./Checkout.js";
import Success from "./Success.js";


export default function Home(){
    return(
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Dashboard/>} />
                <Route path='/product/:id' element={<Product />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout/" >
                    <Route path='' element={<Checkout />} />
                    <Route path=":id" element={<Checkout />} />
                </Route>
                <Route path="/success" element={<Success />} />
                
                </Routes>
        </div>

    )
}
