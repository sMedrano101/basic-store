import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Cards from "./Card";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

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
      <h1>Products</h1>
      {data.length === 0 ? (
        <div className="spinner">
          <CircularProgress />
        </div>
      ) : (
        <div className="loadingData">
          <Grid container spacing={3}>
            {data.map((el) => (
              <Grid item xs={12} sm={4} key={el.id}>
                <Cards
                  img={el.image}
                  title={el.title}
                  price={el.price}
                  desc={el.description}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </div>
  );
}
