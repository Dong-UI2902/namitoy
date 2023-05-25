import React from "react";

const Layout: React.FC<{ children: any }> = ({ children }) => {
  return <div className="layout">{children}</div>;
};

export default Layout;
