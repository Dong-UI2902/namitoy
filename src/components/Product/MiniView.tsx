import React from "react";
import { Card, Text, Grid, Button, Spacer, Row } from "@nextui-org/react";
import "../../styles/MiniView.scss";
// eslint-disable-next-line import/no-extraneous-dependencies
import { FaRegStar } from "react-icons/fa";

const MiniView = () => {
  return (
    <div className="view">
      <Card css={{ p: "$6", backgroundColor: "#fff" }}>
        <div className="view__icon">
          <FaRegStar />
        </div>
        <Grid.Container>
          <Grid xs={12} md={4}>
            <div className="view__img">
              <img src="/assets/img/bg-header.png" />
            </div>
          </Grid>
          <Grid xs={12} md={8}>
            <Card css={{ p: "$6", backgroundColor: "unset" }}>
              <Card.Header>
                <Text h4 css={{ lineHeight: "$xs" }}>
                  Next UI
                </Text>
              </Card.Header>
              <Card.Body css={{ py: "$2" }}>
                <Text>
                  Make beautiful websites regardless of your design experience.
                </Text>
                <Row wrap="wrap" justify="flex-start" align="center">
                  <Text size="$xl" b>
                    $279.97
                  </Text>
                  <Spacer x={2} />
                  <Text
                    size="$xl"
                    b
                    del
                    css={{
                      color: "$accents7!important",
                    }}
                  >
                    $350
                  </Text>
                  <Spacer x={0.5} />
                  <Text color="success" size="$xl" b>
                    20% off
                  </Text>
                </Row>
              </Card.Body>
              <Card.Footer>
                <Button className="btn" auto>
                  Thêm vào giỏ hàng
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
    </div>
  );
};

export default MiniView;
