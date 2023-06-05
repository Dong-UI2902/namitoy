import React, { useEffect, useState } from "react";
import { Container, Grid, Link, Loading, Text } from "@nextui-org/react";
import "../styles/Store.scss";
import CardPolicy from "../components/Privacy Policy/CardPolicy";
import Community from "../components/Community/Community";
// eslint-disable-next-line import/no-extraneous-dependencies
import ScrollReveal from "scrollreveal";
import { Product } from "../contexts/Product";
import productService from "../contexts/Product/services";
import Products from "../components/Product/Products";
import HotProduct from "../components/Product/HotProduct";

export const sr = ScrollReveal({
  origin: "top",
  distance: "300px",
  duration: 1500,
  delay: 400,
  // reset: true,
});

const Home = () => {
  const [newProducts, setNewProducts] = useState<Product[]>([]);
  const [list1, setList1] = useState<Product[]>([]);
  const [list2, setList2] = useState<Product[]>([]);
  const [loading1, setLoading1] = useState<boolean>(false);
  const [loading2, setLoading2] = useState<boolean>(false);
  const [loading3, setLoading3] = useState<boolean>(false);

  const getNewProducts = () => {
    setLoading1(true);
    productService
      .getNewProducts()
      .then((res) => {
        setNewProducts(res.data);
        setLoading2(true);
        setLoading1(false);
        return productService.getProductsByType("64607f556375d21ab96f6467", 12);
      })
      .then((res) => {
        setList1(res.data);
        setLoading3(true);
        setLoading2(false);
        return productService.getProductsByType("646b8bf4cc4ef18ca8167e7b", 12);
      })
      .then((res) => setList2(res.data))
      .catch()
      .finally(() => setLoading3(false));
  };

  useEffect(() => {
    sr.reveal(`.home__data`, { origin: "bottom", delay: 200 });
    sr.reveal(`.home__title`, { origin: "bottom", delay: 300 });
    sr.reveal(`.home__description`, { origin: "bottom", delay: 600 });
    sr.reveal(`.home__girl`, { origin: "right", delay: 300 });
    sr.reveal(`.home__toy1`, { origin: "top", delay: 1500 });
    sr.reveal(`.home__toy2`, { origin: "top", delay: 1600 });
    sr.reveal(`.home__toy:nth-child(1)`, { origin: "top", delay: 1300 });
    sr.reveal(`.home__toy:nth-child(2)`, { origin: "top", delay: 1400 });
    sr.reveal(`.home__toy:nth-child(3)`, { origin: "top", delay: 1500 });
    getNewProducts();
    document.title = `Trang chủ`;
  }, []);

  return (
    <div className="store">
      <section className="home" id="home">
        <div className="home__shape-small" />
        <div className="home__shape-big" />
        <img
          src="/assets/img/shape-bg.png"
          alt="shape image"
          className="home__shape-bg"
        />
        <Container md>
          <Grid.Container
            gap={2}
            justify="center"
            alignItems="center"
            className="home__container"
          >
            <Grid md={6} justify="center">
              <div className="home__data">
                <h1 className="home__title">
                  <span>Namitoy </span>
                  Store
                </h1>
                <p className="home__description">
                  Ở đây có bán seggs toy <br />
                  Your pleasure - Our happiness
                </p>
              </div>
            </Grid>
            <Grid md={6} justify="center">
              <div className="home__images">
                <div className="home__toy-animate">
                  <img
                    src="assets/img/bg-header.png"
                    alt="juice image"
                    className="home__girl"
                  />
                </div>
                <img
                  src="assets/img/layer-1.png"
                  alt="toy"
                  className="home__toy1 animation"
                />
                <img
                  src="assets/img/layer-2.png"
                  alt="toy"
                  className="home__toy2 animation"
                />
                <div>
                  <img
                    src="assets/img/layer-3.png"
                    alt="leaf image"
                    className="home__toy animation"
                  />
                  <img
                    src="assets/img/layer-4.png"
                    alt="leaf image"
                    className="home__toy animation"
                  />
                  <img
                    src="assets/img/layer-5.png"
                    alt="leaf image"
                    className="home__toy animation"
                  />
                </div>
              </div>
            </Grid>
          </Grid.Container>
        </Container>
      </section>
      <Container lg>
        <section className="policy section">
          <Grid.Container gap={2}>
            <Grid md={3} sm={6} xs={12} justify="center">
              <CardPolicy title={"Cam kết & Giao hàng"} url="ui1">
                <Text>
                  Ship hàng kín đáo, che tên sản phẩm, đóng gói kĩ càng. Bảo mật
                  danh tính.
                  <br />
                  5% Discount cho đơn hàng tiếp theo với tất cả các reviews kèm
                  hình ảnh toys cho shop.
                </Text>
              </CardPolicy>
            </Grid>
            <Grid md={3} sm={6} xs={12} justify="center">
              <CardPolicy title={"Thông tin liên hệ"} url="ui2">
                <Text>
                  Tư vấn online/hotline/Zalo/Whatsapp: 0933032964 – Namitoys
                </Text>
                Fanpage:{" "}
                <Link
                  color="secondary"
                  href="https://www.facebook.com/namitoyshop"
                >
                  <div
                    style={{
                      whiteSpace: "nowrap",
                      width: "250px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    https://www.facebook.com/namitoyshop
                  </div>
                </Link>
              </CardPolicy>
            </Grid>
            <Grid md={3} sm={6} xs={12} justify="center">
              <CardPolicy title={"Hình thức giao hàng"} url="ui3">
                Cam kết hàng chính hãng, đầy đủ mã QR và mã vạch.
                <br />
                Shop có kho hàng phong phú, nhiều mẫu mã và luôn cập nhật
                onahole trendy bên Nhật Bản cho quý khách lựa chọn.
              </CardPolicy>
            </Grid>
            <Grid md={3} sm={6} xs={12} justify="center">
              <CardPolicy title={"Tiêu chí"} url="ui4">
                Chúng tôi sẽ mang đến cho khách hàng dịch vụ nhanh hơn, tốt hơn
                và sản phẩm ngày càng tốt hơn, rất mong được sự đóng góp ý kiến
                quý báu của quý khách để chúng tôi phát triển trong tương lai.
              </CardPolicy>
            </Grid>
          </Grid.Container>
        </section>
        <section className="section">
          <HotProduct />
        </section>
        <section className="section">
          <center>
            <Link href={"#"} className="title main-color">
              Hàng mới cập nhật
            </Link>
          </center>
          {loading1 ? (
            <center>
              <Loading size="lg" />
            </center>
          ) : (
            <Products listProducts={newProducts} />
          )}
        </section>
        <section className="section">
          <center>
            <Link
              href={"/collection/Am%20đao%20gia"}
              className="title main-color"
            >
              Âm đạo giả
            </Link>
          </center>
          {loading2 ? (
            <center>
              <Loading size="lg" />
            </center>
          ) : (
            <Products listProducts={list1} />
          )}
        </section>
        <section className="section">
          <center>
            <Link
              href="/collection/Am%20đao%20gia%20JAV%20Idol"
              className="title main-color"
            >
              Âm đạo giả Idols
            </Link>
          </center>
          {loading3 ? (
            <center>
              <Loading size="lg" />
            </center>
          ) : (
            <Products listProducts={list2} />
          )}
        </section>
      </Container>
      <hr />
      <Container lg>
        <section className="section">
          <center className="title main-color">
            Cộng đồng
            <Text>Hãy tham gia cộng đồng của chúng tôi.</Text>
          </center>
          <Community />
        </section>
      </Container>
    </div>
  );
};

export default Home;
