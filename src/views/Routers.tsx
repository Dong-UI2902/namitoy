import React from "react";
import Home from "./Home";
import ViewProduct from "./ViewProduct";
import Admin from "./Admin";
import Auth from "./Auth";
import { Route, Routes } from "react-router-dom";
import { useType } from "../contexts/Type/Provider";
import Collection from "./Collection";
import Favorites from "./Favorites";
import Layout from "../components/Layout";
import Searching from "./Searching";

const Routers = () => {
  const { types } = useType();

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        {types.map((item, index) => (
          <Route
            key={index}
            path={`collection/${(item.slug)}` || "/"}
            element={<Collection path={item.slug || ""} name={item.name} />}
          />
        ))}
        <Route path="/product/detail/:name" element={<ViewProduct />} />
        <Route path="/manager" element={<Admin path="all-product" />} />
        <Route
          path="/manager/all-product"
          element={<Admin path="all-product" />}
        />
        <Route path="/manager/form" element={<Admin path="form" />} />
        <Route path="/manager/form/:id" element={<Admin path="form" />} />
        <Route path="/manager/all-cart" element={<Admin path="all-cart" />} />
        <Route path="/manager/all-types" element={<Admin path="all-types" />} />
        <Route path="/table" element={<Admin path="table" />} />
        <Route path="/login" element={<Auth auth={"login"} />} />
        <Route path="/register" element={<Auth auth={"register"} />} />
        <Route path="/favorites/" element={<Favorites />} />
        <Route path="/search" element={<Searching />} />
      </Routes>
    </Layout>
  );
};

export default Routers;
