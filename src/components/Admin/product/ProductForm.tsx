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
import { useProduct } from "../../../contexts/Product";
import { useType } from "../../../contexts/Type/Provider";
import Noti from "../Noti";
import { PRODUCT } from "../../../contexts/Product/Constain";
import { FaRedoAlt, FaRegSave } from "react-icons/fa";
import { useParams } from "react-router-dom";

const ProductForm = () => {
  const {
    product,
    products,
    setProduct,
    loading,
    error,
    addNewProduct,
    updateProduct,
    findById,
    arrToStringImg,
    stringToArrImg,
  } = useProduct();
  const { type, setType, types } = useType();
  const { id } = useParams();

  const [visible, setVisible] = React.useState(false);
  const [a, setA] = React.useState("");
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
    if (id) {
      findById(id);
    }
    return setProduct(PRODUCT);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, products]);

  return (
    <>
      {loading ? (
        <center>
          <Loading />
        </center>
      ) : (
        <div>
          <center>
            <Text h2>
              {product._id ? "Chỉnh sửa sản phẩm" : "Thêm mới sản phẩm"}
            </Text>
          </center>
          <Grid.Container>
            <Grid xs={12} md={6} style={{ display: "block" }}>
              <Text h3>Thông tin sản phẩm</Text>
              <Grid.Container gap={4} justify="center">
                <Grid xs={6}>
                  <div className="input__control">
                    <label className="label" htmlFor="input1" id="input1">
                      Tên sản phẩm
                    </label>
                    <div className="input">
                      <div>
                        <input
                          type="text"
                          id="input1"
                          value={product.title}
                          name="title"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid xs={6}>
                  <div className="input__control">
                    <label className="label" htmlFor="input1" id="input1">
                      Thể loại
                    </label>
                    <div className="input">
                      <div>
                        <input
                          type="text"
                          list="types"
                          id="type"
                          value={product.type?.name || ""}
                          name="type"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <datalist id="types">
                    {/*<option value="Edge">*/}
                    {types.map((item, index) => (
                      <option value={item.name} key={index} />
                    ))}
                  </datalist>
                </Grid>
                <Grid xs={3}>
                  <div className="input__control">
                    <label className="label" htmlFor="input1" id="input1">
                      Thương hiệu
                    </label>
                    <div className="input">
                      <div>
                        <input
                          type="text"
                          value={product.brand || ""}
                          name="brand"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid xs={3}>
                  <div className="input__control">
                    <label className="label" htmlFor="input1" id="input1">
                      Chất liệu
                    </label>
                    <div className="input">
                      <div>
                        <input
                          type="text"
                          value={product.material || ""}
                          name="material"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
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
                    label="Sale"
                    type="text"
                    value={product.sale || ""}
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
                  name="description"
                  onChange={(event: any, editor: { getData: () => any }) => {
                    setProduct((prevState) => ({
                      ...prevState,
                      description: editor.getData(),
                    }));
                  }}
                />
              </div>
            </Grid>
          </Grid.Container>
          <Row gap={2} justify="flex-end">
            <Button color="primary" onClick={clearable} icon={<FaRedoAlt />}>
              Làm mới
            </Button>
            <Spacer x={2} />

            {loading ? (
              <Button
                disabled
                auto
                bordered
                color="success"
                css={{ px: "$13" }}
              >
                <Loading type="points" color="currentColor" size="sm" />
              </Button>
            ) : (
              <Button
                color="success"
                onClick={handleClick}
                icon={<FaRegSave />}
              >
                Lưu
              </Button>
            )}
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
      )}
    </>
  );
};

export default ProductForm;
