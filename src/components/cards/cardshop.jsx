import React, {useState} from "react";
import Shop from "../../assets/icons/shop.svg";
import Zoom from "../../assets/icons/zoom.svg";
import Hearts from "../../assets/icons/hearts.svg";
import HeartFill from "../../assets/icons/heartFill.svg"
import ShopFill from "../../assets/icons/shopFill.svg"

const Cardshop = ({ shopProduct }) => {
  const { img, name, price, oldprice } = shopProduct;

const [isWishlist, setIsWishList] = useState(false);
const [isShoplist, setIsShopList] = useState(false);

  const handleWishlist = async () => {
  const res = await fetch("http://localhost:3000/fish");
  const wishlist = await res.json();

  const exists = wishlist.find(item => item.id === shopProduct.id);

  if (!exists) {
    await fetch("http://localhost:3000/fish", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(shopProduct),
    });
    setIsWishList(true); // qo‘shilganda heart to‘lib chiqsin
  } else {
    // agar oldin qo‘shilgan bo‘lsa, o‘chirish ham mumkin
    await fetch(`http://localhost:3000/fish/${shopProduct.id}`, {
      method: "DELETE",
    });
    setIsWishList(false); // olib tashlanganda heart bo‘shashtiriladi
  }
};




    const handleShoplist = async () => {
    const res = await fetch('http://localhost:3000/shopping');
    const shoplist = await res.json();

    const exists = shoplist.find(item => item.id === shopProduct.id);
    if(!exists) {
      await fetch("http://localhost:3000/shopping", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(shopProduct),
      });
      setIsShopList(false);
    }
  };

  return (
    <>
      <div className="product">
        <div className="img_product">
          <img width={200} src={img} alt="" />
          <div className="hover_btnds">
            <button onClick={handleShoplist}>
              <img src={isShoplist ? ShopFill : Shop} alt="" />
            </button>
            <button>
              <img src={Zoom} alt="" />
            </button>
            <button onClick={handleWishlist}>
              <img width={20} src={isWishlist? HeartFill : Hearts} alt="" />
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

export default Cardshop;
