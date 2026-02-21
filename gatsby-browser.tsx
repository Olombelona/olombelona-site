//REACT
import React from "react";
// APP
import "./src/global.css";
import { RegionContextProvider } from "./src/context";

export const wrapRootElement = ({ element }: { element: React.ReactNode }) => (
  <RegionContextProvider>{element}</RegionContextProvider>
)
