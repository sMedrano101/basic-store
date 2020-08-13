import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/CartDetails";
import Signin from "./components/Signin";
import cartGlobal from "./components/Context";
import Items from "./components/Items";
import CartDetails from "./components/CartDetails";

export default function Routers() {
  let cartData = useState([]);

  return (
    <cartGlobal.Provider value={cartData}>
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Cart" component={Cart} />
            <Route exact path="/Signin" component={Signin} />
            <Route exact path="/Items/:id" component={Items} />
            <Route exact path="/CartDetails" component={CartDetails} />
          </Switch>
        </Router>
      </div>
    </cartGlobal.Provider>
  );
}
