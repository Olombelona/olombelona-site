/**
 * Layout
 * 2023-2023
 * v 0.0.1
 * 
 * */
// REACT
import React, { FC } from "react";
import { useContext } from "react";
// APP
import { RegionContext } from "../context.tsx";


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
  const { lang } = useContext(RegionContext);
  console.log("lang", lang);
  return (
    <div style={pageStyles}>
    {children}
    </div>
  );
};
