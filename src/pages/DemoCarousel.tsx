import type { NextPage } from "next";
import Carousel from "react-material-ui-carousel";
import { Banner } from "../components/Banner";
// import autoBind from "auto-bind";
// import "./styles.css";

const DemoCarousel: NextPage = () => {
  const items = [
    {
      name: "いまほしいのは？",
      caption: "白の廉価モデルと黒のハイレンジモデルはほぼ同額ですね",
      siroName: "Macbook Pro",
      siroImage: "https://source.unsplash.com/featured/?macbook",
      kuroName: "iPhone",
      kuroImage: "https://source.unsplash.com/featured/?iphone",
    },
    {
      name: "Home Appliances",
      caption: "Say no to manual home labour!",
      siroName: "Washing Machine WX9102",
      siroImage: "https://source.unsplash.com/featured/?washingmachine",
      kuroName: "Learus Vacuum Cleaner",
      kuroImage: "https://source.unsplash.com/featured/?vacuum,cleaner",
    },
    {
      name: "Decoratives",
      caption: "Give style and color to your living room!",
      siroName: "Living Room Lamp",
      siroImage: "https://source.unsplash.com/featured/?lamp",
      kuroName: "Floral Vase",
      kuroImage: "https://source.unsplash.com/featured/?vase",
    },
  ];

  return (
    <div style={{ marginTop: "50px", color: "#494949" }}>
      <h2>3 items layout</h2>
      <Carousel
        className="Example"
        autoPlay={true}
        animation={"fade"}
        indicators={true}
        timeout={500}
        cycleNavigation={true}
        navButtonsAlwaysVisible={false}
        navButtonsAlwaysInvisible={false}
        next={(now, previous) =>
          console.log(
            `Next User Callback: Now displaying child${now}. Previously displayed child${previous}`
          )
        }
        prev={(now, previous) =>
          console.log(
            `Prev User Callback: Now displaying child${now}. Previously displayed child${previous}`
          )
        }
        onChange={(now, previous) =>
          console.log(
            `OnChange User Callback: Now displaying child${now}. Previously displayed child${previous}`
          )
        }
        // fullHeightHover={false}
        // navButtonsProps={{style: {backgroundColor: 'cornflowerblue', borderRadius: 0}}}
        // navButtonsWrapperProps={{style: {bottom: '0', top: 'unset', }}}
        // indicatorContainerProps={{style: {margin: "20px"}}}
        // NextIcon='next'
      >
        {/* {items.map((banneritem, index) => {
          return <Banner bnnr={banneritem} key={index} />;
        })} */}
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
        <div>Slide 4</div>
      </Carousel>
    </div>
  );
};

export default DemoCarousel;
