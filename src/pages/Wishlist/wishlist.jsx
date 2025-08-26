import React, { useState, useEffect } from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import HeartFill from "../../assets/icons/heartFill.svg";
import Heart from "../../assets/icons/hearts.svg";
import Shops from "../../assets/icons/shop.svg";
import Zoom from "../../assets/icons/zoom.svg";

const Wishlist = () => {
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/fish")
      .then((res) => res.json())
      .then((data) => setWishList(data));
  }, []);

  const removeFromWishlist = async (id) => {
    await fetch(`http://localhost:3000/fish/${id}`, {
      method: "DELETE",
    });
    setWishList(prev => prev.filter((item) => item.id !== id));
  };
  return (
    <div>
      <Header />
      <div className="container">
        <h1>Wishlist</h1>
        <div>
          {wishList.length > 0 ? (
            wishList.map((item) => (
              <div key={item.id}>
                <div>
                  <img src={item.img} alt="" />
                  <div>
                    <button>
                      <img src={Shops} alt="" />
                    </button>
                    <button>
                      <img src={Zoom} alt="" />
                    </button>
                    <button>
                      <img src={Heart} alt="" />
                    </button>
                    <button onClick={() => removeFromWishlist(item.id)}>
                      <img width={40} src={HeartFill} alt="" />
                    </button>
                  </div>
                </div>
                <div>
                  <h2>{item.name}</h2>
                  <div>
                    <p>{item.price} so'm</p>
                    <p>{item.oldPrice} so'm</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Bo'sh</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Wishlist;
