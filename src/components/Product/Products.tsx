import React from "react";
import { Grid } from "@nextui-org/react";
import "../../styles/Product.scss";
import { Product } from "../../contexts/Product";
import CardProd from "./CardProd";

const Products: React.FC<{ listProducts: Product[] }> = ({ listProducts }) => {
  return (
    <div className="product">
      <Grid.Container gap={2} justify="flex-start" style={{ padding: 0 }}>
        {listProducts.map((item, index) => (
          <Grid xs={6} sm={4} md={3} key={index} justify={"center"}>
            <CardProd product={item} />
          </Grid>
        ))}
      </Grid.Container>
    </div>
  );
};

export default Products;
