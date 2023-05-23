import React, { useEffect, useState } from "react";
import { Loading } from "@nextui-org/react";
import Products from "../Products";
import productService from "../../../contexts/Product/services";
import { Product } from "../../../contexts/Product";

const List1 = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [list, setList] = useState<Product[]>([]);

  useEffect(() => {
    setLoading(true);
    productService
      .getNewProducts()
      .then((res) => setList(res.data))
      .catch()
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {loading ? (
        <center>
          <Loading size="lg" />
        </center>
      ) : (
        <Products listProducts={list} />
      )}
    </>
  );
};

export default List1;
