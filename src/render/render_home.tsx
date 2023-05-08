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
import { Button } from "../components/h_c.tsx";
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

export const RenderHome: FC<Props> =() => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: {frontmatter: {categorie: {eq: "home"}}}) {
          edges {
            node {
              frontmatter {
                title
                subtitle
                message
                misc
                lang
              }
            }
          }
        }
      }
    `
  )
  const { lang } = useContext(RegionContext);
  const {frontmatter} = useNode(data, lang);
  const info = frontmatter;

  return <>
    {/* <Layout> */}
      <h1 style={headingStyles}>
        {info.title}
        <br />
        <span style={headingAccentStyles}>{info.subtitle}</span>
      </h1>
      <p style={paragraphStyles}>
       {info.message}<br /><br /><Button what={info.misc}/><br />
      </p>
    {/* </Layout> */}
  </>
}