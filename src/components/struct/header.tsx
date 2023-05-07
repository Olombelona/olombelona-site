/**
 * Header
 * 2023-2023
 * v 0.0.1
 */

// REACT
import React, { FC } from "react";
// APP
import { MenuContent } from "./../menu/menu_content";

interface PropsHeader { 

}

export const Header: FC<PropsHeader> = () => {
  const { lang } = useContext(RegionContext);
  return (
    <><MenuContent/></>
  )
} 