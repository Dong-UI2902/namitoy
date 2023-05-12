import React, { useEffect, useState } from "react";
import {
  Col,
  Row,
  Switch,
  SwitchEvent,
  Table,
  Tooltip,
} from "@nextui-org/react";
import { Product, useProduct } from "../../../contexts/Product";
import { IconButton } from "../IconButton";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductsTable = () => {
  const { products, getAllProduct, updateProduct, loading, deleteProduct } =
    useProduct();
  const columns = [
    {
      key: "title",
      label: "TÊN",
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

  useEffect(() => {
    getAllProduct();
  }, []);

  const handleSwitch = (product: Product) => {
    updateProduct(product);
  };

  return (
    <>
      <Table
        aria-label="Example table with dynamic content"
        css={{
          height: "auto",
          minWidth: "100%",
        }}
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
              <Table.Cell>{item.title}</Table.Cell>
              <Table.Cell>{item.price}</Table.Cell>
              <Table.Cell>{item.sale}</Table.Cell>
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
              <Table.Cell>{item.soldOld ? "Hết hàng" : "Còn hàng"}</Table.Cell>
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
  );
};

export default ProductsTable;
