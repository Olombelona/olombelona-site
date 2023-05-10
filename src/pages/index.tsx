/**
 * Index
 * 2023-2023
 * v 0.0.2
 * 
 * */



// WARNING
// Flash of Unstyled Content (FOUC)

// https://www.digitalocean.com/community/tutorials/how-to-handle-async-data-loading-lazy-loading-and-code-splitting-with-react
// https://stackoverflow.com/questions/59572173/flash-of-unstyled-content-fouc-when-using-gatsby-with-emotion






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
