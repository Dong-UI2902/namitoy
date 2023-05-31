import React from "react";
import { Card, Grid, Text } from "@nextui-org/react";

const CardPolicy: React.FC<{ title: string; children: any }> = ({
  title,
  children,
}) => {
  return (
    <Card css={{ p: "$6", mw: "400px" }}>
      <Card.Header>
        <img
          alt="nextui logo"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
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
