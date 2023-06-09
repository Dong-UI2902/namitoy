import React from "react";
import { AuthProvider } from "../contexts/Auth";
import { ProductProvider } from "../contexts/Product";
import { TypeProvider } from "../contexts/Type";
import { FavoriteProvider } from "../contexts/Favorite";

const Providers: React.FC<{ children: any }> = ({ children }) => {
  return (
    <TypeProvider>
      <AuthProvider>
        <ProductProvider>
          <FavoriteProvider>{children}</FavoriteProvider>
        </ProductProvider>
      </AuthProvider>
    </TypeProvider>
  );
};

export default Providers;
