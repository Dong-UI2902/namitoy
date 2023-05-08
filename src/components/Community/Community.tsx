import React from "react";
import CardSocial from "./CardSocial";
import { Grid } from "@nextui-org/react";
import { FaDiscord, FaFacebook, FaUsers } from "react-icons/fa";

const Community = () => {
  return (
    <div>
      <Grid.Container gap={2} justify="center">
        <Grid xs={12} sm={4}>
          <CardSocial
            name={"Đỗ Kim Phương"}
            desc={"Namichu - Người đứng đầu cộng đồng Cao Nhân Luôn Bay Group"}
            href={"https://www.facebook.com/nammushie"}
          >
            <FaFacebook fill={"#0A7CFF"} />
          </CardSocial>
        </Grid>
        <Grid xs={12} sm={4}>
          <CardSocial
            name={"Cão Yêu Chó Mèo"}
            desc={"Namichu - Người đứng đầu cộng đồng Cao Nhân Luôn Bay Group"}
            href={"Nhắn tin cho chủ group 😉😉"}
          >
            <FaUsers />
          </CardSocial>
        </Grid>
        <Grid xs={12} sm={4}>
          <CardSocial
            name={"Discord"}
            desc={"Namichu - Người đứng đầu cộng đồng Cao Nhân Luôn Bay Group"}
            href={"https://discord.gg/caoxbanzai"}
          >
            <FaDiscord fill={"rgb(114, 137, 218)"} />
          </CardSocial>
        </Grid>
      </Grid.Container>
    </div>
  );
};

export default Community;
