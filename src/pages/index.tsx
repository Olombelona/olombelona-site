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
import { Layout, Button } from "../components/h.tsx"


const headingStyles = {
  marginTop: 0,
  marginBottom: 42,
  maxWidth: 600,
}
const headingAccentStyles = {
  color: "magenta",
}
const paragraphStyles = {
  marginBottom: 48,
}




const IndexPage: FC<PageProps> = () => {
  const mess = `println("Envoyez-nous votre projet");`
  return (
    <Layout>
      <h1 style={headingStyles}>
        Olombelona Software
        <br />
        <span style={headingAccentStyles}>Atelier de création digitale</span>
      </h1>
      <p style={paragraphStyles}>
        Une création par le code ? <br /><br /><Button what={mess}/><br />
      </p>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Olombelona Software</title>
