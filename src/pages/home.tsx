/**
 * Index
 * 2023-2023
 * v 0.0.3
 * 
 * */
// REACT
import React, { FC } from "react";
// GATSBY
import type { HeadFC, PageProps } from "gatsby"
// APP
import { RenderHome } from "../render/hr.tsx"
import { Layout } from "../components/hc.tsx";


const Home: FC<PageProps> = () => {
  return (
    <Layout>
      <RenderHome/>
    </Layout>
  )
}

export default Home;

export const Head: HeadFC = () => <title>Olombelona — Accueil</title>
