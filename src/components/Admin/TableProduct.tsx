import React, { useEffect } from "react";
import { Table } from "@nextui-org/react";
import { useProduct } from "../../contexts/Product";

const TableProduct = () => {
  const { products, getAllProduct } = useProduct();
  const columns = [
    {
      key: "title",
      label: "TITLE",
    },
    {
      key: "price",
      label: "PRICE",
    },
    {
      key: "status",
      label: "STATUS",
    },
    {
      key: "action",
      label: "ACTION",
    },
  ];

  useEffect(() => {
    getAllProduct();
  }, []);

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
            <Table.Column key={column.key}>{column.label}</Table.Column>
          )}
        </Table.Header>
        <Table.Body>
          {products.map((item) => (
            <Table.Row key={item._id}>
              <Table.Cell>{item.title}</Table.Cell>
              <Table.Cell>{item.price}</Table.Cell>
              <Table.Cell>{item.soldOld ? "Hết hàng" : "Còn hàng"}</Table.Cell>
              <Table.Cell>123</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  );
};

export default TableProduct;
