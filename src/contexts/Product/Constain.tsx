import React from "react";

export const PRODUCT = {
  brand: "",
  createdAt: undefined,
  description: "",
  gender: "nam",
  image: [],
  isHot: false,
  material: "",
  price: "0",
  sale: "0",
  soldOld: false,
  title: "",
  type: {
    name: "",
  },
  user: undefined,
};

const fixImageDrive = (id: string) => {
  return "https://lh3.googleusercontent.com/d/" + id;
};

const isImageDrive = (image: string) => {
  const found = image.match(/\/file\/d\/([^/]+)/);
  if (found) {
    return found[1];
  }

  return false;
};

const fixImage = (image: string) => {
  const imageDrive = isImageDrive(image);
  if (imageDrive) {
    return fixImageDrive(imageDrive);
  }

  return image;
};

const FormatMoney = (props: any) => {
  const formatter = new Intl.NumberFormat("vi", {
    style: "currency",
    currency: "VND",
  });
  if (isNaN(props.price) && props.price !== undefined) {
    return (
      <>
        {formatter.format(props.price.substring(0, props.price.indexOf("-"))) +
          "-" +
          formatter.format(
            props.price.substring(
              props.price.indexOf("-") + 1,
              props.price.length
            )
          )}
      </>
    );
  }
  return <>{formatter.format(props.price)}</>;
};

export { fixImage, FormatMoney };
