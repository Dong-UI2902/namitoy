import React from "react";
import { Button, Card, Grid, Row, Spacer, Text } from "@nextui-org/react";
import "../../styles/MiniView.scss";
// eslint-disable-next-line import/no-extraneous-dependencies
import { FaRegStar } from "react-icons/fa";
import { Product } from "../../contexts/Product";
import {
  fixImage,
  FormatMoney,
  GetPercent,
} from "../../contexts/Product/Constain";
import { Link } from "react-router-dom";
import { useFavorite } from "../../contexts/Favorite";
import { FAVORITE } from "../../contexts/Favorite/Constain";
import { useAuth } from "../../contexts/Auth";
import Noti from "../Admin/Noti";

const MiniView: React.FC<{ product: Product }> = ({ product }) => {
  const { addToFavorite } = useFavorite();
  const { user } = useAuth();
  const [visible, setVisible] = React.useState(false);

  const handleClick = () => {
    if (user?._id) return addToFavorite({ ...FAVORITE, product });
    return setVisible(true);
  };

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
              <Text
                h4
                className="main-color"
                css={{ position: "absolute", zIndex: 1, top: 10 }}
              >
                <GetPercent sale={product.sale} price={product.price} />
              </Text>
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
                      {(product.sale && Number(product.sale)) > 0 && (
                        <FormatMoney price={product.sale} />
                      )}
                    </Text>
                    <Spacer x={0.5} />
                    {/*<Text color="success" size="$xl" b>*/}
                    {/*  20% off*/}
                    {/*</Text>*/}
                  </Row>
                </Card.Body>
                <Card.Footer>
                  <Button className="btn" auto onClick={handleClick}>
                    Yêu thích
                  </Button>
                  <Spacer x={1} />
                  <Link to={`/product/${product._id}`}>
                    <Button
                      bordered
                      className="border main-color"
                      auto
                      disabled
                    >
                      Xem thêm
                    </Button>
                  </Link>
                </Card.Footer>
              </Card>
            </Grid>
          </Grid.Container>
        </Card>
      ) : (
        <></>
      )}
      <Noti
        visible={visible}
        setVisible={setVisible}
        btnHandle={
          <Button
            bordered
            auto
            onPress={() => (window.location.href = "/login")}
          >
            Đăng nhập
          </Button>
        }
      >
        <center>
          Bạn chưa đăng nhập.
          <br />
          Hãy đăng nhập để lưu những sản phẩm mà mình yêu thích nhé!
        </center>
      </Noti>
    </div>
  );
};

export default MiniView;
