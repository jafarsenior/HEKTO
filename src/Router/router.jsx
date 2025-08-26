import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/home";
import Page from "../pages/Page/page";
import Blog from "../pages/Blog/blog";
import Product from "../pages/Products/product";
import Shop from "../pages/Shop/shop";
import Contact from "../pages/Contact/contact";
import WishList from "../pages/Wishlist/wishlist"
import ShopList from "../pages/Shoplist/shoplist"
import NotFound from "../pages/NotFound/notFound";

const router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page" element={<Page />} />
        <Route path="/product" element={<Product />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shops" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/wishlist" element={<WishList/>}/>
        <Route path="/shoplist" element={<ShopList/>}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </>
  );
};

export default router;
