import React, { useEffect, useState } from "react";
import {
  Col,
  FormElement,
  Input,
  Row,
  Table,
  Tooltip,
} from "@nextui-org/react";
import { useType } from "../../../contexts/Type/Provider";
import { Link } from "react-router-dom";
import { IconButton } from "../IconButton";
import {
  FaCheckCircle,
  FaEdit,
  FaTimesCircle,
  FaTrashAlt,
} from "react-icons/fa";
import { Type } from "../../../contexts/Type";
import { TYPE } from "../../../contexts/Type/constain";
import TypeForm from "./TypeForm";

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
  const { types, getAllTypes, deleteType, setType, type } = useType();
  const [temp, setTemp] = useState<Type>(TYPE);
  const [editing, setEditing] = useState(false);
  const [visible, setVisible] = React.useState(false);
  const handler = (item: Type) => {
    setType(item);
    setVisible(true);
  };

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
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>{item?.createdAt?.toString()}</Table.Cell>
              <Table.Cell>
                <Row justify="center" align="center">
                  <Col css={{ d: "flex" }}>
                    <Tooltip content="Chỉnh sửa">
                      <IconButton onClick={() => handler(item)}>
                        <FaEdit size={20} fill="#979797" />
                      </IconButton>
                    </Tooltip>
                  </Col>
                  <Col css={{ d: "flex" }}>
                    <Tooltip
                      content="Xoá"
                      color="error"
                      onClick={() => deleteType(item._id || "")}
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
      <TypeForm visible={visible} setVisible={setVisible} />
    </>
  );
};

export default TypesTable;
