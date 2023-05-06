/**
 * Index
 * 2023-2023
 * v 0.0.2
 * 
 * */
// REACT
import * as React from "react"
// GATSBY
import type { HeadFC, PageProps } from "gatsby"
// APP
import { Layout } from "../components/h.tsx"


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
const codeStyles = {
  color: "yellow",
  padding: 4,
  backgroundColor: "magenta",
  fontSize: "1.25rem",
  borderRadius: 4,
}

function Button() {
  return <code style={codeStyles}>println("Suivez la voie du code");</code>
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1 style={headingStyles}>
        Olombelona
        <br />
        <span style={headingAccentStyles}>Atelier de création digitale</span>
      </h1>
      <p style={paragraphStyles}>
        Une création par le code ? <br /><br /><Button/><br /><br />pour allez vers le futur de l'humanité...
      </p>
      
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Olombelona</title>
