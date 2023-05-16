import React, { useEffect, useState } from "react";
import {
  Card,
  Checkbox,
  Collapse,
  Container,
  Grid,
  Text,
} from "@nextui-org/react";
import Products from "../components/Product/Products";
import "../styles/Collection.scss";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { useType } from "../contexts/Type/Provider";
import { useProduct } from "../contexts/Product";

const Collection: React.FC<{ path: string }> = ({ path }) => {
  const [selected, setSelected] = React.useState<string[]>([]);
  const { types } = useType();
  const { getProductByType, products } = useProduct();

  const [brands, setBrands] = useState<string[]>([]);

  useEffect(() => {
    const uniqueNames: string[] = [];

    products.filter((element) => {
      const isDuplicate = uniqueNames.includes(element.brand);

      if (!isDuplicate) {
        uniqueNames.push(element.brand);

        return true;
      }

      return false;
    });

    setBrands(uniqueNames);
  }, [products]);

  useEffect(() => {
    const key = types.find((item) => item.name === path);
    if (key?._id) return getProductByType(key._id);
  }, []);

  // @ts-ignore
  const MockItem = ({ text }) => {
    return (
      <Card css={{ h: "$24", $$cardColor: "$colors$primary" }}>
        <Card.Body>
          <Text h6 size={15} color="white" css={{ mt: 0 }}>
            {text}
          </Text>
        </Card.Body>
      </Card>
    );
  };
  return (
    <section className="collection">
      <Container>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Trang chủ</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="#">Danh mục</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Máy rung
            </li>
          </ol>
        </nav>
        <Grid.Container gap={2} justify="center">
          <Grid xs={12} sm={4} md={2}>
            <Grid.Container gap={2}>
              <Grid css={{ width: "100%" }}>
                <Collapse.Group shadow accordion={false}>
                  <Collapse
                    expanded
                    title="Thương hiệu"
                    arrowIcon={<FaAngleRight />}
                  >
                    <Checkbox.Group
                      value={selected}
                      onChange={(e) => setSelected([...e])}
                    >
                      {brands.map((item) => (
                        <Checkbox value="buenos-aires">{item}</Checkbox>
                      ))}
                    </Checkbox.Group>
                  </Collapse>
                  <Collapse
                    expanded
                    title="Giá sản phẩm"
                    arrowIcon={<FaAngleRight />}
                  >
                    <Checkbox.Group
                      size="xs"
                      value={selected}
                      onChange={(e) => setSelected([...e])}
                    >
                      <Checkbox value="buenos-aires">Buenos Aires</Checkbox>
                      <Checkbox value="auckland">Auckland</Checkbox>
                      <Checkbox value="sydney">Sydney</Checkbox>
                    </Checkbox.Group>
                  </Collapse>
                </Collapse.Group>
              </Grid>
            </Grid.Container>
          </Grid>
          <Grid xs={12} sm={8} md={9} style={{ display: "unset" }}>
            <Text h3 css={{ paddingLeft: "10px" }}>
              {}
            </Text>
            <div className="section">
              <Products />
            </div>
          </Grid>
        </Grid.Container>
      </Container>
    </section>
  );
};

export default Collection;
