import React from "react";

function Fitband() {
  return (
    <div class="product_body">
      <div class="product_description">
        <p>Fitbit Charge 3 Fitness Activity Tracker (Graphite and Black)</p>
      </div>
      <div class="product_price">
        <p>
          &#8377; <span>2500</span>
        </p>
      </div>
      <ul class="rating d-flex">
        <li>
          <i class="fas fa-star"></i>
        </li>
        <li>
          <i class="fas fa-star"></i>
        </li>
        <li>
          <i class="fas fa-star"></i>
        </li>
        <li>
          <i class="far fa-star"></i>
        </li>
      </ul>
      <div class="product_img d-flex">
        <img src="assets/product3.jpg" alt="" />
      </div>
      <div class="button-cart d-flex">
        <a href="#">
          <button>Add To Busket</button>
        </a>
      </div>
    </div>
  );
}

export default Fitband;
