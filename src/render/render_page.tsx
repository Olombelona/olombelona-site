/**
 * Render generic page
 * from data markdown html
 * 2023-2023
 * v 0.0.1
 *
 * */
 // REACT
import React, { FC } from "react";
import { useContext } from "react";
// APP
import { RegionContext } from "../context";
import { MarkdownHtml } from "../components/markdown_html";
interface Props {
  data: any;
}
export const RenderPage: FC<Props> = ({data}) => {
  const { lang } = useContext(RegionContext);
  let title = data.allMarkdownRemark.edges[0].node.frontmatter.title;
  let html = data.allMarkdownRemark.edges[0].node.html;

  for(let i = 0 ; i < data.allMarkdownRemark.edges.length ; i++) {
    if(lang === data.allMarkdownRemark.edges[i].node.frontmatter.lang) {
      title = data.allMarkdownRemark.edges[i].node.frontmatter.title;
      html = data.allMarkdownRemark.edges[i].node.html;
    }
  }

  return <>
    <h1>{title}</h1>
    <MarkdownHtml html={html} />
  </>
}
