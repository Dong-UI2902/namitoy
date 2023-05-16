import Api from "../../config/Api";
import {
  ArrProductResponse,
  PaginationResponse,
  Product,
  ProductResponse,
} from "./type";

const PATH = "/products";

async function getProducts(page: number): Promise<PaginationResponse> {
  const response = await Api.get(`${PATH}`, {
    params: { page: page },
  });

  return response.data;
}

async function getProductByType(
  typeId: string | undefined
): Promise<ArrProductResponse> {
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
  getProducts,
  getProductByType,
  getHotProduct,
  findById,
  store,
  update,
  destroy,
};
