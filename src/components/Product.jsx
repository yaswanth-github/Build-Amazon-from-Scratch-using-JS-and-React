import React from "react";
import Book from "./Book";
import KitchenMixer from "./KitchenMixer";
import Fitband from "./Fitband";
import AmazonEcho from "./AmazonEcho";
import IPadPro from "./IPadPro";
import LEDMonitor from "./LEDMonitor";

function Product() {
  return (
    <div class="product">
      <div class="product_row d-flex">
        <Book />
        <KitchenMixer />
        <Fitband />
      </div>

      <div class="product_row d-flex">
        <AmazonEcho />
        <IPadPro />
      </div>
      <div class="product_row d-flex">
        <LEDMonitor />
      </div>
    </div>
  );
}

export default Product;
