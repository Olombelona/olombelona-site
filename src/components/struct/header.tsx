/**
 * Header
 * 2023-2023
 * v 0.0.1
 */

// REACT
import React, { FC } from "react";
// APP
import { MenuBig } from "./../menu/menu__big";
import { HeaderContextProvider } from "../../context";

interface PropsHeader { 

}

export const Header: FC<PropsHeader> = () => {
  return (<HeaderContextProvider>
    <MenuBig/>
  </HeaderContextProvider>)
} 

