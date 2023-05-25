import { User } from "../Auth";
import { Respone } from "../../config/type";
import { Product } from "../Product";

export type Favorite = {
  _id?: string;
  user?: User;
  product: Product;
  createdAt?: Date;
};

export interface FavoriteProviderState {
  loading: boolean;
  error?: string;
  favorite: Favorite;
  favorites: Favorite[];
  totalFavorite: number;
}

export interface FavoriteResponse extends Respone {
  data: Favorite;
}

export interface ArrCartResponse extends Respone {
  data: Favorite[];
}

export interface FavoriteContextAPI extends FavoriteProviderState {
  addToFavorite: (favorite: Favorite) => void;
  getFavorites: () => void;
  getTotalFavorite: () => void;
  removeFavorite: (_id: string) => void;
}
