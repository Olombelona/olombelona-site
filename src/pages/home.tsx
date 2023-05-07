/**
 * Index
 * 2023-2023
 * v 0.0.2
 * 
 * */
// REACT
import React, { FC } from "react";
// GATSBY
import type { HeadFC, PageProps } from "gatsby"
// APP
import { RenderPageHome } from "../render/h.tsx"


const Home: FC<PageProps> = () => {
  return (
    <RenderPageHome/>
  )
}

export default Home;

export const Head: HeadFC = () => <title>Olombelona Software</title>
