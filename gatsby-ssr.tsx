//REACT
import React from "react";
// GATSBY
import { GatsbySSR } from "gatsby";
// APP
import { RegionContextProvider } from "./src/context";

export const wrapRootElement = ({ element }: { element: React.ReactNode }) => (
  <RegionContextProvider>{element}</RegionContextProvider>
)
