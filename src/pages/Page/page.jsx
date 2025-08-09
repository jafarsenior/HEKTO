import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Kreslo from "../../assets/images/creslo.png";
import Kreslo2 from "../../assets/images/kreclo.png";
import Kreslo3 from "../../assets/images/creslo3.png";
import Bag from "../../assets/images/bag.png";
import Camera from "../../assets/images/camera.png";
import Watch1 from "../../assets/images/watch1.png";
import Watch2 from "../../assets/images/watch2.png";
import Headphones from "../../assets/images/headphones.png";

const data = [
  {
    img: Watch1,
    title: "Pellentesque condimentum ac",
    decription:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatibus.",
    price: "200",
  },
  {
    img: Bag,
    title: "Purus risus, ut",
    decription:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatibus.",
    price: "40",
  },
  {
    img: Watch2,
    title: "Fusce pellentesque at",
    decription:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatibus.",
    price: "350",
  },
  {
    img: Headphones,
    title: "Lectus vulputate faucibus",
    decription:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatibus.",
    price: "120",
  },
  {
    img: Camera,
    title: "Cras scelerisque velit",
    decription:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatibus.",
    price: "780",
  },
];

const page = () => {
  return (
    <div>
      <Header />
      <section className="img_carousel">
        <div className="container">
          <h1>Images Carousel</h1>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            loop
            autoplay={{ delay: 500 }}
          >
            {[Kreslo, Kreslo2, Kreslo3].map((src, i) => (
              <SwiperSlide key={i}>
                <div className="page_carous">
                  <img width={500} src={src} alt={`Slide ${i}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <section className="card_carousel">
        <div className="container">
          <h1>Card Carousel</h1>
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={4}
            slidesPerGroup={1}
            navigation
            loop
          >
            {data.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="card_group">
                  <div className="card_group_img">
                    <img src={item.img} alt={item.title} />
                  </div>
                  <div className="card_group_text">
                    <h2>{item.title}</h2>
                    <p>{item.decription}</p>
                    <p className="price">{item.price}$</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default page;
