import React, {SyntheticEvent, useEffect, useRef, useState} from "react";
import {Badge, Button, Dropdown, Link, Navbar, Text} from "@nextui-org/react";
import {useAuth} from "../../contexts/Auth";
import {Link as LinkSearch, useLocation, useSearchParams,} from "react-router-dom";
import DropdownUser from "./DropdownUser";
import {useType} from "../../contexts/Type/Provider";
import {FaAngleDown, FaHeart} from "react-icons/fa";
import {useFavorite} from "../../contexts/Favorite";

const Nav = () => {
    const {user} = useAuth();
    const {totalFavorite, getTotalFavorite} = useFavorite();
    const {pathname} = useLocation();
    const {types, handleHref} = useType();
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

        return route === str;
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
        <Navbar variant="sticky" style={{background: "#fff", zIndex: "99999"}}>
            <Navbar.Toggle showIn="md"/>
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
                    css={{fontFamily: "var(--second-font)", cursor: "pointer"}}
                    onClick={() => (window.location.href = "/")}
                >
                    <span style={{color: "var(--first-color)"}}>Namitoy </span>
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
                    isActive={checkRoute("am-dao-gia")}
                    href={`/collection/am-dao-gia`}
                >
                    Âm đạo giả
                </Navbar.Link>
                <Navbar.Link
                    isActive={checkRoute("am-dao-gia-jav-idol")}
                    href={`/collection/am-dao-gia-jav-idol`}
                >
                    Âm đạo giả JAV Idol
                </Navbar.Link>
                <Navbar.Link
                    isActive={checkRoute("khuon-mong-nguyen-khoi")}
                    href={`/collection/khuon-mong-nguyen-khoi`}
                >
                    Khuôn mông nguyên khối
                </Navbar.Link>
                <Navbar.Link
                    isActive={checkRoute("bup-be-tinh-duc")}
                    href={`/collection/bup-be-tinh-duc`}
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
                                svg: {pe: "none"},
                            }}
                            iconRight={
                                <FaAngleDown
                                    size={14}
                                    style={{width: "14px!important", padding: 0}}
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
                                isActive={checkRoute("anal-plug")}
                                href={`/collection/anal-plug`}
                            >
                                Anal Plug
                            </Navbar.Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Navbar.Link
                                isActive={checkRoute("gel-boi-tron")}
                                href={`/collection/gel-boi-tron`}
                            >
                                Gel bôi trơn
                            </Navbar.Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Navbar.Link
                                isActive={checkRoute("trung-rung-nam/nu")}
                                href={`/collection/trung-rung-nam/nu`}
                            >
                                Trứng rung nam/nữ
                            </Navbar.Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Navbar.Link
                                isActive={checkRoute("nuoc-hoa")}
                                href={`/collection/nuoc-hoa`}
                            >
                                Nước hoa
                            </Navbar.Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Navbar.Link
                                isActive={checkRoute("phu-kien")}
                                href={`/collection/phu-kien`}
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
                    <form onSubmit={handleSubmit} style={{display: "flex"}}>
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
                            css={{padding: "0.7rem!important"}}
                            type="submit"
                        >
                            Tìm
                        </Button>
                        <LinkSearch
                            to={"/search?key=" + input}
                            className="btn btn-outline-success"
                            style={{display: "none"}}
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
                            <Navbar.Link href={`/favorites`} css={{margin: "0 5px"}}>
                                <FaHeart size={25} fill="#F31260"/>
                            </Navbar.Link>
                        </Badge>
                        <DropdownUser/>
                    </>
                )}
            </Navbar.Content>
            <Navbar.Collapse>
                {types.map((item, index) => (
                    <Navbar.CollapseItem
                        key={item._id}
                        activeColor="secondary"
                        isActive={checkRoute(item.slug || "")}
                    >
                        <Link
                            color="inherit"
                            // @ts-ignore
                            css={{
                                minWidth: "100%",
                            }}
                            href={`/collection/${item.slug}`}
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
