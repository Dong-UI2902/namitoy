import React, { useEffect } from "react";
import { Container, Text } from "@nextui-org/react";
import { Favorite, useFavorite } from "../contexts/Favorite";
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
