import React from "react";
import { Grid, Text } from "@nextui-org/react";
import MiniView from "./MiniView";
import Slide from "./Slide";

const HotProduct = () => {
  return (
    <div>
      <Grid.Container gap={1} justify="flex-start">
        <Grid xs={6}>
          <Text h1 color="var(--first-color)">
            Các mặt hàng <br />
            cực hot hiện nay
          </Text>
        </Grid>
      </Grid.Container>
      <Grid.Container
        css={{ padding: 0 }}
        gap={2}
        justify="center"
        alignItems="center"
      >
        <Grid xs={12} md={6}>
          <MiniView />
        </Grid>
        <Grid
          xs={12}
          md={6}
          justify="center"
          className="slide"
          css={{ display: "unset!important" }}
        >
          <Slide />
        </Grid>
      </Grid.Container>
    </div>
  );
};

export default HotProduct;
