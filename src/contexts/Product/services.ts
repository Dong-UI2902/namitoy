import Api from "../../config/Api";
import { ArrProductResponse, Product, ProductResponse } from "./type";

const PATH = "/products";

async function getAllProducts(): Promise<ArrProductResponse> {
  const response = await Api.get(`${PATH}`);

  return response.data;
}

async function getProductByType(typeId: string): Promise<ArrProductResponse> {
  const response = await Api.get(`${PATH}/type/${typeId}`);

  return response.data;
}

async function getHotProduct(): Promise<ArrProductResponse> {
  const response = await Api.get(`${PATH}/hot`);

  return response.data;
}

async function findById(_id: string): Promise<ProductResponse> {
  const response = await Api.get(`${PATH}/${_id}`);

  return response.data;
}

async function store(prod: Product): Promise<ProductResponse> {
  const response = await Api.post(PATH, prod);

  return response.data;
}

async function update(newProduct: Product): Promise<void> {
  const response = await Api.put(`${PATH}/${newProduct._id}`, newProduct);

  return response.data;
}

async function destroy(_id: string): Promise<void> {
  const response = await Api.delete(`${PATH}/${_id}`);

  return response.data;
}

export default {
  getAllProducts,
  getProductByType,
  getHotProduct,
  findById,
  store,
  update,
  destroy,
};
