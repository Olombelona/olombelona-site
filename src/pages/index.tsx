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
import { RenderHome, RenderAbout } from "../render/h_r.tsx"
import { Layout } from "../components/h_c.tsx";

// Try to add meta to disable auto translate from safari and google
// https://medium.com/yellowcode/how-to-do-meta-tags-in-gatsbyjs-45245dc68ab9

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
