import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Grid,
  Loading,
  Text,
} from "@nextui-org/react";
import { Link, useParams } from "react-router-dom";
import CarouselImage from "../components/Product/CarouselImage";
import { Product, useProduct } from "../contexts/Product";
import { FormatMoney } from "../contexts/Product/Constain";
import {FaBox, FaHeart, FaTruck} from "react-icons/fa";
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
            <Grid.Container className="product__view" justify="center" gap={3}>
              <Grid xs={12} sm={6} className="no-flex">
                <CarouselImage images={product.image} />
              </Grid>
              <Grid
                xs={12}
                sm={6}
                alignItems="flex-start"
                css={{ width: "370px" }}
              >
                <div className="product__view-body">
                  <Text size="$2xl" weight="medium">
                    {product.title}
                  </Text>


                  <Text weight="medium" className="price-color">
                      {Number(product.sale) !== 0 && (
                          <>
                              Giá gốc: {" "}
                              <Text del weight="medium">
                                  <FormatMoney price={product.sale} />{" "}
                              </Text>
                              <br/>
                          </>
                      )}
                    <span className="main-price">
                      Giá: {" "}<FormatMoney  price={product.price} />
                    </span>
                      {Number(product.sale) !== 0 && (
                          <>
                              <br/>
                              <span style={{color: "black", fontWeight: "normal"}}>
                                Tiết kiệm:
                                <FormatMoney price={Number(product.sale) - Number(product.price)}/>
                              </span>
                          </>
                      )}

                  </Text>
                  <div className={"block"} >
                    <Text size="$xl" weight="normal">
                      Nhà phát hành:{" "}
                      <Link to={`/search?brand=${product.brand}`}>
                        {product.brand}
                      </Link>
                    </Text>
                    <Text size="$xl" weight="normal">
                      Thể loại:{" "}
                      <Link to={`/collection/${product.type.slug}`}>
                        {product.type.name}
                      </Link>
                    </Text>
                    <Text size="$xl" weight="normal">
                      Chất liệu:{" "}
                      {product.material}

                    </Text>
                  </div>
                  <div className="notice block">
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
                    <Button
                        shadow
                        color={"error"}
                        className={`${!product.soldOld && "btn"} product__view-btn block `}
                        auto
                        iconRight={<FaHeart fill="currentColor" />}
                        onClick={handleClick}
                        disabled={product.soldOld}
                    >
                      {product.soldOld ? "Hết hàng" : "Thêm vào mục yêu thích"}
                    </Button>
                    <div className={"shipping notice block"}>
                      <div>
                        <div className={"shipping__title"}>
                          <FaBox className={"shipping__icon main-color"} />
                          Giao hàng kín đáo
                        </div>
                        <ul>
                          <li>
                            Che tên sản phẩm, đóng gói kĩ càng.
                          </li>
                          <li>
                            Bảo mật danh tính.
                          </li>
                        </ul>
                      </div>
                      <div className={"shipping__box"}>
                        <div className={"shipping__title"}>
                          <FaTruck className={"shipping__icon main-color"} />
                         Hình thức vận chuyển
                        </div>
                        <ul>
                          <li>
                            Giao hàng toàn quốc từ 1-2 ngày.
                          </li>
                        </ul>
                      </div>
                    </div>
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
