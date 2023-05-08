import React, { createContext, useContext, useMemo, useState } from "react";
import { Product, ProductContextAPI } from "./type";
import productService from "./services";
import { PRODUCT } from "./Constain";

const ProductContext = createContext<ProductContextAPI>(
  {} as ProductContextAPI
);
const Provider: React.FC<{ children: any }> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const [product, setProduct] = useState<Product>(PRODUCT);
  const [products, setProducts] = useState<Product[]>([]);
  const [hot, setHot] = useState<Product[]>([]);

  const stringToArrImg = (imageUrls: string) => {
    const arr: string[] = [];
    imageUrls.split("\n").forEach((image) => {
      if (image) {
        arr.push(image);
      }
    });
    console.log(arr);

    return arr;
  };

  const arrToStringImg = (images: string[]) => {
    let str = "";

    images.forEach((image: any) => {
      if (image.url) {
        str = str + image.url + "\n";
      } else {
        str = str + image + "\n";
      }
    });
    // console.log(str);

    return str;
  };

  const getAllProduct = () => {
    setLoading(true);
    productService
      .getAllProducts()
      .then((res) => setProducts(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  const getProductByType = (typeId: string) => {
    setLoading(true);
    productService
      .getProductByType(typeId)
      .then((res) => setProducts(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  const addNewProduct = (newProduct: Product) => {
    setLoading(true);
    productService
      .store(newProduct)
      .then((res) => setProduct(PRODUCT))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  const updateProduct = (newProduct: Product) => {
    setLoading(true);
    productService
      .update(newProduct)
      .then()
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  const findById = (_id: string) => {
    setLoading(true);
    productService
      .findById(_id)
      .then((res) => setProduct(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  const memoValue = useMemo(
    () => ({
      loading,
      error,
      product,
      setProduct,
      products,
      hot,
      getProductByType,
      addNewProduct,
      getAllProduct,
      stringToArrImg,
      arrToStringImg,
      updateProduct,
      findById,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [product, products, hot, loading, error]
  );

  return (
    <ProductContext.Provider value={memoValue}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = (): ProductContextAPI => useContext(ProductContext);

export default Provider;
