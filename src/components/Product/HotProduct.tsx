import React, { useEffect, useState } from "react";
import { Grid, Text } from "@nextui-org/react";
import MiniView from "./MiniView";
import Slide from "./Slide";
import { useProduct } from "../../contexts/Product";

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
      {hot.length > 0 && (
        <Grid.Container
          css={{ padding: 0 }}
          gap={2}
          justify="center"
          alignItems="center"
        >
          <Grid xs={12} sm={7} md={6}>
            <MiniView product={hot[position]} />
          </Grid>
          <Grid
            xs={12}
            sm={5}
            md={6}
            justify="center"
            className="slide"
            css={{ display: "unset!important" }}
          >
            <div>
              <Slide hot={hot} callback={callback} />
            </div>
          </Grid>
        </Grid.Container>
      )}
    </div>
  );
};

export default HotProduct;
