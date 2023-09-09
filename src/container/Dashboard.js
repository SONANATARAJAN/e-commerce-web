import React from "react";
import { productList } from '../data/productList';
import ProductCard from '../component/ProductCard';

export default function Dashboard(){
    return(
        <div className="d-flex flex-wrap justify-content-center p-4">
            {productList.map((product)=>(<ProductCard {...product} key={product.id} />))}
        </div>
    )
}