import React, { useEffect } from "react";
import { Container, Loading } from "@nextui-org/react";
import { Link, useSearchParams } from "react-router-dom";
import { useProduct } from "../contexts/Product";
import ListProduct from "../components/Product/ListProduct";

const Searching = () => {
  const { loading, search } = useProduct();
  const [searchParams, setSearchParams] = useSearchParams();
  const searching = searchParams.get("key");
  const branding = searchParams.get("brand");

  useEffect(() => {
    if (searching || branding) {
      document.title = `Tìm kiếm theo ${branding || searching}`;
      search(searching, branding);
    }
  }, [searching]);

  return (
    <section className="collection">
      <Container>
        <nav aria-label="breadcrumb" style={{ backgroundColor: "#f5f5f5" }}>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Trang chủ</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="#">Tìm kiếm</Link>
            </li>
            {/*<li className="breadcrumb-item active" aria-current="page">*/}
            {/*  {input | ""}*/}
            {/*</li>*/}
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

export default Searching;
