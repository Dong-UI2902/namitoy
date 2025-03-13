import React, {SyntheticEvent, useEffect, useRef, useState} from "react";
import {Badge, Button, Dropdown, Link, Navbar as NavBar, Text} from "@nextui-org/react";
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
        <NavBar variant="sticky" style={{background: "#fff", zIndex: "99999"}}>
            <NavBar.Toggle showIn="md"/>
            <NavBar.Brand
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
            </NavBar.Brand>
            <NavBar.Content
                enableCursorHighlight
                activeColor="secondary"
                hideIn="md"
                variant="underline"
            >
                <NavBar.Link
                    isActive={checkRoute("am-dao-gia")}
                    href={`/collection/am-dao-gia`}
                >
                    Âm đạo giả
                </NavBar.Link>
                <NavBar.Link
                    isActive={checkRoute("am-dao-gia-jav-idol")}
                    href={`/collection/am-dao-gia-jav-idol`}
                >
                    Âm đạo giả JAV Idol
                </NavBar.Link>
                <NavBar.Link
                    isActive={checkRoute("khuon-mong-nguyen-khoi")}
                    href={`/collection/khuon-mong-nguyen-khoi`}
                >
                    Khuôn mông nguyên khối
                </NavBar.Link>
                <NavBar.Link
                    isActive={checkRoute("bup-be-tinh-duc")}
                    href={`/collection/bup-be-tinh-duc`}
                >
                    Búp bê tình dục
                </NavBar.Link>
                <Dropdown isBordered>
                    <NavBar.Item>
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
                    </NavBar.Item>
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
                            <NavBar.Link
                                isActive={checkRoute("anal-plug")}
                                href={`/collection/anal-plug`}
                            >
                                Anal Plug
                            </NavBar.Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <NavBar.Link
                                isActive={checkRoute("gel-boi-tron")}
                                href={`/collection/gel-boi-tron`}
                            >
                                Gel bôi trơn
                            </NavBar.Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <NavBar.Link
                                isActive={checkRoute("trung-rung-nam/nu")}
                                href={`/collection/trung-rung-nam/nu`}
                            >
                                Trứng rung nam/nữ
                            </NavBar.Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <NavBar.Link
                                isActive={checkRoute("nuoc-hoa")}
                                href={`/collection/nuoc-hoa`}
                            >
                                Nước hoa
                            </NavBar.Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <NavBar.Link
                                isActive={checkRoute("phu-kien")}
                                href={`/collection/phu-kien`}
                            >
                                Phụ kiện
                            </NavBar.Link>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </NavBar.Content>
            <NavBar.Content
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
                <NavBar.Item
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
                </NavBar.Item>
                {!user ? (
                    <NavBar.Item>
                        <Button auto flat as={Link} href="/login">
                            Đăng nhập
                        </Button>
                    </NavBar.Item>
                ) : (
                    <>
                        <Badge color="error" content={totalFavorite}>
                            <NavBar.Link href={`/favorites`} css={{margin: "0 5px"}}>
                                <FaHeart size={25} fill="#F31260"/>
                            </NavBar.Link>
                        </Badge>
                        <DropdownUser/>
                    </>
                )}
            </NavBar.Content>
            <NavBar.Collapse>
                {types.map((item, index) => (
                    <NavBar.CollapseItem
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
                    </NavBar.CollapseItem>
                ))}
            </NavBar.Collapse>
        </NavBar>
    );
};

export default Nav;
