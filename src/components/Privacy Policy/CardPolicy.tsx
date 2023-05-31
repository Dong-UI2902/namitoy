import React from "react";
import { Card, Grid, Text } from "@nextui-org/react";

const CardPolicy: React.FC<{ title: string; url: string; children: any }> = ({
  title,
  url,
  children,
}) => {
  return (
    <Card css={{ p: "$6", mw: "400px" }}>
      <Card.Header>
        <img
          alt="nextui logo"
          src={`/assets/img/${url}.png`}
          width="34px"
          height="34px"
        />
        <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={12}>
            <Text
              h4
              css={{
                lineHeight: "$xs",
              }}
              className="main-color"
            >
              {title}
            </Text>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body
        css={{
          py: "$2",
        }}
      >
        {children}
      </Card.Body>
    </Card>
  );
};

export default CardPolicy;
