import React, { useState, useEffect } from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
const shoplist = () => {
  const [shoplist, setShoplist] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/shopping")
      .then((res) => res.json())
      .then((data) => {
        const updated = data.map((item) => ({
          ...item,
          quantity: 1,
        }));
        setShoplist(updated);
      });
  }, []);

  const removeFromShoplist = async (id) => {
    await fetch(`http://localhost:3000/shopping/${id}`, {
      method: "DELETE",
    });
    setShoplist((prev) => prev.filter((item) => item.id !== id));
  };
  const updateQuantity = (id, type) => {
    setShoplist((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "increment"
                  ? item.quantity + 1
                  : item.quantity > 1
                  ? item.quantity - 1
                  : 1,
            }
          : item
      )
    );
  };

  const totalPrice = shoplist.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handlePurchase = () => {
    setMessage("✅Mahsulot sotib olindi!");
    setTimeout(() => setMessage(""), 4000);
    setShoplist([]);
  };

  return (
    <>
      <Header />
      <div>
        <h1>Shop List</h1>

        {message && <p>{message}</p>}
        <div>
          {shoplist.length > 0 ? (
            shoplist.map(item => (
              <div key={item.id}>
                  <img width={200} src={item.img} alt="" />
                  <div>
                    <h2>{item.name}</h2>
                    <p>{item.price} $</p>
                    <div>
                      <button onClick={() => updateQuantity(item.id, "decrement")}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, "increment")}>+</button>
                    </div>
                    <p>
                      Jami: <b>${item.price * item.quantity}.00</b>
                    </p>
                  </div>
                  <button onClick={() => removeFromShoplist(item.id)}>Remove</button>
              </div>
            ))
          ): (
            <p>Do'kon bo'sh</p>
          )}
        </div>
        {shoplist.length > 0 && (
          <div>
            <h2>Umumiy summa: ${totalPrice}</h2>
            <button onClick={handlePurchase}>Buy</button>
          </div>
        )}

      </div>
      <Footer />
    </>
  );
};

export default shoplist;
