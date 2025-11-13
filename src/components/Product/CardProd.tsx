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
    <Link to={`/product/detail/${product.slug}`} style={{ width: "100%" }}>
      <Card
        isPressable
        css={{
          filter: "none",
          borderRadius: "unset",
          padding: "5px",
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
            alt={product.title}
            className="product__card-img"
            loading="lazy"
          />
        </Card.Body>
        <Card.Footer
          css={{ display: "unset", padding: "0!important" }}
          className="product__card-description"
        >
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
              className="main-color product__card-price"
            >
              {<FormatMoney price={product.price} />}
            </Text>
            <Spacer x={0.5} />
            <Text
              css={{
                color: "$accents7",
                fontWeight: "$semibold",
                fontSize: "$sm",
              }}
              del
              className="product__card-price"
            >
              {(product.sale && Number(product.sale)) > 0 && (
                <FormatMoney price={product.sale} />
              )}
            </Text>
          </Row>
        </Card.Footer>
      </Card>
    </Link>
  );
};

export default CardProd;
