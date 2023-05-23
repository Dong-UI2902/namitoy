import React, { useEffect, useState } from "react";
import { Button, Dropdown, Input, Link, Navbar, Text } from "@nextui-org/react";
import { useAuth } from "../../contexts/Auth";
import { useLocation } from "react-router-dom";
import DropdownUser from "./DropdownUser";
import { useType } from "../../contexts/Type/Provider";
import { Type } from "../../contexts/Type";
import { FaAngleDown } from "react-icons/fa";

const Nav = () => {
  const { user } = useAuth();
  const { types, handleHref } = useType();
  const { pathname } = useLocation();
  const [limit, setLimit] = useState<Type[]>([]);
  const [limit2, setLimit2] = useState<Type[]>([]);

  useEffect(() => {
    for (let i = 0; i < types.length; i++) {
      if (i <= 4) {
        setLimit((prevState) => [...prevState, types[i]]);
      } else {
        setLimit2((prevState) => [...prevState, types[i]]);
      }
    }
  }, [types]);

  const checkRoute = (route: string) => {
    const str = pathname.replace("/collection/", "");
    str.replace("/%20/g", " ");

    return route === decodeURI(str);
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
        {limit.map((item) => (
          <Navbar.Link
            key={item._id}
            isActive={checkRoute(handleHref(item.name))}
            href={`/collection/${handleHref(item.name)}`}
            css={{ margin: "0 5px" }}
          >
            {item.name}
          </Navbar.Link>
        ))}
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
            {limit2.map((item) => (
              <Dropdown.Item key={item._id}>
                <Navbar.Link
                  key={item._id}
                  isActive={checkRoute(handleHref(item.name))}
                  href={`/collection/${handleHref(item.name)}`}
                  css={{ margin: "0 5px" }}
                >
                  {item.name}
                </Navbar.Link>
              </Dropdown.Item>
            ))}
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
          <DropdownUser />
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
