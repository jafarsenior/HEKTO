import React from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import View from "../../assets/icons/viwe.svg";
import List from "../../assets/icons/list.svg";
import Creslo from "../../assets/images/kreslo4.png";
import Point from "../../assets/icons/point-group.svg";
import Brands from "../../assets/icons/brends.svg"

const shop = () => {
  return (
    <div>
      <Header />
      <section className="shop_text_navigate">
        <div className="container">
          <h1>Shop Grid Default</h1>
          <p>
            Home . Pages <b>. Shop Grid Default</b>
          </p>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="shop_filter">
            <div className="filter_text">
              <h2>Ecommerce Acceories & Fashion item </h2>
              <small>About 9,620 results (0.62 seconds)</small>
            </div>
            <div className="filter_group">
              <span className="filter_inp">
                <label htmlFor="#">Per Page:</label>
                <input type="text" name="" id="" />
              </span>
              <span className="filter_inp">
                <label htmlFor="#">Sort By:</label>
                <input type="text" name="" id="" placeholder="Best Match ▽" />
              </span>
              <span className="filter_inp">
                <label htmlFor="#">
                  View: <img src={View} alt="" /> <img src={List} alt="" />
                </label>
                <input type="text" name="" id="" />
              </span>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="shop_cards">
            <div className="card">
              <div className="card_img">
                <img src={Creslo} alt="" />
              </div>
              <div className="card_text">
                <h2>Vel elit euismod</h2>
                <img src={Point} alt="" />
                <div className="price">
                  <p>$26.00 </p>
                  <del>$42.00</del>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card_img">
                <img src={Creslo} alt="" />
              </div>
              <div className="card_text">
                <h2>Vel elit euismod</h2>
                <img src={Point} alt="" />
                <div className="price">
                  <p>$26.00 </p>
                  <del>$42.00</del>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card_img">
                <img src={Creslo} alt="" />
              </div>
              <div className="card_text">
                <h2>Vel elit euismod</h2>
                <img src={Point} alt="" />
                <div className="price">
                  <p>$26.00 </p>
                  <del>$42.00</del>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card_img">
                <img src={Creslo} alt="" />
              </div>
              <div className="card_text">
                <h2>Vel elit euismod</h2>
                <img src={Point} alt="" />
                <div className="price">
                  <p>$26.00 </p>
                  <del>$42.00</del>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card_img">
                <img src={Creslo} alt="" />
              </div>
              <div className="card_text">
                <h2>Vel elit euismod</h2>
                <img src={Point} alt="" />
                <div className="price">
                  <p>$26.00 </p>
                  <del>$42.00</del>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card_img">
                <img src={Creslo} alt="" />
              </div>
              <div className="card_text">
                <h2>Vel elit euismod</h2>
                <img src={Point} alt="" />
                <div className="price">
                  <p>$26.00 </p>
                  <del>$42.00</del>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      <section>
        <div className="container">
            <div className="brands">
                <img src={Brands} alt="" />
            </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default shop;
