import React, { useState, useEffect, useContext } from "react";
import "../App.css";
import Navbar from "./Navbar";
import Cards from "./Card";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Link } from "react-router-dom";

export default function Home() {
  let [data, setData] = useState("");
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })
      .then((Data) => {
        setData(Data);
      });
  }, []);
  return (
    <div>
      <Navbar />
      <h2>Available Products</h2>
      {data.length === 0 ? (
        <div className="spinner">
          <CircularProgress />
        </div>
      ) : (
        <div className="loadingData">
          <Grid container spacing={3}>
            {data.map((el) => (
              <Grid item xs={12} sm={4} key={el.id}>
                <Link to={`/Items/${el.id}`} id="styling">
                  <Cards
                    img={el.image}
                    title={el.title}
                    price={el.price}
                    id={el.id}
                    // desc={el.description}
                  />
                </Link>
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </div>
  );
}
