import React from "react";
import { Card, Grid, Row, Spacer, Text } from "@nextui-org/react";
import "../../styles/Product.scss";
import { Product } from "../../contexts/Product";
import { fixImage, FormatMoney } from "../../contexts/Product/Constain";

const Products: React.FC<{ listProducts: Product[] }> = ({ listProducts }) => {
  return (
    <div className="product">
      <Grid.Container gap={2} justify="flex-start">
        {listProducts.map((item, index) => (
          <Grid xs={6} sm={3} key={index}>
            <Card isPressable css={{ filter: "none", borderRadius: "unset" }}>
              <Card.Header css={{ position: "absolute", zIndex: 1, top: 1 }}>
                <Text h4 className="main-color">
                  20%
                </Text>
              </Card.Header>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src={fixImage(item.image[0])}
                  objectFit="cover"
                  width="100%"
                  height={200}
                  alt={item.title}
                />
              </Card.Body>
              <Card.Footer css={{ display: "unset" }}>
                <Text className="product__card-title" b>
                  {item.title}
                </Text>
                <Row wrap="wrap" justify="flex-start" align="center">
                  <Text
                    css={{
                      color: "$accents7",
                      fontWeight: "$semibold",
                      fontSize: "$sm",
                    }}
                    className="main-color"
                  >
                    {<FormatMoney price={item.price} />}
                  </Text>
                  <Spacer x={1} />
                  <Text
                    css={{
                      color: "$accents7",
                      fontWeight: "$semibold",
                      fontSize: "$sm",
                    }}
                    del
                  >
                    {item.sale}
                  </Text>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </div>
  );
};

export default Products;
