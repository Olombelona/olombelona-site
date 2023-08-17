/**
 * Render Contact
 * 2023-2023
 * v 0.0.1
 * 
 * */

// REACT
import React, { FC } from "react";
import { useContext } from "react";
// GATSBY
import { useStaticQuery, graphql } from "gatsby";

// APP
import { useNode } from "../utils/hu.tsx";
import { MarkdownHtml } from "../components/hc.tsx";
import { RegionContext } from "./../context";

// need to define properly the any... it's very too much and very lazy !
interface Props {
  // data? : any;
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

export const RenderTeam: FC<Props> =() => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: {frontmatter: {categorie: {eq: "team"}}}) {
          edges {
            node {
              frontmatter {
                categorie
                lang
              }
              html
            }
          }
        }
      }
    `
  )
  const { lang } = useContext(RegionContext);
  const { html} = useNode(data, lang);

  return <>
    <p style={paragraphStyles}>
      <MarkdownHtml html={html} />
    </p>
  </>
}