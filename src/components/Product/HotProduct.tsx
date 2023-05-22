import React, { useEffect, useState } from "react";
import { Grid, Text } from "@nextui-org/react";
import MiniView from "./MiniView";
import Slide from "./Slide";
import { useProduct } from "../../contexts/Product";
import CardProd from "./CardProd";

const HotProduct = () => {
  const { getHotProduct, hot } = useProduct();
  const [position, setPosition] = useState<number>(0);

  useEffect(() => {
    getHotProduct();
  }, []);

  const callback = function (index: number) {
    setPosition(index);
  };

  return (
    <div>
      <Text
        color="var(--first-color)"
        className="title"
        weight="semibold"
        transform="uppercase"
      >
        Các mặt hàng <br />
        cực hot hiện nay
      </Text>
      {/*<center>*/}
      {/*  <Link to="#" className="title main-color">*/}
      {/*    Các mặt hàng <br />*/}
      {/*    cực hot hiện nay*/}
      {/*  </Link>*/}
      {/*</center>*/}
      <Grid.Container
        css={{ padding: 0 }}
        gap={2}
        justify="center"
        alignItems="center"
      >
        <Grid xs={12} md={6}>
          <MiniView product={hot[position]} />
        </Grid>
        <Grid
          xs={12}
          md={6}
          justify="center"
          className="slide"
          css={{ display: "unset!important" }}
        >
          <Slide callback={callback} />
        </Grid>
      </Grid.Container>
    </div>
  );
};

export default HotProduct;
