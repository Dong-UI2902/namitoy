import React from "react";
import { Text } from "@nextui-org/react";
import {DISCORD_LINK} from "../config/Constain";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <center>
        <div>
          Chúng tôi luôn cung cấp cho bạn những dịch vụ tốt nhất
          <br />
          Hãy tận hưởng chúng, chúc các bạn vui vẻ!
        </div>
        <div style={{ margin: "10px 0" }}>
          <Text size="$md">
            Copyright {year} © Namitoy Paradise, made with{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-heart-fill"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
              ></path>
            </svg>{" "}
            by
            <a
              href={DISCORD_LINK}
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              CAOX{" "}
            </a>
            for a better web.
          </Text>
        </div>
      </center>
    </div>
  );
};

export default Footer;
