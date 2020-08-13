import React, { useEffect, useState, useContext } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import cartGlobal from "./Context";
import Button from "@material-ui/core/Button";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

export default function Items() {
  let [showingData, setShowingData] = useState([""]);
  let [data, setData] = useState([""]);
  let getParams = useParams("id");
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => {
        return data.json();
      })
      .then((response) => {
        setShowingData(
          response.filter((el) => el.id === parseInt(getParams.id))
        );
      });
  }, []);

  let [globalData, setGlobalData] = useContext(cartGlobal);
  return (
    <div>
      <Navbar />
      {showingData.map((el) => (
        <div>
          <h1>{el.title}</h1>
          <img src={el.image} />

          <button
            onClick={() =>
              setGlobalData([...globalData, { id: el.id, title: el.title }])
            }
          >
            <AddShoppingCartIcon color="primary" />
          </button>
        </div>
      ))}
    </div>
  );
}
