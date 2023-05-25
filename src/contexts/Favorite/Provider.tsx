import React, { createContext, useContext, useMemo, useState } from "react";
import { Favorite, FavoriteContextAPI } from "./type";
import favoriteService from "./services";
import { FAVORITE } from "./Constain";

const FavoriteContext = createContext<FavoriteContextAPI>(
  {} as FavoriteContextAPI
);

const Provider: React.FC<{ children: any }> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const [favorite, setCart] = useState<Favorite>(FAVORITE);
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [meta, setMeta] = useState<any>({
    page: 1,
    perPage: 20,
    totalPage: 0,
  });
  const [totalFavorite, setTotalFavorite] = useState(0);

  const addToFavorite = (newFavorite: Favorite) => {
    setLoading(true);
    favoriteService
      .addToFavorite(newFavorite)
      .then(() => setTotalFavorite((prevState) => prevState + 1))
      .catch()
      .finally(() => setLoading(false));
  };

  const getFavorites = () => {
    setLoading(true);
    favoriteService
      .getFavorites()
      .then((res) => setFavorites(res.data))
      .catch()
      .finally(() => setLoading(false));
  };

  const getTotalFavorite = () => {
    favoriteService
      .getTotalFavorites()
      .then((res) => setTotalFavorite(res.totalDocuments))
      .catch()
      .finally();
  };

  const removeFavorite = (_id: string) => {
    setLoading(true);
    favoriteService
      .removeFavorite(_id)
      .then(() => {
        setTotalFavorite((prevState) => prevState - 1);
        const arr = favorites.filter((item) => item._id !== _id);
        setFavorites(arr);
      })
      .catch()
      .finally(() => setLoading(false));
  };

  const memoValue = useMemo(
    () => ({
      loading,
      error,
      favorite,
      favorites,
      setFavorites,
      totalFavorite,
      addToFavorite,
      getFavorites,
      getTotalFavorite,
      removeFavorite,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [loading, error, favorite, favorites, totalFavorite]
  );
  return (
    <FavoriteContext.Provider value={memoValue}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorite = (): FavoriteContextAPI =>
  useContext(FavoriteContext);

export default Provider;
