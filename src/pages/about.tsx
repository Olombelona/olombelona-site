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
import { RenderAbout, RenderTeam } from "../render/hr.tsx"
import { Layout } from "../components/hc.tsx";


const About: FC<PageProps> = () => {
  return (
    <Layout>
      <RenderAbout/>
      <RenderTeam/>
    </Layout>
  )
}

export default About;

export const Head: HeadFC = () => <title>Olombelona Software</title>
