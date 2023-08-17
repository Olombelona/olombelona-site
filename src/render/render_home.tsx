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
import { ButtonCodeNav } from "../components/hc.tsx";
import { RegionContext } from "./../context";
import { get_css_value } from "../utils/hu.tsx";

// need to define properly the any... it's very too much and very lazy !
interface Props {
  // data? : any;
}


const style_titles = {
  fontFamily: get_css_value("--font_title"),
  marginTop: 24,
  maxWidth: 600,
}
const style_subtitles = {
  color: "magenta",
  marginTop: -24,
  marginLeft: 128,
  marginBottom: 42,
}
const question_styles = {
  marginLeft: 24,
  marginBottom: -8,
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
      <h1 style={style_titles}>{info.title}</h1>
      <h2 style={style_subtitles}>{info.subtitle}</h2>
      <h3 style={question_styles}>{info.message}</h3>
      <p>
        <ButtonCodeNav what={info.misc} to="/contact"/>
      </p>
  </>
}