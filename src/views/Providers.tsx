import React from "react";
import { AuthProvider } from "../contexts/Auth";
import { ProductProvider } from "../contexts/Product";
import { TypeProvider } from "../contexts/Type";

const Providers: React.FC<{ children: any }> = ({ children }) => {
  return (
    <AuthProvider>
      <TypeProvider>
        <ProductProvider>{children}</ProductProvider>
      </TypeProvider>
    </AuthProvider>
  );
};

export default Providers;
