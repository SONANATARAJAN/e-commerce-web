import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductListItems from "../component/ProductListItems";
import {  removeItem } from "../redux/reducer/cart";
import { useNavigate, useParams } from "react-router-dom";
import { productList } from "../data/productList";

export default function Checkout() {
  const params = useParams();
  const list = useSelector((state) => state.cart.list);
  const [state, setState] = useState(
    params.id
      ? [
          {
            ...productList.find(
              (element) => element.id === parseInt(params.id)
            ),
            count: 1,
          },
        ]
      : list
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const incrementItem = (item) => {
    const index = state.list.findIndex((product) => product.id === item.id);

    setState((state) => [
      ...state.slice(0, index),
      { ...item, count: item.count + 1 },
      ...state.slice(index + 1),
    ]);
  };
  const decrementItem = (item) => {
    if (item.count === 1) {
      removeItemFromCart(item);
    } else {
      const index = state.findIndex(
        (product) => product.id === item.id
      );

      setState((state) => [
        ...state.slice(0, index),
        { ...item, count: item.count - 1 },
        ...state.slice(index + 1),
      ]);
    }
  };
  const removeItemFromCart = (item) => {
    const index = state.findIndex((product) => product.id === item.id);

    setState((state) => [...state.slice(0, index), ...state.slice(index + 1)]);
    dispatch(removeItem(item));
  };

  return (
    <>
      {state.length > 0 ? (
        <>
          {state.map((item) => (
            <ProductListItems
              {...item}
              key={item.id}
              incrementItem={() => incrementItem(item)}
              decrementItem={() => decrementItem(item)}
              removeItem={() => removeItemFromCart(item)}
            />
          ))}
          <button
            className="btn btn-success"
            onClick={() => navigate("/success")}
          >
            Place Order
          </button>
        </>
      ) : (
        <h3>No Item</h3>
      )}
    </>
  );
}
