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
import { useNode } from "../utils/h_u.tsx";
import { MarkdownHtml } from "../components/h_c.tsx";
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

const paragraphStyles = {
  marginBottom: 48,
}

export const RenderAbout: FC<Props> =() => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: {frontmatter: {categorie: {eq: "about"}}}) {
          edges {
            node {
              frontmatter {
                categorie
                title
                subtitle
                message
                misc
                menu
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
  const {frontmatter, html} = useNode(data, lang);
  const info = frontmatter;

  return <>
    <h2 style={headingStyles}>{info.subtitle}</h2>
    <p style={paragraphStyles}>
      <MarkdownHtml html={html} />
    </p>
  </>
}