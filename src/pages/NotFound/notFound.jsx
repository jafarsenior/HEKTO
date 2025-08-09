import React from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import NotFound from "../../assets/icons/not.png";
import { useNavigate } from "react-router-dom";

const notFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/")
  }
  return (
    <>
      <Header />
      <section className="not_text">
        <div className="container">
          <h1>404 Not Found</h1>
          <p>
            Home . Pages <b>. 404 Not Found</b>
          </p>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="not_img">
            <img src={NotFound} alt="Not Found" />
            <div className="not_btns">
              <button onClick={handleClick} className="not_btn">Back To Home</button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default notFound;
