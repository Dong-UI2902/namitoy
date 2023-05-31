import React from "react";
import { Card, Grid, Link, Text } from "@nextui-org/react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { IconContext } from "react-icons";

const CardSocial: React.FC<{
  name: string;
  desc: string;
  href: string;
  children: any;
}> = ({ name, desc, href, children }) => {
  const handleLink = () => {
    if (href.indexOf("https") >= 0) return href;
    return "https://www.facebook.com/nammushie";
  };

  return (
    <div>
      <Card css={{ p: "$6", mw: "400px" }}>
        <Card.Header>
          <IconContext.Provider value={{ size: "2em" }}>
            <div>{children}</div>
          </IconContext.Provider>
          <Grid.Container css={{ pl: "$6" }}>
            <Text h4 css={{ lineHeight: "$xs" }}>
              {name}
            </Text>
          </Grid.Container>
        </Card.Header>
        <Card.Body css={{ py: "$2" }}>
          <Text>{desc}</Text>
        </Card.Body>
        <Card.Footer>
          <Link color="primary" target="_blank" href={handleLink()}>
            <div
              style={{
                whiteSpace: "nowrap",
                width: "300px",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {href}
            </div>
          </Link>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default CardSocial;
