import React, { useEffect, lazy } from "react";
import { Container, Grid, Text, Link } from "@nextui-org/react";
import "../styles/Store.scss";
import CardPolicy from "../components/Privacy Policy/CardPolicy";
import HotProduct from "../components/Product/HotProduct";
import Community from "../components/Community/Community";
// eslint-disable-next-line import/no-extraneous-dependencies
import ScrollReveal from "scrollreveal";

const List1 = lazy(() => import("../components/Product/home/List1"));
const List2 = lazy(() => import("../components/Product/home/List2"));
const List3 = lazy(() => import("../components/Product/home/List3"));

export const sr = ScrollReveal({
  origin: "top",
  distance: "300px",
  duration: 1500,
  delay: 400,
  // reset: true,
});

const Home = () => {
  useEffect(() => {
    sr.reveal(`.home__title`, { origin: "bottom", delay: 200 });
    sr.reveal(`.home__description`, { origin: "bottom", delay: 300 });
    sr.reveal(`.home__button`, { origin: "bottom", delay: 400 });
    sr.reveal(`.home__girl`, { origin: "right", delay: 600 });
    sr.reveal(`.home__toy1`, { origin: "top", delay: 1500 });
    sr.reveal(`.home__toy2`, { origin: "top", delay: 1600 });
    sr.reveal(`.home__toy:nth-child(1)`, { origin: "top", delay: 1300 });
    sr.reveal(`.home__toy:nth-child(2)`, { origin: "top", delay: 1400 });
    sr.reveal(`.home__toy:nth-child(3)`, { origin: "top", delay: 1500 });
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
          <Grid.Container gap={2} justify="flex-start">
            <Grid md={3} xs={12}>
              <CardPolicy />
            </Grid>
            <Grid md={3} xs={12}>
              <CardPolicy />
            </Grid>
            <Grid md={3} xs={12}>
              <CardPolicy />
            </Grid>
            <Grid md={3} xs={12}>
              <CardPolicy />
            </Grid>
          </Grid.Container>
        </section>
        <section className="section">
          <HotProduct />
        </section>
        <section className="section">
          <center>
            <Link href="#" className="title main-color">
              Hàng mới cập nhật
            </Link>
          </center>
          <List1 />
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
          <List2 />
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
          <List3 />
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
