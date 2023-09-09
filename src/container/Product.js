import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate,useParams } from "react-router-dom";
//import ProductCard from '../component/ProductCard'
import { productList } from "../data/productList";
import { addItem } from "../redux/reducer/cart";

export default function Product() {
  const params = useParams();
  const props = productList.find((element) => element.id === parseInt(params.id));
  const navigate = useNavigate()

  const list = useSelector((state) => state.cart.list);
  const element = list.find((item) => item.id === props.id);
  const [alert, setAlert] = useState(false);

  // Redux
  const dispatch = useDispatch();
  // end of Redux
 // const handleAddToCart = () => {
   // dispatch(addItem({ ...props, count: 1 }));
  ///};

  const AddToCart = () => {
    setAlert(true);
    setTimeout(()=> setAlert(false),3000)
    dispatch(addItem(props));
  };

  return (
    <>
     
      <div className="card m-2">
        {alert && <span className="alert alert-success">Item added to cart</span>}
        <div className="mt-2">
          <img
            src={props.thumbnail}
            alt={props.title}
            height={350}
            width={400}
            className="border-radius-9"
          />
        </div>
        <div className="mt-3 card-body">
          <h5 className="card-title">{props.title}</h5>
          <h6 className="card-text mt-2">Price :{`$${props.price}`} </h6>
          <h6 className="card-text mt-2">Discount : {props.discountPercentage}%</h6>
          <h6 className="card-t mt-2">Rating : {props.rating}</h6>

          <div className=" mt-4">
            {props.stock > 0 ? (
              <>
                <button className="btn btn-success text-center " 
                onClick={()=>navigate(`/checkout/${props.id}`)}>
                  Buy Now
                </button>

                { element?.count > 0?  <button className="ms-3 btn btn-outline-warning" onClick={()=>navigate('/cart')}
                >
                  Go To Cart
                </button>:
                <button className="ms-3 btn btn-success" onClick={AddToCart}
                >
                Add To Cart
              </button>
             }
              </>
            ) : (
              <button className="btn btn-outline-danger mx-auto">
                Out of Stack
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
