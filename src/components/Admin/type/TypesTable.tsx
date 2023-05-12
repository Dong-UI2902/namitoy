import React, { useEffect, useState } from "react";
import { Col, Input, Row, Table, Tooltip } from "@nextui-org/react";
import { useType } from "../../../contexts/Type/Provider";
import { Link } from "react-router-dom";
import { IconButton } from "../IconButton";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const columns = [
  {
    key: "id",
    label: "ID",
  },
  {
    key: "name",
    label: "Tên",
  },
  {
    key: "date",
    label: "Ngày tạo",
  },
  {
    key: "action",
    label: "Hành động",
  },
];

const TypesTable = () => {
  const { types, getAllTypes, deleteType, setType } = useType();
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    getAllTypes();
  }, []);

  return (
    <>
      <Table
        aria-label="Example table with dynamic content"
        css={{
          height: "auto",
          width: "100%",
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
          {types.map((item) => (
            <Table.Row key={item._id}>
              <Table.Cell>{item._id}</Table.Cell>
              <Table.Cell>
                <Input
                  underlined
                  labelPlaceholder="Name"
                  initialValue="NextUI"
                  value={item.name}
                  readOnly={!editing}
                  style={{ color: "black" }}
                />
              </Table.Cell>
              <Table.Cell>{item?.createdAt?.toString()}</Table.Cell>
              <Table.Cell>
                <Row justify="center" align="center">
                  <Col css={{ d: "flex" }}>
                    <Tooltip content="Chỉnh sửa">
                      <IconButton onClick={() => setEditing(true)}>
                        <FaEdit size={20} fill="#979797" />
                      </IconButton>
                    </Tooltip>
                  </Col>
                  <Col css={{ d: "flex" }}>
                    <Tooltip
                      content="Xoá sản phẩm"
                      color="error"
                      onClick={() => setEditing(true)}
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

export default TypesTable;
