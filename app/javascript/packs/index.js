import React from "react";
import { render } from "react-dom";
import Provider from "../components/Provider";
import Shop from "../components/Shop";
// import AddProductForm from "../components/AddProductForm";

render(
  <Provider>
    <Shop/>
  </Provider>,
  document.querySelector("#root")
);
