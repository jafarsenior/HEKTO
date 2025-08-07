import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/home";
import Page from "../pages/Page/page";
import Blog from "../pages/Blog/blog";
import Product from "../pages/Products/product";
import Shop from "../pages/Shop/shop";
import Contact from "../pages/Contact/contact";

const router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page" element={<Page />} />
        <Route path="/product" element={<Product />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default router;
