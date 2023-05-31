import React from "react";
import { Card, Row, Spacer, Text } from "@nextui-org/react";
import { Product } from "../../contexts/Product";
import {
  fixImage,
  FormatMoney,
  GetPercent,
} from "../../contexts/Product/Constain";
import { Link } from "react-router-dom";

const CardProd: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <Link to={`/product/${product._id}`}>
      <Card
        isPressable
        css={{
          filter: "none",
          borderRadius: "unset",
        }}
      >
        {product.soldOld && <div className="sold_out">Hết hàng</div>}
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 1 }}>
          <Text h4 className="main-color">
            <GetPercent sale={product.sale} price={product.price} />
          </Text>
        </Card.Header>
        <Card.Body
          css={{
            p: 0,
          }}
        >
          <Card.Image
            src={fixImage(product.image[0])}
            objectFit="cover"
            width={"auto"}
            height={300}
            alt={product.title}
            css={{
              filter: `${product.soldOld ? "grayscale(1)" : "grayscale(0)"}`,
            }}
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
              {product.sale && <FormatMoney price={product.sale} />}
            </Text>
          </Row>
        </Card.Footer>
      </Card>
    </Link>
  );
};

export default CardProd;
