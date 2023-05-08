import React, { useEffect } from "react";
import {
  Button,
  FormElement,
  Grid,
  Input,
  Loading,
  Radio,
  Row,
  Spacer,
  Text,
  Textarea,
} from "@nextui-org/react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { CKEditor } from "@ckeditor/ckeditor5-react";
// eslint-disable-next-line import/no-extraneous-dependencies
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Product, useProduct } from "../../contexts/Product";
import { useType } from "../../contexts/Type/Provider";
import Noti from "./Noti";
import { PRODUCT } from "../../contexts/Product/Constain";
import { FaRedoAlt, FaRegSave } from "react-icons/fa";
import { useParams } from "react-router-dom";

const FormProduct = () => {
  const {
    product,
    setProduct,
    loading,
    error,
    addNewProduct,
    updateProduct,
    findById,
    arrToStringImg,
    stringToArrImg,
  } = useProduct();
  const { types } = useType();
  const { id } = useParams();

  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const handleChange = (e: React.ChangeEvent<FormElement>) => {
    const { name, value } = e.target;

    if (name === "type") {
      const temp = types.find((item) => item.name === value);
      if (temp) {
        return setProduct((prevState) => ({
          ...prevState,
          type: temp,
        }));
      }

      return setProduct((prevState) => ({
        ...prevState,
        type: {
          name: value,
        },
      }));
    }

    if (name === "image") {
      return setProduct((prevState) => ({
        ...prevState,
        image: stringToArrImg(value),
      }));
    }

    return setProduct({ ...product, [name]: value });
  };

  const updateOrStore = () => {
    if (product._id) {
      return updateProduct(product);
    }

    return addNewProduct(product);
  };

  const handleClick = () => {
    if (!product.type?._id) {
      return handler();
    }

    return updateOrStore();
  };

  const handleModal = () => {
    updateOrStore();
    if (!loading) setVisible(false);
  };

  const clearable = () => {
    setProduct(PRODUCT);
  };

  useEffect(() => {
    if (id) return findById(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div>
      <center>
        <Text h2>Thêm/Chỉnh sửa sản phẩm</Text>
      </center>
      <Grid.Container>
        <Grid xs={12} md={6} style={{ display: "block" }}>
          <Text h3>Thông tin sản phẩm</Text>
          <Grid.Container gap={4} justify="center">
            <Grid xs={6}>
              <Input
                width="100%"
                label="Tên sản phẩm"
                type="text"
                value={product.title}
                name="title"
                onChange={handleChange}
              />
            </Grid>
            <Grid xs={6}>
              <Input
                width="100%"
                label="Thể loại"
                type="text"
                list="types"
                id="type"
                value={product.type?.name}
                name="type"
                onChange={handleChange}
              />
              <datalist id="types">
                {/*<option value="Edge">*/}
                {types.map((item, index) => (
                  <option value={item.name} key={index} />
                ))}
              </datalist>
            </Grid>
            <Grid xs={3}>
              <Input
                label="Thương hiệu"
                type="text"
                value={product.brand}
                name="brand"
                onChange={handleChange}
              />
            </Grid>
            <Grid xs={3}>
              <Input
                label="Chất liệu"
                type="text"
                value={product.material}
                name="material"
                onChange={handleChange}
              />
            </Grid>
            <Grid xs={3}>
              <Input
                label="Giá"
                type="number"
                value={product.price}
                name="price"
                onChange={handleChange}
              />
            </Grid>
            <Grid xs={3}>
              <Input
                label="Sale(%)"
                type="number"
                value={product.sale}
                name="sale"
                onChange={handleChange}
              />
            </Grid>
            <Grid xs={12}>
              <Textarea
                width="100%"
                placeholder="Link ảnh"
                minRows={4}
                value={arrToStringImg(product.image)}
                name="image"
                onChange={handleChange}
              />
            </Grid>
            <Grid xs={6}>
              <Radio.Group
                label="Tình trạng"
                value={product.gender}
                orientation="horizontal"
                onChange={(e) => setProduct({ ...product, gender: e })}
              >
                <Radio value="nam">Nam</Radio>
                <Radio value="nữ">Nữ</Radio>
              </Radio.Group>
            </Grid>
            <Grid xs={6}>
              <Radio.Group
                label="Tình trạng"
                value={product.soldOld.toString()}
                orientation="horizontal"
                onChange={(e) =>
                  setProduct({
                    ...product,
                    soldOld: String(e).toLowerCase() == "true",
                  })
                }
              >
                <Radio value="false" color="success" labelColor="success">
                  Còn hàng
                </Radio>
                <Radio value="true" color="error" labelColor="error">
                  Hết hàng
                </Radio>
              </Radio.Group>
            </Grid>
          </Grid.Container>
        </Grid>
        <Grid xs={12} md={6} style={{ display: "block" }}>
          <Text h3>Mô tả</Text>
          <div>
            <CKEditor
              editor={ClassicEditor}
              data={product.description}
              style={{ height: "200px!important" }}
            />
          </div>
        </Grid>
      </Grid.Container>
      <Row gap={2} justify="flex-end">
        <Button color="primary" onClick={clearable} icon={<FaRedoAlt />}>
          Làm mới
        </Button>
        <Spacer x={2} />
        <Button color="success" onClick={handleClick} icon={<FaRegSave />}>
          Lưu
        </Button>
      </Row>
      <Noti
        visible={visible}
        setVisible={setVisible}
        btnHandle={
          <Button bordered auto onPress={handleModal}>
            {loading ? (
              <Loading type="spinner" color="primary" size="sm" />
            ) : (
              "Bố mày biết rồi!"
            )}
          </Button>
        }
      >
        Bạn đang lưu sản phẩm vào thể loại đéo có trong cơ sở dữ liệu.
        <br />
        Hãy kiểm tra kỹ trước khi lưu.
      </Noti>
    </div>
  );
};

export default FormProduct;
