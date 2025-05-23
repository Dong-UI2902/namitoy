import { Respone } from "../../config/type";

export type Type = {
  _id?: string;
  name: string;
  slug?: string;
  createdAt?: Date;
};

export interface TypeResponse extends Respone {
  data: Type;
}

export interface ArrTypeResponse extends Respone {
  data: Type[];
}

export interface TypeProviderState {
  loading: boolean;
  error?: string;
  type: Type;
  setType: (type: Type) => void;
  types: Type[];
}

export interface TypeContextAPI extends TypeProviderState {
  addNewType: (type: Type) => void;
  getAllTypes: () => void;
  handleHref: (href: string) => string;
  // getProductById: (productId: string) => void;
  // store: (product: ViewProduct) => void;
  updateType: (newType: Type) => void;
  deleteType: (typeId: string) => void;
}
