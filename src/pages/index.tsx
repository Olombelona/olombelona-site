import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

const pageStyles = {
  color: "magenta",
  padding: 42,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
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

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        Olombelona
        <br />
        <span style={headingAccentStyles}>Atelier de création digitale</span>
      </h1>
      <p style={paragraphStyles}>
        Une création par le code ? <br /><br /><code style={codeStyles}>println("Suivez la voie du code");</code><br /><br />pour allez vers le futur de l'humanité...
      </p>
      
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Olombelona</title>
