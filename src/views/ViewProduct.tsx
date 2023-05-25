import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Grid,
  Loading,
  Row,
  Spacer,
  Text,
} from "@nextui-org/react";
import { Link, useParams } from "react-router-dom";
import CarouselImage from "../components/Product/CarouselImage";
import { Product, useProduct } from "../contexts/Product";
import { FormatMoney } from "../contexts/Product/Constain";
import { useType } from "../contexts/Type/Provider";
import { FaHeart } from "react-icons/fa";
import productService from "../contexts/Product/services";
import Products from "../components/Product/Products";
import { useFavorite } from "../contexts/Favorite";
import { FAVORITE } from "../contexts/Favorite/Constain";

const ViewProduct = () => {
  const { findById, product, loading } = useProduct();
  const { handleHref } = useType();
  const { addToFavorite } = useFavorite();
  const { id } = useParams();

  const [sameProducts, setSameProducts] = useState<Product[]>([]);

  const handleClick = () => {
    addToFavorite({ ...FAVORITE, product });
  };

  useEffect(() => {
    if (id) {
      return findById(id);
    } else {
      window.location.href = "/";
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    // @ts-ignore
    document.getElementById("description").innerHTML = product.description;
    document.title = product.title;
    if (product._id) {
      productService
        .getSameProductsByType(product.type._id)
        .then((res) => setSameProducts(res.data))
        .catch()
        .finally();
    }
  }, [product]);

  return (
    <div>
      <nav aria-label="breadcrumb" style={{ backgroundColor: "#f5f5f5" }}>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Trang chủ</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="#">Danh mục</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <Link to={`/collection/${handleHref(product.type.name)}`}>
              {product.type.name}
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {product.title}
          </li>
        </ol>
      </nav>
      {loading ? (
        <center>
          <Loading size="lg" />
        </center>
      ) : (
        <div className="product">
          <Container lg>
            <Grid.Container className="product__view" justify="center">
              <Grid xs={12} sm={4}>
                <CarouselImage images={product.image} />
              </Grid>
              <Spacer x={2} />
              <Grid xs={12} sm={6}>
                <div className="product__view-body">
                  <Text size="$xl" weight="medium">
                    {product.title}
                  </Text>
                  <Row justify="space-between" css={{ maxWidth: "370px" }}>
                    <Col>
                      <Text weight="medium" className="main-color">
                        Còn hàng
                      </Text>
                      <Text weight="medium" className="price-color">
                        Sale: 34%
                      </Text>
                    </Col>
                    <Col css={{ textAlign: "end" }}>
                      <Text del>1.150.000 ₫</Text>
                      <Text weight="bold" className="price-color">
                        <FormatMoney price={product.price} />
                      </Text>
                    </Col>
                  </Row>
                  <hr />
                  <Button
                    shadow
                    color="error"
                    className="btn product__view-btn"
                    auto
                    iconRight={<FaHeart fill="currentColor" />}
                    onClick={handleClick}
                  >
                    Thêm vào mục yêu thích
                  </Button>
                  <div>
                    <Text weight="medium">Mô tả</Text>
                    <Text id="description">{product.description}</Text>
                  </div>
                </div>
              </Grid>
              <section className="section" style={{ marginTop: "50px" }}>
                <center>
                  <Text className="title main-color">Sản phẩm liên quan</Text>
                </center>
                <Products listProducts={sameProducts} />
              </section>
            </Grid.Container>
          </Container>
        </div>
      )}
    </div>
  );
};

export default ViewProduct;
