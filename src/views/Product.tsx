import React from "react";
import {
  Button,
  Col,
  Container,
  Grid,
  Row,
  Spacer,
  Text,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import CarouselImage from "../components/Product/CarouselImage";
import Products from "../components/Product/Products";

const Product = () => {
  return (
    <div>
      <nav aria-label="breadcrumb" style={{ backgroundColor: "#f5f5f5" }}>
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
      <div className="product">
        <Container lg>
          <Grid.Container className="product__view" justify="center">
            <Grid xs={12} sm={4}>
              <CarouselImage />
            </Grid>
            <Spacer x={2} />
            <Grid xs={12} sm={6}>
              <div className="product__view-body">
                <Text size="$xl" weight="medium">
                  ÂM ĐẠO GIẢ MAGICEYES GOKUSAI UTERUS MOONSHOT
                </Text>
                <Row justify="space-between" css={{ maxWidth: "370px" }}>
                  <Col>
                    <Text weight="medium" className="main-color">
                      Còn hàng
                    </Text>
                    <Text weight="medium" className="price-color">
                      Sale: 34%
                    </Text>
                  </Col>
                  <Col css={{ textAlign: "end" }}>
                    <Text del>1.150.000 ₫</Text>
                    <Text weight="bold" className="price-color">
                      1.150.000 ₫
                    </Text>
                  </Col>
                </Row>
                <hr />
                <div className="counter">
                  <span className="down">-</span>
                  <input type="text" defaultValue="1" />
                  <span className="up">+</span>
                </div>
                <Button
                  shadow
                  color="error"
                  className="btn product__view-btn"
                  auto
                >
                  Thêm vào giỏ hàng
                </Button>
                <div>
                  <Text weight="medium">Mô tả</Text>
                  <Text>
                    Gokusai Uterus Moonshot là phiên bản nâng cấp của Uterus, có
                    màu sắc phong phú. Siêu uốn lượn áp đảo trên 5cm! Với slogan
                    fly yourself to the moon, nhà sản xuất Magiceyes gửi tặng
                    các bạn một phiên bản hoàn toàn mới! Môi âm đạo cực kì hồng
                    hào, bắt mắt. Với 70% poll vote trên toydemon là sản phẩm
                    Magiceyes must have! Moonshot có kết cấu thớ gân uốn lượn 5
                    góc và giống thật, với những thiết thiết kế Uterus thường
                    thì Moonshot nâng cao giờ đây đặc biệt uốn lượn. Thâm nhập
                    MoonShot ngay và bắt đầu cuộc hành trình quanh co vào tử
                    cung của Cô bé quàng khăn đỏ: âm hộ của cô ấy trải rộng ra
                    như một vùng đồng bằng khoái cảm, trước khi kéo bạn xuống
                    sâu hơn và sâu hơn vào cơ thể cô ấy. Thiết kế với một phần
                    chắc chắn ở cuối thân onahole để cầm nắm tốt hơn, đây là một
                    món đồ chơi sang trọng, nặng 800gr nhưng sẽ rất vừa vặn với
                    bàn tay của anh em và sẽ không thấy mỏi. Trọng lượng: 800gr
                    Kích thước: 17cm x 10cm x 9cm
                  </Text>
                  <Text>
                    Gokusai Uterus Moonshot là phiên bản nâng cấp của Uterus, có
                    màu sắc phong phú. Siêu uốn lượn áp đảo trên 5cm! Với slogan
                    fly yourself to the moon, nhà sản xuất Magiceyes gửi tặng
                    các bạn một phiên bản hoàn toàn mới! Môi âm đạo cực kì hồng
                    hào, bắt mắt. Với 70% poll vote trên toydemon là sản phẩm
                    Magiceyes must have! Moonshot có kết cấu thớ gân uốn lượn 5
                    góc và giống thật, với những thiết thiết kế Uterus thường
                    thì Moonshot nâng cao giờ đây đặc biệt uốn lượn. Thâm nhập
                    MoonShot ngay và bắt đầu cuộc hành trình quanh co vào tử
                    cung của Cô bé quàng khăn đỏ: âm hộ của cô ấy trải rộng ra
                    như một vùng đồng bằng khoái cảm, trước khi kéo bạn xuống
                    sâu hơn và sâu hơn vào cơ thể cô ấy. Thiết kế với một phần
                    chắc chắn ở cuối thân onahole để cầm nắm tốt hơn, đây là một
                    món đồ chơi sang trọng, nặng 800gr nhưng sẽ rất vừa vặn với
                    bàn tay của anh em và sẽ không thấy mỏi. Trọng lượng: 800gr
                    Kích thước: 17cm x 10cm x 9cm
                  </Text>
                  <Text>
                    Gokusai Uterus Moonshot là phiên bản nâng cấp của Uterus, có
                    màu sắc phong phú. Siêu uốn lượn áp đảo trên 5cm! Với slogan
                    fly yourself to the moon, nhà sản xuất Magiceyes gửi tặng
                    các bạn một phiên bản hoàn toàn mới! Môi âm đạo cực kì hồng
                    hào, bắt mắt. Với 70% poll vote trên toydemon là sản phẩm
                    Magiceyes must have! Moonshot có kết cấu thớ gân uốn lượn 5
                    góc và giống thật, với những thiết thiết kế Uterus thường
                    thì Moonshot nâng cao giờ đây đặc biệt uốn lượn. Thâm nhập
                    MoonShot ngay và bắt đầu cuộc hành trình quanh co vào tử
                    cung của Cô bé quàng khăn đỏ: âm hộ của cô ấy trải rộng ra
                    như một vùng đồng bằng khoái cảm, trước khi kéo bạn xuống
                    sâu hơn và sâu hơn vào cơ thể cô ấy. Thiết kế với một phần
                    chắc chắn ở cuối thân onahole để cầm nắm tốt hơn, đây là một
                    món đồ chơi sang trọng, nặng 800gr nhưng sẽ rất vừa vặn với
                    bàn tay của anh em và sẽ không thấy mỏi. Trọng lượng: 800gr
                    Kích thước: 17cm x 10cm x 9cm
                  </Text>
                </div>
              </div>
            </Grid>
            <section className="section">
              <center>
                <Text className="title main-color">Sản phẩm liên quan</Text>
              </center>
              <Products />
              <Products />
            </section>
          </Grid.Container>
        </Container>
      </div>
    </div>
  );
};

export default Product;
