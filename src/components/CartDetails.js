import React, { useContext, useState, useEffect } from "react";
import Navbar from "./Navbar";
import cartGlobal from "./Context";

export default function CartDetails() {
  let [globalData, setGlobalData] = useContext(cartGlobal);
  let [totalPrice, setTotalPrice] = useState(0);
  console.log(globalData);

  useEffect(() => {
    let price = 0;
    globalData.forEach((el) => {
      price = price + el.price;
    });
    console.log(price);
    setTotalPrice(price);
  }, [globalData]);
  console.log(totalPrice);

  return (
    <div>
      <Navbar />
      <h1>Your cart.</h1>
      {globalData.length === 0 ? (
        <h1> No item found on your cart!</h1>
      ) : (
        globalData.map((el, index) => (
          <div key={el.id}>
            <h1>
              {index + 1}.Title : {el.title} Price: ${el.price}
            </h1>
          </div>
        ))
      )}
      {totalPrice !== 0 ? (
        <div>
          <h1>-------------------------------</h1>
          <h1>TOTAL PRICE: {totalPrice} </h1>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
