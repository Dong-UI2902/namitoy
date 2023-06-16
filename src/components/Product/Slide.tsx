import React, { useEffect, useState } from "react";
import CardProd from "./CardProd";
// @ts-ignore
// eslint-disable-next-line import/no-extraneous-dependencies
import { Carousel } from "3d-react-carousal";
import { Product } from "../../contexts/Product";

const Slide: React.FC<{
  callback: (index: number) => void;
  hot: Product[];
}> = ({ callback, hot }) => {
  const [slides, setSlide] = useState<any[]>([]);

  useEffect(() => {
    hot.forEach((item) => {
      setSlide((prevState) => [...prevState, <CardProd product={item} />]);
    });
  }, [hot]);

  return (
    <div className="product__card-slide">
      {slides.length > 0 ? (
        <Carousel
          slides={slides}
          onSlideChange={callback}
          swipeToSlide={true}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Slide;
