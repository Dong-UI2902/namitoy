import React from "react";
import { Button, Card, Grid, Row, Spacer, Text } from "@nextui-org/react";
import "../../styles/MiniView.scss";
// eslint-disable-next-line import/no-extraneous-dependencies
import { FaRegStar } from "react-icons/fa";
import { Product } from "../../contexts/Product";
import { fixImage, FormatMoney } from "../../contexts/Product/Constain";

const MiniView: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="view">
      {product?._id ? (
        <Card css={{ p: "$6", backgroundColor: "#fff" }}>
          <div className="view__icon">
            <FaRegStar />
          </div>
          <Grid.Container>
            <Grid
              xs={12}
              sm={5}
              md={4}
              style={{ height: "280px" }}
              alignItems="center"
            >
              <div className="view__img">
                <img src={fixImage(product.image[0])} />
              </div>
            </Grid>
            <Grid xs={12} sm={7} md={8}>
              <Card css={{ p: "$6", backgroundColor: "unset" }}>
                <Card.Header>
                  <Text
                    className="product__card-title"
                    h4
                    css={{ lineHeight: "$xs" }}
                  >
                    {product.title}
                  </Text>
                </Card.Header>
                <Card.Body css={{ py: "$2" }}>
                  <Row wrap="wrap" justify="flex-start" align="center">
                    <Text>Chất liệu: {product.material}</Text>
                    <Spacer x={2} />
                    <Text>Thương hiệu: {product.brand}</Text>
                  </Row>
                  <Spacer y={2} />
                  <Row wrap="wrap" justify="flex-start">
                    <Text size="$xl" b className="main-color">
                      <FormatMoney price={product.price} />
                    </Text>
                    <Spacer x={2} />
                    <Text
                      size="$xl"
                      del
                      css={{
                        color: "$accents7!important",
                      }}
                    >
                      <FormatMoney price={product.sale} />
                    </Text>
                    <Spacer x={0.5} />
                    {/*<Text color="success" size="$xl" b>*/}
                    {/*  20% off*/}
                    {/*</Text>*/}
                  </Row>
                </Card.Body>
                <Card.Footer>
                  <Button className="btn" auto>
                    Yêu thích
                  </Button>
                  <Spacer x={1} />
                  <Button bordered className="border main-color" auto>
                    Xem thêm
                  </Button>
                </Card.Footer>
              </Card>
            </Grid>
          </Grid.Container>
        </Card>
      ) : (
        <></>
      )}
    </div>
  );
};

export default MiniView;
