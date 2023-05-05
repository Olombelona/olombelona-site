/**
 * Layout
 * 2023-2023
 * v 0.0.1
 * 
 * */
import React, { FC } from "react";

interface Props {
  children? : React.ReactNode;
}

const Layout: FC<Props> = ({children}) => {
  return (
    <div>
    {children}
    </div>
  );
};

export default Layout;