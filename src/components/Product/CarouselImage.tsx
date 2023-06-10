import React, { useEffect, useRef, useState } from "react";
import { fixImage } from "../../contexts/Product/Constain";

const CarouselImage: React.FC<{ images?: string[] }> = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string>();
  const carouselItemsRef = useRef<HTMLDivElement[] | null[]>([]);

  const handleSelectedImageChange = (newIdx: number) => {
    if (images && images.length > 0) {
      setSelectedImage(images[newIdx]);
      setSelectedImageIndex(newIdx);
      if (carouselItemsRef?.current[newIdx]) {
        carouselItemsRef?.current[newIdx]?.scrollIntoView({
          inline: "center",
          behavior: "smooth",
          block: "end",
        });
      }
    }
  };

  useEffect(() => {
    if (images && images[0]) {
      carouselItemsRef.current = carouselItemsRef.current.slice(
        0,
        images.length
      );

      setSelectedImageIndex(0);
      setSelectedImage(images[0]);
    }
  }, [images]);

  return (
    <div className="product">
      <div className="product__image">
        <div>
          <div
            className="img"
            style={{
              backgroundImage: `url(${
                selectedImage && fixImage(selectedImage)
              })`,
            }}
          />
        </div>
        <div className="carousel">
          <div className="carousel__images">
            {images &&
              images.map((image, idx) => (
                <div
                  onClick={() => handleSelectedImageChange(idx)}
                  style={{
                    backgroundImage: `url(${fixImage(image)})`,
                  }}
                  key={idx}
                  className={`carousel__image ${
                    selectedImageIndex === idx && "carousel__image-selected"
                  }`}
                  ref={(el) => (carouselItemsRef.current[idx] = el)}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselImage;
