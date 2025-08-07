import React from 'react';
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Img from "../../assets/images/kreclo.png"
import chair1 from "../../assets/images/image 1171.png";
import chair2 from "../../assets/images/image 1170.png";
import chair3 from "../../assets/images/image 31.png";
import chair4 from "../../assets/images/image 32.png";
import exec1 from "../../assets/images/image 30.png";
import exec2 from "../../assets/images/image 19.png";
import exec3 from "../../assets/images/image 28.png";
import clock from "../../assets/images/image 1162.png";
import shelf from "../../assets/images/image 1161.png";

const products = [
  { name: "Cantilever chair", price: 26, oldPrice: 40, img: chair1 },
  { name: "Cantilever chair", price: 26, oldPrice: 40, img: chair2 },
  { name: "Cantilever chair", price: 26, oldPrice: 40, img: chair3 },
  { name: "Cantilever chair", price: 26, oldPrice: 40, img: chair4 },
];

const executiveSeats = [
  { name: "Executive Seat chair", price: 39, img: exec1 },
  { name: "Executive Seat chair", price: 39, img: exec2 },
  { name: "Executive Seat chair", price: 39, img: exec3 },
];


const home = () => {

  return (
    <div>
      <Header />
      
      <section className="bg">
              <div className="container">
                <div className="teams">
                  <div className="team_img">
                    <img src={Img} alt="" />
                  </div>
                   <div className="team_text">
                    <h1>Unique Features Of leatest & <br />Trending Poducts</h1>
                    <p>
                      Provide a network for all <br />your needs with ease and fun using <br />
                      LaslesVPN discover <br />interesting features from us.
                    </p>
                    <button className="btn">Get started</button>
                  </div>
                </div>
              </div>
            </section>
            <div className="trending-products">
                  <h2 className="section-title">Trending Products</h2>
            
                  <div className="product-grid">
                    {products.map((product, idx) => (
                      <div key={idx} className="product-card">
                        <img src={product.img} alt={product.name} />
                        <p className="product-name">{product.name}</p>
                        <p className="price">
                          ${product.price.toFixed(2)}
                          <span className="old">${product.oldPrice.toFixed(2)}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="section-title"></div>
                  <div className="banners">
                    <div className="banner pink">
                      <h3>23% off in all products</h3>
                      <a href="#">Shop Now</a>
                      <img src={clock} alt="Clock" />
                    </div>
                    <div>
                      <div className="banner blue">
                        <h3>23% off in all products</h3>
                        <a href="#">View Collection</a>
                        <img src={shelf} alt="Shelf" />
                      </div>
                      
                    </div>
                    <div className="executive-list">
                        {executiveSeats.map((chair, idx) => (
                          <div key={idx} className="executive-item">
                            <img src={chair.img} alt={chair.name} />
                            <div>
                              <p className="product-name">{chair.name}</p>
                              <p className="price">${chair.price.toFixed(2)}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                  </div>
                </div>
      <Footer />
      
    </div>
  );
};

export default home;
