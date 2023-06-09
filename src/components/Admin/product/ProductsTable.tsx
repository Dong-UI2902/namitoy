import React, { SyntheticEvent, useEffect, useState } from "react";
import {
  Button,
  Col,
  Input,
  Loading,
  Pagination,
  Row,
  Switch,
  SwitchEvent,
  Table,
  Tooltip,
} from "@nextui-org/react";
import { Product, useProduct } from "../../../contexts/Product";
import { IconButton } from "../IconButton";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { DATA, FormatMoney } from "../../../contexts/Product/Constain";
import { StyledBadge } from "../StyledBadge";
import productService from "../../../contexts/Product/services";
const columns = [
  {
    key: "title",
    label: "TÊN",
  },
  {
    key: "brand",
    label: "THƯƠNG HIỆU",
  },
  {
    key: "type",
    label: "LOẠI",
  },
  {
    key: "price",
    label: "GIÁ",
  },
  {
    key: "sale",
    label: "SALE",
  },
  {
    key: "hot",
    label: "HOT",
  },
  {
    key: "status",
    label: "TÌNH TRẠNG",
  },
  {
    key: "actions",
    label: "HÀNH ĐỘNG",
  },
];

const ProductsTable = () => {
  const {
    products,
    getProducts,
    updateProduct,
    loading,
    deleteProduct,
    meta,
    search,
  } = useProduct();
  const [input, setInput] = useState("");

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (input) {
      search(input, null);
    } else {
      getProducts(meta.page);
    }
  };

  useEffect(() => {
    getProducts(1);
  }, []);

  const handleSwitch = (product: Product) => {
    updateProduct(product);
  };

  const addAllProd = async () => {
    for (const item of DATA) {
      try {
        await productService.store(item).then().catch().finally();
      } catch (e) {
        console.log(e);
      }
    }
  };

  const handleChange = (page: number) => {
    getProducts(page);
    window.scrollTo({ top: 0 });
  };

  return (
    <>
      {/*<div onClick={addAllProd}>1231231231</div>*/}
      {loading ? (
        <center>
          <Loading size="lg" />
        </center>
      ) : (
        <>
          <form onSubmit={handleSubmit} style={{ display: "flex" }}>
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
            <Button bordered color="primary" auto type="submit">
              Tìm
            </Button>
          </form>
          <Table
            aria-label="Example table with dynamic content"
            css={{
              height: "auto",
              minWidth: "100%",
            }}
            lined
          >
            <Table.Header columns={columns}>
              {(column) => (
                <Table.Column
                  key={column.key}
                  hideHeader={column.key === "actions"}
                  align={column.key === "actions" ? "center" : "start"}
                >
                  {column.label}
                </Table.Column>
              )}
            </Table.Header>
            <Table.Body>
              {products.map((item) => (
                <Table.Row key={item._id}>
                  <Table.Cell>
                    <div>
                      <Tooltip className="title__table" content={item.title}>
                        {item.title}
                      </Tooltip>
                    </div>
                  </Table.Cell>
                  <Table.Cell>{item.brand}</Table.Cell>
                  <Table.Cell>{item?.type?.name}</Table.Cell>
                  <Table.Cell>{<FormatMoney price={item.price} />}</Table.Cell>
                  <Table.Cell>{<FormatMoney price={item.sale} />}</Table.Cell>
                  <Table.Cell>
                    <Switch
                      onChange={(e: SwitchEvent) =>
                        handleSwitch({ ...item, isHot: e.target.checked })
                      }
                      bordered
                      animated={false}
                      checked={item.isHot}
                      disabled={loading}
                    />
                  </Table.Cell>
                  <Table.Cell>
                    <StyledBadge type={item.soldOld}>
                      {item.soldOld ? "Hết hàng" : "Còn hàng"}
                    </StyledBadge>
                  </Table.Cell>
                  <Table.Cell>
                    <Row justify="center" align="center">
                      {/*<Col css={{ d: "flex" }}>*/}
                      {/*  <Tooltip content="Chi tiết">*/}
                      {/*    <Link to={item._id || "/"}>*/}
                      {/*      <IconButton>*/}
                      {/*        <FaEye size={20} fill="#979797" />*/}
                      {/*      </IconButton>*/}
                      {/*    </Link>*/}
                      {/*  </Tooltip>*/}
                      {/*</Col>*/}
                      <Col css={{ d: "flex" }}>
                        <Tooltip content="Chỉnh sửa">
                          <Link to={`/manager/form/${item._id}`}>
                            <IconButton>
                              <FaEdit size={20} fill="#979797" />
                            </IconButton>
                          </Link>
                        </Tooltip>
                      </Col>
                      <Col css={{ d: "flex" }}>
                        <Tooltip
                          content="Xoá sản phẩm"
                          color="error"
                          onClick={() => {
                            if (item._id) return deleteProduct(item._id);
                            return;
                          }}
                        >
                          <IconButton>
                            <FaTrashAlt size={20} fill="#FF0080" />
                          </IconButton>
                        </Tooltip>
                      </Col>
                    </Row>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </>
      )}
      <section className="section">
        <center>
          <Pagination
            size="lg"
            total={meta.totalPage}
            initialPage={1}
            onChange={(page: number) => handleChange(page)}
          />
        </center>
      </section>
    </>
  );
};

export default ProductsTable;
