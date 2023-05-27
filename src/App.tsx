import React from "react";
import "./App.scss";
import "./styles/Home.scss";
import Providers from "./views/Providers";
// eslint-disable-next-line import/no-extraneous-dependencies
import "react-multi-carousel/lib/styles.css";
import Nav from "./components/Nav/Nav";
import { Container } from "@nextui-org/react";
import Footer from "./components/Footer";
import "./styles/Breakpoint.scss";
import Routers from "./views/Routers";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div className="App" style={{ backgroundColor: "#ffffff" }}>
      <Providers>
        <Nav />
        <Routers />
        <hr />
        <Container lg>
          {location.pathname === "/login" ||
          location.pathname === "/register" ? (
            <></>
          ) : (
            <section className="section" style={{ paddingBottom: 0 }}>
              <Footer />
            </section>
          )}
        </Container>
      </Providers>
    </div>
  );
}

export default App;
