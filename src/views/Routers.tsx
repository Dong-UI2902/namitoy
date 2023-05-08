import React from "react";
import Home from "./Home";
import Product from "./Product";
import Admin from "./Admin";
import Auth from "./Auth";
import { Route, Routes } from "react-router-dom";
import { useType } from "../contexts/Type/Provider";
import Collection from "./Collection";

const Routers = () => {
  const { types, handleHref } = useType();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {types.map((item, index) => (
          <Route
            key={index}
            path={handleHref(item.name) || "/"}
            element={<Collection path={item.name} />}
          />
        ))}
        <Route path="/product" element={<Product />} />
        <Route path="/manager" element={<Admin path="dashboard" />} />
        <Route
          path="/manager/all-product"
          element={<Admin path="all-product" />}
        />
        <Route path="/manager/form" element={<Admin path="form" />} />
        <Route path="/manager/form/:id" element={<Admin path="form" />} />
        <Route path="/manager/all-cart" element={<Admin path="all-cart" />} />
        <Route path="/table" element={<Admin path="table" />} />
        <Route path="/login" element={<Auth auth={"login"} />} />
        <Route path="/register" element={<Auth auth={"register"} />} />
      </Routes>
    </>
  );
};

export default Routers;
