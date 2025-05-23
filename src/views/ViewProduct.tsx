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
import { FormatMoney, GetPercent } from "../contexts/Product/Constain";
import { FaHeart } from "react-icons/fa";
import productService from "../contexts/Product/services";
import Products from "../components/Product/Products";
import { useFavorite } from "../contexts/Favorite";
import { FAVORITE } from "../contexts/Favorite/Constain";
import { useAuth } from "../contexts/Auth";
import Noti from "../components/Admin/Noti";
import {FACEBOOK_LINK} from "../config/Constain";

const ViewProduct = () => {
  const { findByName, product, loading } = useProduct();
  const { addToFavorite } = useFavorite();
  const { name } = useParams();
  const { user } = useAuth();
  const [visible, setVisible] = React.useState(false);
  const [loadingSameProduct, setLoadingSameProduct] = React.useState(false);

  const [sameProducts, setSameProducts] = useState<Product[]>([]);

  const handleClick = () => {
    if (user?._id) return addToFavorite({ ...FAVORITE, product });
    return setVisible(true);
  };

  useEffect(() => {
    if (name) {
      window.scrollTo(0, 0);
      findByName(name);
    } else {
      // window.location.href = "/";
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  useEffect(() => {
    if (product._id) {
      // @ts-ignore
      document.getElementById("description").innerHTML = product.description;
      document.title = product.title;
      setLoadingSameProduct(true);
      productService
        .getSameProductsByType(product.type._id)
        .then((res) => setSameProducts(res.data))
        .catch()
        .finally(() => setLoadingSameProduct(false));
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
            <Link to={`/collection/${product.type.slug}`}>
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
              <Grid xs={12} sm={5} className="no-flex">
                <CarouselImage images={product.image} />
              </Grid>
              <Spacer x={1} />
              <Grid
                xs={12}
                sm={6}
                alignItems="flex-start"
                css={{ width: "370px" }}
              >
                <div className="product__view-body">
                  <Text size="$xl" weight="medium">
                    {product.title}
                  </Text>
                  <Text size="$md" weight="normal">
                    Nhà phát hành:{" "}
                    <Link to={`/search?brand=${product.brand}`}>
                      {product.brand}
                    </Link>
                  </Text>
                  <Row justify="space-between">
                    <Col>
                      <Text weight="medium" className="main-color">
                        {product.soldOld ? "Hết hàng" : "Còn hàng"}
                      </Text>
                      <Text weight="medium" className="price-color">
                        Sale:{" "}
                        <GetPercent sale={product.sale} price={product.price} />
                      </Text>
                    </Col>
                    <Col css={{ textAlign: "end" }}>
                      <Text del>
                        <FormatMoney price={product.sale} />
                      </Text>
                      <Text weight="bold" className="price-color">
                        <FormatMoney price={product.price} />
                      </Text>
                    </Col>
                  </Row>
                  <div className="notice">
                    Vui lòng gửi tin nhắn về messenger trên trang web hoặc truy
                    cập về địa chỉ{" "}
                    <a
                      href={FACEBOOK_LINK}
                      target="_blank"
                      rel="noreferrer"
                    >
                      fanpage Facebook
                    </a>{" "}
                    để được hỗ trợ tư vấn và đặt hàng.
                  </div>
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
              <section className="section same-product">
                <center>
                  <Text className="title main-color">Sản phẩm liên quan</Text>
                </center>
                {loadingSameProduct ? (
                  <center>
                    <Loading size="lg" />
                  </center>
                ) : (
                  <Products listProducts={sameProducts} />
                )}
              </section>
            </Grid.Container>
          </Container>
        </div>
      )}
      <Noti
        visible={visible}
        setVisible={setVisible}
        btnHandle={
          <Button
            bordered
            auto
            onPress={() => (window.location.href = "/login")}
          >
            Đăng nhập
          </Button>
        }
      >
        <center>
          Bạn chưa đăng nhập.
          <br />
          Hãy đăng nhập để lưu những sản phẩm mà mình yêu thích nhé!
        </center>
      </Noti>
    </div>
  );
};

export default ViewProduct;
