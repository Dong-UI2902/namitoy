import React, { useEffect, useState } from "react";
import { Product } from "../../../contexts/Product";
import productService from "../../../contexts/Product/services";
import { Loading } from "@nextui-org/react";
import Products from "../Products";

const List2 = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [list, setList] = useState<Product[]>([]);

  useEffect(() => {
    setLoading(true);
    productService
      .getProductsByType("64607f556375d21ab96f6467", 12)
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

export default List2;
