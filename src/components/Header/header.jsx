import React from "react";
import { NavLink } from "react-router-dom";
import Brand from "../../assets/icons/Hekto.svg";
import SearchIcon from "../../assets/icons/search.svg";
import Down from "../../assets/icons/chevron-down.svg";
import Message from "../../assets/icons/message.svg"
import Phone from "../../assets/icons/phone-call.svg"
import WhiteDown from "../../assets/icons/down-white.svg";
import User from "../../assets/icons/user.svg";
import Heart from "../../assets/icons/heart.svg";
import Shop from "../../assets/icons/fluent-cart.svg";

const header = () => {
  return (
    <>
      <header>
        <div>
          <nav className="navbar">
            <div className="nav_top_bg">
              <div className="container">
                <div className="nav_top">
                  <div className="nav_contact">
                  <p className="lokation">
                    <img src={Message} alt="" />
                    mhhasanul@gmail.com
                  </p>
                  <p className="lokation">
                    <img src={Phone} alt="" />
                    (12345)67890
                  </p>
                </div>
                <div className="nav_location">
                  <p className="location">
                    English
                    <img src={WhiteDown} alt="" />
                  </p>
                  <p className="location">
                    USD
                    <img src={WhiteDown} alt="" />
                  </p>
                  <p className="location">
                    Login
                    <img src={User} alt="" />
                  </p>
                  <NavLink className="location" to={"/wishlist"}>
                      Wishlist <img src={Heart} alt="" />
                    </NavLink>
                    <NavLink className="location" to={"/shoplist"}>
                       <img src={Shop} alt="" />
                    </NavLink>
                 
                </div>
                </div>
              </div>
            </div>
            <div className="nav_navigation_bg">
              <div className="container">
                <div className="nav_navigation">
                  <ul className="item_list">
                  <div className="nav_logo">
                    <img src={Brand} alt="" />
                  </div>
                  <li className="list_item">
                    <NavLink className="link" to={"/"}>
                      Home <img src={Down} />
                    </NavLink>
                  </li>
                  <li className="list_item">
                    <NavLink className="link" to={"/page"}>
                      Pages
                    </NavLink>
                  </li>
                  <li className="list_item">
                    <NavLink className="link" to={"/product"}>
                      Product
                    </NavLink>
                  </li>
                  <li className="list_item">
                    <NavLink className="link" to={"/blog"}>
                      Blog
                    </NavLink>
                  </li>
                  <li className="list_item">
                    <NavLink className="link" to={"/shops"}>
                      Shop
                    </NavLink>
                  </li>
                  <li className="list_item">
                    <NavLink className="link" to={"/contact"}>
                      Contact
                    </NavLink>
                  </li>
                </ul>
                <div className="nav_search">
                  <input type="text" />
                  <button className="nav_btn">
                    <img src={SearchIcon} alt="" />
                  </button>
                </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default header;
