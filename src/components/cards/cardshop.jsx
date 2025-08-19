import React from "react";
import Shop from "../../assets/icons/shop.svg";
import Zoom from "../../assets/icons/zoom.svg";
import Hearts from "../../assets/icons/hearts.svg";

const cardshop = ({ shopProduct }) => {
  const { img, name, price, oldprice } = shopProduct;
  return (
    <>
      <div className="product">
        <div className="img_product">
          <img src={img} alt="" />
          <div className="hover_btnds">
            <button>
              <img src={Shop} alt="" />
            </button>
            <button>
              <img src={Zoom} alt="" />
            </button>
            <button>
              <img src={Hearts} alt="" />
            </button>
          </div>
        </div>
        <div className="product_text">
          <h2>{name}</h2>
          <div className="price_product">
            <p>${price}.00</p>
            <p className="old">${oldprice}.00</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default cardshop;
