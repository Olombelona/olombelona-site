/**
 * Header
 * 2023-2023
 * v 0.0.1
 */

// REACT
import React, { FC } from "react";
// APP
import { MenuHeaderBig } from "../menu/menu__header_big";

interface PropsHeader {

}

export const Header: FC<PropsHeader> = () => {
  return <header><MenuHeaderBig/></header>
}
