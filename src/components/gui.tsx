/**
 * GUI
 * 2023-2023
 * v 0.0.1
 * 
 * */
// REACT
import React, { FC, useState } from "react";



interface ButtonProps {
  what: string;
}

export const Button : FC<ButtonProps> = ({what}) => {
  let button_style = {
  // const button_style = {
    color: "yellow",
    padding: 4,
    background: "magenta",
    fontSize: "1.25rem",
    borderRadius: 4,
    cursor: "pointer",
  }

  const [is, set_is] = useState(false);
  const toggle_button = () => {
    if (is) {
      // button_style.background = "cyan";
      set_is(false);
    } else {
      // button_style.background = "magenta";
      set_is(true);
    }
  }

  return (
    <>
       <div>
        <code onClick={() => toggle_button()} style={button_style}>{what}</code>
      </div>
    </>
  )
}