import React, { useEffect, useState } from "react";
import { Card, Row, Spacer, Text } from "@nextui-org/react";
import { Product } from "../../contexts/Product";
import { fixImage, FormatMoney } from "../../contexts/Product/Constain";

const CardProd: React.FC<{ product: Product }> = ({ product }) => {
  const handleClick = () => {
    window.location.href = `/product/${product._id}`;
  };
  const [percent, setPercent] = useState<any>();

  useEffect(() => {
    if (product.sale) {
      const a = (Number(product.price) / Number(product.sale)) * 100 - 100;
      return setPercent(Math.round(a));
    }

    return setPercent("");
  }, []);

  return (
    <Card
      isPressable
      css={{ filter: "none", borderRadius: "unset" }}
      onClick={handleClick}
    >
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 1 }}>
        <Text h4 className="main-color">
          {percent && `${percent}%`}
        </Text>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={fixImage(product.image[0])}
          objectFit="cover"
          width="100%"
          height={250}
          alt={product.title}
        />
      </Card.Body>
      <Card.Footer css={{ display: "unset" }}>
        <Text className="product__card-title" b>
          {product.title}
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
            {<FormatMoney price={product.price} />}
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
            {product.sale}
          </Text>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default CardProd;
