import React, { useEffect, useState } from "react";
import {
  Card,
  Checkbox,
  Collapse,
  Container,
  Grid,
  Loading,
  Text,
} from "@nextui-org/react";
import Products from "../components/Product/Products";
import "../styles/Collection.scss";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { useType } from "../contexts/Type/Provider";
import { Product, useProduct } from "../contexts/Product";

const Collection: React.FC<{ path: string }> = ({ path }) => {
  const [selected, setSelected] = React.useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = React.useState<string[]>([]);
  const { types } = useType();
  const { getProductByType, products, loading } = useProduct();

  const [brands, setBrands] = useState<string[]>([]);
  const [temp, setTemp] = useState<Product[]>([]);

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
    setTemp(products);
    setBrands(uniqueNames);
  }, [products]);

  const handleSelected = (e: string[]) => {
    setSelected([...e]);
  };

  const checkPrice = (
    price: string,
    sale: string,
    key: number,
    limit: number
  ) => {
    return key <= Number(price) && Number(price) < limit;
  };

  const filterPrice = (key: string) => {
    switch (key) {
      case "1":
        return { key: 0, limit: 100000 };
      case "3":
        return { key: 100000, limit: 300000 };
      case "5":
        return { key: 300000, limit: 500000 };
      default:
        return { key: 500000, limit: 9999999999 };
    }
  };

  useEffect(() => {
    const arr = products.filter((item) => {
      let isChecked = false;
      let isCheckedPrice = false;

      if (selectedPrice.length > 0) {
        selectedPrice.forEach((element) => {
          const { key, limit } = filterPrice(element);
          if (checkPrice(item.price, item.sale, key, limit)) {
            isCheckedPrice = true;
          }
        });
      } else {
        isCheckedPrice = true;
      }

      if (selected.length > 0) {
        if (selected.includes(item.brand)) isChecked = true;
      } else {
        isChecked = true;
      }

      if (isCheckedPrice && isChecked) return true;

      return false;
    });

    setTemp(arr);

    if (selected.length <= 0 && selectedPrice.length <= 0)
      return setTemp(products);
  }, [selected, selectedPrice]);

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
            <li className="breadcrumb-item">
              <Link to="#">Thể loại</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {path}
            </li>
          </ol>
        </nav>
        {loading ? (
          <center>
            <Loading size="lg" />
          </center>
        ) : (
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
                        size="xs"
                        value={selected}
                        onChange={(e) => handleSelected(e)}
                        css={{
                          maxHeight: "45vh!important",
                          overflow: "auto",
                        }}
                      >
                        {brands.map((item, index) => (
                          <Checkbox key={index} value={item}>
                            {item}
                          </Checkbox>
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
                        value={selectedPrice}
                        onChange={(e) => setSelectedPrice([...e])}
                      >
                        <Checkbox value="1">Dưới 100.000₫</Checkbox>
                        <Checkbox value="3">100.000₫ - 300.000₫</Checkbox>
                        <Checkbox value="5">300.000₫ - 500.000₫</Checkbox>
                        <Checkbox value="0">Trên 500.000₫</Checkbox>
                      </Checkbox.Group>
                    </Collapse>
                  </Collapse.Group>
                </Grid>
              </Grid.Container>
            </Grid>
            <Grid xs={12} sm={8} md={9} style={{ display: "unset" }}>
              <Text h3 css={{ paddingLeft: "10px" }}>
                {selected}
              </Text>
              <div className="section">
                <Products listProducts={temp} />
              </div>
            </Grid>
          </Grid.Container>
        )}
      </Container>
    </section>
  );
};

export default Collection;
