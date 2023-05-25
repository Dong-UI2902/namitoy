import React from "react";
import { AuthProvider } from "../contexts/Auth";
import { ProductProvider } from "../contexts/Product";
import { TypeProvider } from "../contexts/Type";
import { FavoriteProvider } from "../contexts/Favorite";

const Providers: React.FC<{ children: any }> = ({ children }) => {
  return (
    <AuthProvider>
      <TypeProvider>
        <ProductProvider>
          <FavoriteProvider>{children}</FavoriteProvider>
        </ProductProvider>
      </TypeProvider>
    </AuthProvider>
  );
};

export default Providers;
