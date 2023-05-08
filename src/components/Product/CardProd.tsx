import React from "react";
import { Card, Row, Spacer, Text } from "@nextui-org/react";

const CardProd = () => {
  return (
    <Card isPressable css={{ filter: "none", borderRadius: "unset" }}>
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 1 }}>
        <Text h4 className="main-color">
          20%
        </Text>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={"https://nextui.org/images/fruit-3.jpeg"}
          objectFit="cover"
          width="100%"
          height={300}
        />
      </Card.Body>
      <Card.Footer css={{ display: "unset" }}>
        <Text className="product__card-title" b>
          Cherry
        </Text>
        <Row wrap="wrap" justify="flex-start" align="center">
          <Text
            css={{
              color: "$accents7",
              fontWeight: "$semibold",
              fontSize: "$sm",
            }}
          >
            $10.00
          </Text>
          <Spacer x={1} />
          <Text
            css={{
              color: "$accents7",
              fontWeight: "$semibold",
              fontSize: "$sm",
            }}
          >
            $10.00
          </Text>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default CardProd;
