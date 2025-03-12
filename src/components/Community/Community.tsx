import React from "react";
import CardSocial from "./CardSocial";
import { Grid } from "@nextui-org/react";
import { FaDiscord, FaFacebook, FaUsers } from "react-icons/fa";
import {DISCORD_LINK, GROUP_LINK} from "../../config/Constain";

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
            desc={
              "Nơi các cao nhân giao lưu, trao đổi chiêu thức và post SEGGS"
            }
            href={GROUP_LINK}
          >
            <FaUsers />
          </CardSocial>
        </Grid>
        <Grid xs={12} sm={4}>
          <CardSocial
            name={"Discord"}
            desc={
              "NSFW Discord, đầy đủ uncen 18+ . Chơi game và giao lưu chat chit"
            }
            href={DISCORD_LINK}
          >
            <FaDiscord fill={"rgb(114, 137, 218)"} />
          </CardSocial>
        </Grid>
      </Grid.Container>
    </div>
  );
};

export default Community;
