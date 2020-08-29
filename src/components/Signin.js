import React from "react";
import Navbar from "./Navbar";

export default function Signin() {
  return (
    <div>
      <Navbar />
      <h1>Hello Please log-in</h1>
      <input placeholder="Username"></input>
      <input placeholder="Password"></input>
      <button>login</button>
      <div>
        <button>Register</button>
        <button>Reset</button>
      </div>
    </div>
  );
}
