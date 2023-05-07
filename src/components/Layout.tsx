/**
 * Layout
 * 2023-2023
 * v 0.0.1
 * 
 * */
// REACT
import React, { FC } from "react";

interface Props {
  children? : React.ReactNode;
}

const pageStyles = {
  background : "yellow",
  color: "magenta",
  padding: 42,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

export const Layout: FC<Props> = ({children}) => {
  return (
    <div style={pageStyles}>
    {children}
    </div>
  );
};
