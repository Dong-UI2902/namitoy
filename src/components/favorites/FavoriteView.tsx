import React from "react";
import { Favorite, useFavorite } from "../../contexts/Favorite";
import { Card, Grid, Text, Tooltip } from "@nextui-org/react";
import { FaTrashAlt } from "react-icons/fa";
import { fixImage, FormatMoney } from "../../contexts/Product/Constain";

const FavoriteView: React.FC<{ favorite: Favorite }> = ({ favorite }) => {
  const { removeFavorite } = useFavorite();
  return (
    <Card
      css={{
        p: "$6",
        backgroundColor: "#fff",
        margin: "20px 0",
      }}
      key={favorite._id}
    >
      <div className="view__icon">
        <Tooltip
          content="Xoá sản phẩm"
          color="error"
          onClick={() => {
            if (favorite._id) return removeFavorite(favorite._id);
            return;
          }}
        >
          <FaTrashAlt fill="#FF0080" size={25} />
        </Tooltip>
      </div>
      <Grid.Container>
        <Grid xs={12} md={4}>
          <div className="view__img">
            <img
              width="150px"
              height="150px"
              src={fixImage(favorite.product.image[0])}
            />
          </div>
        </Grid>
        <Grid xs={12} md={8}>
          <Card css={{ p: "$6", backgroundColor: "unset" }}>
            <Card.Header>
              <Text h4 css={{ lineHeight: "$md" }}>
                {favorite.product.title}
              </Text>
            </Card.Header>
            <Card.Body css={{ py: "$2" }}>
              <div
                style={{ display: "flex", alignItems: "center" }}
                className="product"
              >
                <Text size="$md">
                  <FormatMoney price={favorite.product.price} />
                </Text>
              </div>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Card>
  );
};

export default FavoriteView;
