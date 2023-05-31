import React, { SyntheticEvent, useEffect, useRef, useState } from "react";
import { Badge, Button, Dropdown, Link, Navbar, Text } from "@nextui-org/react";
import { useAuth } from "../../contexts/Auth";
import {
  Link as LinkSearch,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import DropdownUser from "./DropdownUser";
import { useType } from "../../contexts/Type/Provider";
import { FaAngleDown, FaHeart } from "react-icons/fa";
import { useFavorite } from "../../contexts/Favorite";

const Nav = () => {
  const { user } = useAuth();
  const { totalFavorite, getTotalFavorite } = useFavorite();
  const { pathname } = useLocation();
  const { types, handleHref } = useType();
  const [input, setInput] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const searching = searchParams.get("key");
  const myRef = useRef(null);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    // @ts-ignore
    myRef.current.click();
  };

  const checkRoute = (route: string) => {
    const str = pathname.replace("/collection/", "");
    str.replace("/%20/g", " ");

    return route.toLowerCase() === decodeURI(str).toLowerCase();
  };

  useEffect(() => {
    if (user?._id) {
      getTotalFavorite();
    }
  }, []);

  useEffect(() => {
    if (searching) {
      setInput(searching);
    } else {
      setInput("");
    }
  }, [searching]);

  return (
    <Navbar variant="sticky" style={{ background: "#fff", zIndex: "99999" }}>
      <Navbar.Toggle showIn="md" />
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
        hideIn="md"
        variant="underline"
      >
        <Navbar.Link
          isActive={checkRoute("Am đao gia")}
          href={`/collection/Am%20đao%20gia`}
        >
          Âm đạo giả
        </Navbar.Link>
        <Navbar.Link
          isActive={checkRoute("Am đao gia JAV Idol")}
          href={`/collection/Am%20đao%20gia%20JAV%20Idol`}
        >
          Âm đạo giả JAV Idol
        </Navbar.Link>
        <Navbar.Link
          isActive={checkRoute("khuon mong nguyen khoi")}
          href={`/collection/Khuon%20mong%20nguyen%20khoi`}
        >
          Khuôn mông nguyên khối
        </Navbar.Link>
        <Navbar.Link
          isActive={checkRoute("Bup be tinh duc")}
          href={`/collection/Bup%20be%20tinh%20duc`}
        >
          Búp bê tình dục
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
                isActive={checkRoute("Anal Plug")}
                href={`/collection/Anal%20Plug`}
              >
                Anal Plug
              </Navbar.Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Navbar.Link
                isActive={checkRoute("Gel boi tron")}
                href={`/collection/Gel%20boi%20tron`}
              >
                Gel bôi trơn
              </Navbar.Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Navbar.Link
                isActive={checkRoute("Trung rung nam/nu")}
                href={`/collection/Trung%20rung%20nam/nu`}
              >
                Trứng rung nam/nữ
              </Navbar.Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Navbar.Link
                isActive={checkRoute("Nuoc hoa")}
                href={`/collection/Nuoc%20hoa`}
              >
                Nước hoa
              </Navbar.Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Navbar.Link
                isActive={checkRoute("Phu kien")}
                href={`/collection/Phu%20kien`}
              >
                Phụ kiện
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
          "@sm": {
            w: "30%",
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
          <form onSubmit={handleSubmit} style={{ display: "flex" }}>
            {/*<Input*/}
            {/*  clearable*/}
            {/*  contentLeft={*/}
            {/*    <svg*/}
            {/*      fill="none"*/}
            {/*      height={16 || 24}*/}
            {/*      viewBox="0 0 24 24"*/}
            {/*      width={16 || 24}*/}
            {/*    >*/}
            {/*      <path*/}
            {/*        d="M11.5 21a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19ZM22 22l-2-2"*/}
            {/*        stroke={"var(--nextui-colors-accents6)"}*/}
            {/*        strokeLinecap="round"*/}
            {/*        strokeLinejoin="round"*/}
            {/*        strokeWidth={2}*/}
            {/*      />*/}
            {/*    </svg>*/}
            {/*  }*/}
            {/*  contentLeftStyling={false}*/}
            {/*  css={{*/}
            {/*    w: "100%",*/}
            {/*    "@xsMax": {*/}
            {/*      mw: "300px",*/}
            {/*    },*/}
            {/*    "& .nextui-input-content--left": {*/}
            {/*      h: "100%",*/}
            {/*      ml: "$4",*/}
            {/*      dflex: "center",*/}
            {/*    },*/}
            {/*  }}*/}
            {/*  value={input}*/}
            {/*  placeholder="Search..."*/}
            {/*  onChange={(e) => setInput(e.target.value)}*/}
            {/*/>*/}
            <div className="input__control">
              <div className="input">
                <div>
                  <input
                    type="text"
                    id="input1"
                    value={input}
                    placeholder="Tìm kiếm..."
                    onChange={(e) => setInput(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <Button
              bordered
              color="primary"
              auto
              css={{ padding: "0.7rem!important" }}
              type="submit"
            >
              Tìm
            </Button>
            <LinkSearch
              to={"/search?key=" + input}
              className="btn btn-outline-success"
              style={{ display: "none" }}
              ref={myRef}
            >
              Tìm
            </LinkSearch>
          </form>
        </Navbar.Item>
        {!user ? (
          <Navbar.Item>
            <Button auto flat as={Link} href="/login">
              Đăng nhập
            </Button>
          </Navbar.Item>
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
            isActive={index === 2}
          >
            <Link
              color="inherit"
              // @ts-ignore
              css={{
                minWidth: "100%",
              }}
              href={`/collection/${handleHref(item.name)}`}
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
