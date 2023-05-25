import Api from "../../config/Api";
import { Favorite } from "./type";

const PATH = "/favorites";

async function getFavorites(): Promise<any> {
  const response = await Api.get(`${PATH}`);

  return response.data;
}

async function getTotalFavorites(): Promise<any> {
  const response = await Api.get(`${PATH}/count`);

  return response.data;
}

async function addToFavorite(favorite: Favorite): Promise<void> {
  const response = await Api.post(PATH, favorite);

  return response.data;
}

async function removeFavorite(_id: string): Promise<void> {
  const response = await Api.delete(`${PATH}/${_id}`);

  return response.data;
}

export default {
  addToFavorite,
  getFavorites,
  getTotalFavorites,
  removeFavorite,
};
