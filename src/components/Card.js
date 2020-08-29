import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import cartGlobal from "./Context";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  title: {
    fontWeight: "bold",
  },
});

//renamed cards
export default function Cards(Props) {
  const classes = useStyles();
  let [globalData, setGlobalData] = useContext(cartGlobal);
  console.log(globalData);
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Props.img}
          title={Props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Price:${Props.price}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.title}
          >
            {/* {Props.desc} */}
            {Props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <button
          onClick={() =>
            setGlobalData([
              ...globalData,
              { id: Props.id, title: Props.title, price: Props.price },
            ])
          }
        >
          <AddShoppingCartIcon color="primary" />
        </button>
      </CardActions>
    </Card>
  );
}
