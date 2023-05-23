import React, { useEffect, useState } from "react";
import CardProd from "./CardProd";
// @ts-ignore
// eslint-disable-next-line import/no-extraneous-dependencies
import { Carousel } from "3d-react-carousal";
import { useProduct } from "../../contexts/Product";

const Slide: React.FC<{ callback: (index: number) => void }> = ({
  callback,
}) => {
  const { hot } = useProduct();

  const [slides, setSlide] = useState<any[]>([]);

  useEffect(() => {
    hot.forEach((item) => {
      setSlide((prevState) => [...prevState, <CardProd product={item} />]);
    });
  }, [hot]);

  return (
    <div style={{ minHeight: "300px" }}>
      {slides.length > 0 ? (
        <Carousel
          slides={slides}
          autoplay={true}
          interval={3000}
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
