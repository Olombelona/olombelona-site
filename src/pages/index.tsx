/**
 * Index
 * 2023-2023
 * v 0.0.2
 * 
 * */
// Fix the Flash of Unstyled Content (FOUC)
// https://www.gatsbyjs.com/plugins/gatsby-plugin-fix-fouc/


// REACT
import React, { FC } from "react";
// import asyncRoute from './asyncRoute'
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
