import React, { useEffect } from "react";
import {
  Badge,
  Button,
  Dropdown,
  Input,
  Link,
  Navbar,
  Text,
} from "@nextui-org/react";
import { useAuth } from "../../contexts/Auth";
import { useLocation } from "react-router-dom";
import DropdownUser from "./DropdownUser";
import { useType } from "../../contexts/Type/Provider";
import { FaAngleDown, FaHeart } from "react-icons/fa";
import { useFavorite } from "../../contexts/Favorite";

const Nav = () => {
  const { user } = useAuth();
  const { types } = useType();
  const { totalFavorite, getTotalFavorite } = useFavorite();
  const { pathname } = useLocation();

  const checkRoute = (route: string) => {
    const str = pathname.replace("/collection/", "");
    str.replace("/%20/g", " ");

    return route.toLowerCase() === decodeURI(str).toLowerCase();
  };

  useEffect(() => {
    getTotalFavorite();
  }, []);

  return (
    <Navbar variant="sticky" style={{ background: "#fff", zIndex: "99999" }}>
      <Navbar.Toggle showIn="xs" />
      <Navbar.Brand
        css={{
          "@xs": {
            w: "12%",
          },
        }}
      >
        <Text
          b
          hideIn="xs"
          css={{ fontFamily: "var(--second-font)", cursor: "pointer" }}
          onClick={() => (window.location.href = "/")}
        >
          <span style={{ color: "var(--first-color)" }}>Namitoy </span>
          Store
        </Text>
      </Navbar.Brand>
      <Navbar.Content
        enableCursorHighlight
        activeColor="secondary"
        hideIn="xs"
        variant="underline"
      >
        <Navbar.Link
          isActive={checkRoute("Am đao gia")}
          href={`/collection/Am%20đao%20gia`}
          css={{ margin: "0 5px" }}
        >
          Âm đạo giả
        </Navbar.Link>
        <Navbar.Link
          isActive={checkRoute("Nuoc hoa")}
          href={`/collection/Nuoc%20hoa`}
          css={{ margin: "0 5px" }}
        >
          Nước hoa
        </Navbar.Link>
        <Navbar.Link
          isActive={checkRoute("Am đao gia JAV Idol")}
          href={`/collection/Am%20đao%20gia%20JAV%20Idol`}
          css={{ margin: "0 5px" }}
        >
          Âm đạo giả JAV Idol
        </Navbar.Link>
        <Navbar.Link
          isActive={checkRoute("Anal Plug")}
          href={`/collection/Anal%20Plug`}
          css={{ margin: "0 5px" }}
        >
          Anal Plug
        </Navbar.Link>
        <Navbar.Link
          isActive={checkRoute("Phu kien")}
          href={`/collection/Phu%20kien`}
          css={{ margin: "0 5px" }}
        >
          Phụ kiện
        </Navbar.Link>
        <Dropdown isBordered>
          <Navbar.Item>
            <Dropdown.Button
              auto
              light
              css={{
                px: 0,
                dflex: "center",
                svg: { pe: "none" },
              }}
              iconRight={
                <FaAngleDown
                  size={14}
                  style={{ width: "14px!important", padding: 0 }}
                />
              }
              ripple={false}
            >
              Xem thêm
            </Dropdown.Button>
          </Navbar.Item>
          <Dropdown.Menu
            aria-label="ACME features"
            css={{
              $$dropdownMenuWidth: "340px",
              $$dropdownItemHeight: "70px",
              "& .nextui-dropdown-item": {
                py: "$4",
                // dropdown item left icon
                svg: {
                  color: "$secondary",
                  mr: "$4",
                },
                // dropdown item title
                "& .nextui-dropdown-item-content": {
                  w: "100%",
                  fontWeight: "$semibold",
                },
              },
            }}
          >
            <Dropdown.Item>
              <Navbar.Link
                isActive={checkRoute("khuon mong nguyen khoi")}
                href={`/collection/Khuon%20mong%20nguyen%20khoi`}
                css={{ margin: "0 5px" }}
              >
                Khuôn mông nguyên khối
              </Navbar.Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Navbar.Link
                isActive={checkRoute("Gel boi tron")}
                href={`/collection/Gel%20boi%20tron`}
                css={{ margin: "0 5px" }}
              >
                Gel bôi trơn
              </Navbar.Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Navbar.Link
                isActive={checkRoute("Trung rung nam/nu")}
                href={`/collection/Trung%20rung%20nam/nu`}
                css={{ margin: "0 5px" }}
              >
                Trứng rung nam/nữ
              </Navbar.Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Navbar.Link
                isActive={checkRoute("Bup be tinh duc")}
                href={`/collection/Bup%20be%20tinh%20duc`}
                css={{ margin: "0 5px" }}
              >
                Búp bê tình dục
              </Navbar.Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar.Content>
      <Navbar.Content
        css={{
          "@xs": {
            w: "25%",
            jc: "flex-end",
          },
        }}
      >
        <Navbar.Item
          css={{
            "@xsMax": {
              w: "100%",
              jc: "center",
            },
          }}
        >
          <Input
            clearable
            contentLeft={
              <svg
                fill="none"
                height={16 || 24}
                viewBox="0 0 24 24"
                width={16 || 24}
              >
                <path
                  d="M11.5 21a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19ZM22 22l-2-2"
                  stroke={"var(--nextui-colors-accents6)"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            }
            contentLeftStyling={false}
            css={{
              w: "100%",
              "@xsMax": {
                mw: "300px",
              },
              "& .nextui-input-content--left": {
                h: "100%",
                ml: "$4",
                dflex: "center",
              },
            }}
            placeholder="Search..."
          />
        </Navbar.Item>
        {!user ? (
          <Navbar.Content>
            <Navbar.Item>
              <Button auto flat as={Link} href="/login">
                Đăng nhập
              </Button>
            </Navbar.Item>
          </Navbar.Content>
        ) : (
          <>
            <Badge color="error" content={totalFavorite}>
              <Navbar.Link href={`/favorites`} css={{ margin: "0 5px" }}>
                <FaHeart size={25} fill="#F31260" />
              </Navbar.Link>
            </Badge>
            <DropdownUser />
          </>
        )}
      </Navbar.Content>
      <Navbar.Collapse>
        {types.map((item, index) => (
          <Navbar.CollapseItem
            key={item._id}
            activeColor="secondary"
            css={{
              color: index === types.length - 1 ? "$error" : "",
            }}
            isActive={index === 2}
          >
            <Link
              color="inherit"
              // @ts-ignore
              css={{
                minWidth: "100%",
              }}
              href="#"
            >
              {item.name}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
