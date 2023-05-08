import { User } from "../Auth";
import { Type } from "../Type/type";
import { Respone } from "../../config/type";

export type Product = {
  _id?: string;
  image: string[];
  title: string;
  brand: string;
  description: string;
  soldOld: boolean;
  price: number;
  sale: number;
  isHot: boolean;
  material: string;
  gender: string;
  type?: Type;
  user?: User;
  createdAt?: Date;
};

export interface ProductProviderState {
  loading: boolean;
  error?: string;
  product: Product;
  setProduct: React.Dispatch<React.SetStateAction<Product>>;
  products: Product[];
  hot: Product[];
}

export interface ProductResponse extends Respone {
  data: Product;
}

export interface ArrProductResponse extends Respone {
  data: Product[];
}

export interface ProductContextAPI extends ProductProviderState {
  arrToStringImg: (imgUrl: string[]) => string;
  stringToArrImg: (imgUrl: string) => string[];
  getAllProduct: () => void;
  getProductByType: (typeId: string) => void;
  addNewProduct: (product: Product) => void;
  updateProduct: (product: Product) => void;
  // getHotProduct: () => void;
  findById: (productId: string) => void;
  // update: (productId: string) => void;
  // destroy: (productId: string) => void;
}
