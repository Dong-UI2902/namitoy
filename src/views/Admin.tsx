import React from "react";
import "../styles/Admin.scss";
import ProductForm from "../components/Admin/product/ProductForm";
import { Card, Container, Grid, Spacer, Text } from "@nextui-org/react";
import { Link } from "react-router-dom";
import ProductsTable from "../components/Admin/product/ProductsTable";
import TypesTable from "../components/Admin/type/TypesTable";

const Admin: React.FC<{ path: string }> = ({ path }) => {
  return (
    <div className="admin section">
      <Container xl>
        <Grid.Container gap={2} justify="center">
          <Grid sm={3} md={2} style={{ display: "unset" }}>
            <Link to="/manager/all-product">
              <Card css={{ mw: "400px" }} isHoverable>
                <Card.Body>
                  <Text>Tất cả sản phẩm</Text>
                </Card.Body>
              </Card>
            </Link>
            <Spacer y={1} />
            <Link to="/manager/all-types">
              <Card css={{ mw: "400px" }} isHoverable>
                <Card.Body>
                  <Text>Tất cả thể loại</Text>
                </Card.Body>
              </Card>
            </Link>
            <Spacer y={1} />
            <Link to="/manager/form">
              <Card css={{ mw: "400px" }} isHoverable>
                <Card.Body>
                  <Text>Thêm/chỉnh sửa sản phẩm</Text>
                </Card.Body>
              </Card>
            </Link>
            <Spacer y={1} />
            <Link to="/manager/all-cart">
              <Card css={{ mw: "400px" }} isHoverable>
                <Card.Body>
                  <Text>Tất cả đơn hàng</Text>
                </Card.Body>
              </Card>
            </Link>
          </Grid>
          <Spacer x={1} />
          <Grid sm={8} md={8} style={{ display: "block" }}>
            {path === "all-product" && <ProductsTable />}
            {path === "all-cart" && <ProductsTable />}
            {path === "all-types" && <TypesTable />}
            {path === "form" && <ProductForm />}
          </Grid>
        </Grid.Container>
      </Container>
    </div>
  );
};

export default Admin;
