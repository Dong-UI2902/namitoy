import React, { useEffect } from "react";
import { Container, Loading } from "@nextui-org/react";
import "../styles/Collection.scss";
import { Link } from "react-router-dom";
import { useType } from "../contexts/Type/Provider";
import { useProduct } from "../contexts/Product";
import ListProduct from "../components/Product/ListProduct";

const Collection: React.FC<{ path: string }> = ({ path }) => {
  const { types } = useType();
  const { getProductsByType, loading } = useProduct();

  useEffect(() => {
    const key = types.find((item) => item.name === path);
    // @ts-ignore
    document.title = key.name;
    if (key?._id) return getProductsByType(key._id, 0);
  }, []);

  return (
    <section className="collection">
      <Container css={{ padding: 0 }}>
        <nav aria-label="breadcrumb" style={{ backgroundColor: "#f5f5f5" }}>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Trang chủ</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="#">Danh mục</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {path}
            </li>
          </ol>
        </nav>
        {loading ? (
          <center>
            <Loading size="lg" />
          </center>
        ) : (
          <ListProduct />
        )}
      </Container>
    </section>
  );
};

export default Collection;
