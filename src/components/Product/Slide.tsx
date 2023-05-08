import React from "react";
import CardProd from "./CardProd";
// @ts-ignore
// eslint-disable-next-line import/no-extraneous-dependencies
import { Carousel } from "3d-react-carousal";

const slides = [
  <CardProd />,
  <CardProd />,
  <CardProd />,
  <CardProd />,
  <CardProd />,
  <CardProd />,
  <CardProd />,
];

const Slide = () => {
  const callback = function (index: number) {
    console.log("callback", index);
  };

  return (
    <div>
      <Carousel
        slides={slides}
        autoplay={true}
        interval={3000}
        onSlideChange={callback}
        swipeToSlide={true}
      />
    </div>
  );
};

export default Slide;
