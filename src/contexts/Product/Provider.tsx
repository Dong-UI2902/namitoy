import React, { createContext, useContext, useMemo, useState } from "react";
import { Product, ProductContextAPI } from "./type";
import productService from "./services";
import { PRODUCT } from "./Constain";
import { useType } from "../Type/Provider";

const ProductContext = createContext<ProductContextAPI>(
  {} as ProductContextAPI
);
const Provider: React.FC<{ children: any }> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const [product, setProduct] = useState<Product>(PRODUCT);
  const [products, setProducts] = useState<Product[]>([]);
  const [hot, setHot] = useState<Product[]>([]);
  const [meta, setMeta] = useState<any>({
    page: 1,
    perPage: 20,
    totalPage: 0,
  });

  const { types } = useType();

  const stringToArrImg = (imageUrls: string) => {
    const arr: string[] = [];
    imageUrls.split("\n").forEach((image) => {
      if (image) {
        arr.push(image);
      }
    });

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

  const getProducts = (page: number) => {
    setLoading(true);
    productService
      .getProducts(page)
      .then((res) => {
        setProducts(res.data);
        setMeta(res.meta);
      })
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
      .then((res) => {
        setProduct(PRODUCT);
        types.push(res.data.type);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  const updateProduct = (newProduct: Product) => {
    setLoading(true);
    productService
      .update(newProduct)
      .then(() => {
        const index = products.findIndex((item) => item._id === newProduct._id);
        products[index] = newProduct;
      })
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

  const deleteProduct = (_id: string) => {
    setLoading(true);
    productService
      .destroy(_id)
      .then(() => {
        const arr = products.filter((item) => item._id !== _id);
        setProducts(arr);
      })
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
      meta,
      getProductByType,
      addNewProduct,
      getProducts,
      stringToArrImg,
      arrToStringImg,
      updateProduct,
      findById,
      deleteProduct,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [product, products, meta, hot, loading, error]
  );

  return (
    <ProductContext.Provider value={memoValue}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = (): ProductContextAPI => useContext(ProductContext);

export default Provider;
