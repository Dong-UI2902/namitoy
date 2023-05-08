import React from "react";
import { Card, Grid, Row, Spacer, Text } from "@nextui-org/react";
import "../../styles/Product.scss";
import CardProd from "./CardProd";

const list = [
  {
    title: "Orange 1231209381283128 123012kjashbdak",
    img: "/images/fruit-1.jpeg",
    price: "$5.50",
  },
  {
    title: "Tangerine",
    img: "/images/fruit-2.jpeg",
    price: "$3.00",
  },
  {
    title: "Cherry",
    img: "/images/fruit-3.jpeg",
    price: "$10.00",
  },
  {
    title: "Lemon",
    img: "/images/fruit-4.jpeg",
    price: "$5.30",
  },
  {
    title: "Avocado",
    img: "/images/fruit-5.jpeg",
    price: "$15.70",
  },
  {
    title: "Lemon 2",
    img: "/images/fruit-6.jpeg",
    price: "$8.00",
  },
  {
    title: "Banana",
    img: "/images/fruit-7.jpeg",
    price: "$7.50",
  },
  {
    title: "Watermelon",
    img: "/images/fruit-8.jpeg",
    price: "$12.20",
  },
];

const Products = () => {
  return (
    <div className="product">
      <Grid.Container gap={2} justify="flex-start">
        {list.map((item, index) => (
          <Grid xs={6} sm={3} key={index}>
            <Card isPressable css={{ filter: "none", borderRadius: "unset" }}>
              <Card.Header css={{ position: "absolute", zIndex: 1, top: 1 }}>
                <Text h4 className="main-color">
                  20%
                </Text>
              </Card.Header>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src={"https://nextui.org" + item.img}
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
                  >
                    {item.price}
                  </Text>
                  <Spacer x={1} />
                  <Text
                    css={{
                      color: "$accents7",
                      fontWeight: "$semibold",
                      fontSize: "$sm",
                    }}
                  >
                    {item.price}
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
