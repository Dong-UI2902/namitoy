import Api from "../../config/Api";
import { ArrTypeResponse, Type, TypeResponse } from "./type";
import { Respone } from "../../config/type";

const PATH = "/types";
async function getAllType(): Promise<ArrTypeResponse> {
  const response = await Api.get(PATH);

  return response.data;
}

async function getTypeById(_id: string): Promise<TypeResponse> {
  const response = await Api.get(`${PATH}/${_id}`);

  return response.data;
}

async function addNewType(type: Type): Promise<TypeResponse> {
  const response = await Api.post(PATH, type);

  return response.data;
}

async function updateType(newType: Type): Promise<Respone> {
  const response = await Api.put(`${PATH}/${newType._id}`, newType);

  return response.data;
}

async function destroyType(_id: string): Promise<void> {
  const response = await Api.delete(`${PATH}/${_id}`);

  return response.data;
}

export default {
  getAllType,
  getTypeById,
  addNewType,
  updateType,
  destroyType,
};
