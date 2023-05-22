import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import Carousel from "react-multi-carousel";
import CardProd from "./CardProd";

const CarouselProd = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode
      className=""
      containerClass="container"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 3,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 2,
          partialVisibilityGutter: 30,
        },
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      <div style={{ margin: "0 10px" }}></div>
      <div style={{ margin: "0 10px" }}></div>
      <div style={{ margin: "0 10px" }}></div>
      <div style={{ margin: "0 10px" }}></div>
      <div style={{ margin: "0 10px" }}></div>
      <div style={{ margin: "0 10px" }}></div>
      <div style={{ margin: "0 10px" }}></div>
    </Carousel>
  );
};

export default CarouselProd;
