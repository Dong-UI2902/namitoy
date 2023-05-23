import React, { useEffect } from "react";
import {
  Button,
  Col,
  Container,
  Grid,
  Row,
  Spacer,
  Text,
} from "@nextui-org/react";
import { Link, useParams } from "react-router-dom";
import CarouselImage from "../components/Product/CarouselImage";
import { useProduct } from "../contexts/Product";
import { FormatMoney } from "../contexts/Product/Constain";
import { useType } from "../contexts/Type/Provider";

const Product = () => {
  const { findById, product } = useProduct();
  const { handleHref } = useType();
  const { id } = useParams();

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
                <div className="counter">
                  <span className="down">-</span>
                  <input type="text" defaultValue="1" />
                  <span className="up">+</span>
                </div>
                <Button
                  shadow
                  color="error"
                  className="btn product__view-btn"
                  auto
                >
                  Thêm vào giỏ hàng
                </Button>
                <div>
                  <Text weight="medium">Mô tả</Text>
                  <Text id="description">{product.description}</Text>
                </div>
              </div>
            </Grid>
            <section className="section">
              <center>
                <Text className="title main-color">Sản phẩm liên quan</Text>
              </center>
              {/*<Products />*/}
              {/*<Products />*/}
            </section>
          </Grid.Container>
        </Container>
      </div>
    </div>
  );
};

export default Product;
