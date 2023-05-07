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
import { RenderHome, RenderAbout } from "../render/h.tsx"
import { Layout } from "../components/h.tsx";


const IndexPage: FC<PageProps> = () => {
  return (
    <Layout>
      <RenderHome/>
      <RenderAbout/>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Olombelona Software</title>
