import React from "react";
import { Button, Input, Link, Navbar, Text } from "@nextui-org/react";
import { useAuth } from "../../contexts/Auth";
import { useLocation } from "react-router-dom";
import DropdownUser from "./DropdownUser";
import { useType } from "../../contexts/Type/Provider";

const collapseItems = [
  "Tất cả",
  "Máy rung",
  "Onahole",
  "Khuôn mông",
  "Idol",
  "Phụ kiện",
];

const Nav = () => {
  const { user, logout } = useAuth();
  const { types, handleHref } = useType();
  const { pathname } = useLocation();

  const checkRoute = (route: string) => {
    return route === pathname;
  };

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
        <Text b hideIn="xs" css={{ fontFamily: "var(--second-font)" }}>
          <span style={{ color: "var(--first-color)" }}>Namitoy </span>
          Store
        </Text>
      </Navbar.Brand>
      <Navbar.Content
        enableCursorHighlight
        activeColor="secondary"
        hideIn="xs"
        variant="highlight-rounded"
      >
        {types.map((item, index) => (
          <Navbar.Link
            key={index}
            isActive={checkRoute("/")}
            href={`/${handleHref(item.name)}`}
          >
            {item.name}
          </Navbar.Link>
        ))}
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
          <DropdownUser />
        )}
      </Navbar.Content>
      <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem
            key={item}
            activeColor="secondary"
            css={{
              color: index === collapseItems.length - 1 ? "$error" : "",
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
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
