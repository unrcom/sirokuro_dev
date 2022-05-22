import type { NextPage } from "next";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Banner } from "../components/Banner";
// import autoBind from "auto-bind";
// import "./styles.css";

const DemoSwiper: NextPage = () => {
  const items = [
    {
      key: 1,
      name: "",
      caption: "vs",
      siroName: "Macbook Pro",
      siroImage: "https://source.unsplash.com/featured/?macbook",
      kuroName: "iPhone",
      kuroImage: "https://source.unsplash.com/featured/?iphone",
    },
    {
      key: 2,
      name: "Home Appliances",
      caption: "vs",
      siroName: "Washing Machine WX9102",
      siroImage: "https://source.unsplash.com/featured/?washingmachine",
      kuroName: "Learus Vacuum Cleaner",
      kuroImage: "https://source.unsplash.com/featured/?vacuum,cleaner",
    },
    {
      key: 3,
      name: "Decoratives",
      caption: "vs",
      siroName: "Living Room Lamp",
      siroImage: "https://source.unsplash.com/featured/?lamp",
      kuroName: "Floral Vase",
      kuroImage: "https://source.unsplash.com/featured/?vase",
    },
  ];

  return (
    <div style={{ marginTop: "50px", color: "#494949" }}>
      <h2>3 items layout</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
          waitForTransition: false,
        }}
        loop={true}
        // loopAdditionalSlides={1}
        speed={500}
      >
        {/* {items.map((banneritem, index) => { */}
        {items.map((banneritem) => {
          return (
            <SwiperSlide key={banneritem.key}>
              <Banner bnnr={banneritem} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default DemoSwiper;
