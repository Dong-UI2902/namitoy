import React, { useEffect } from "react";
import { Button, Container, Row, Text } from "@nextui-org/react";
import { FormatMoney } from "../contexts/Product/Constain";
import { Favorite, useFavorite } from "../contexts/Favorite";
import { Link } from "react-router-dom";
import FavoriteView from "../components/favorites/FavoriteView";

const Favorites = () => {
  const { favorites, getFavorites, totalFavorite } = useFavorite();

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <Container md>
      <section className="section">
        <center>
          <Text className="title main-color" css={{ marginBottom: "0" }}>
            My Favorites
          </Text>
          <Text>Có {totalFavorite} sản phẩm đã thích</Text>
        </center>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          {favorites.map((item: Favorite) => (
            <FavoriteView key={item._id} favorite={item} />
          ))}
        </div>
      </section>
    </Container>
  );
};

export default Favorites;
