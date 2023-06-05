import React, { useEffect, useState } from "react";
import { Checkbox, Collapse, Container, Grid } from "@nextui-org/react";
import { FaAngleRight } from "react-icons/fa";
import Products from "./Products";
import { Product, useProduct } from "../../contexts/Product";

const ListProduct = () => {
  const [selected, setSelected] = React.useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = React.useState<string[]>([]);
  const { products, loading, search } = useProduct();
  const [brands, setBrands] = useState<string[]>([]);
  const [temp, setTemp] = useState<Product[]>([]);
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
        return { key: 0, limit: 300000 };
      case "2":
        return { key: 300000, limit: 500000 };
      case "3":
        return { key: 500000, limit: 1000000 };
      default:
        return { key: 1000000, limit: 9999999999 };
    }
  };

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

  useEffect(() => {
    if (products.length > 0) {
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
    }
  }, [selected, selectedPrice]);

  return (
    <section className="collection">
      <Container>
        <Grid.Container gap={2} justify="center" style={{ padding: 0 }}>
          <Grid xs={12} sm={4} md={2}>
            <Grid.Container gap={2}>
              <Grid css={{ width: "100%" }}>
                <Collapse.Group shadow accordion={false}>
                  <Collapse
                    expanded
                    title={`Thương hiệu`}
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
                      <Checkbox value="1">Dưới 300.000₫</Checkbox>
                      <Checkbox value="2">300.000₫ - 500.000₫</Checkbox>
                      <Checkbox value="3">500.000₫ - 1.000.000₫</Checkbox>
                      <Checkbox value="4">Trên 1.000.000₫</Checkbox>
                    </Checkbox.Group>
                  </Collapse>
                </Collapse.Group>
              </Grid>
            </Grid.Container>
          </Grid>
          <Grid xs={12} sm={8} md={9} style={{ display: "unset", padding: 0 }}>
            <div className="section">
              <Products listProducts={temp} />
            </div>
          </Grid>
        </Grid.Container>
      </Container>
    </section>
  );
};

export default ListProduct;
