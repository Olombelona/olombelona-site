/**
 * Render generic page 
 * from data markdown html
 * 2023-2023
 * v 0.0.1
 * 
 * */
 // REACT
import React, { FC } from "react";
import { useContext, useState } from "react";
// APP
import { RegionContext } from "../context";
import { MarkdownHtml } from "../components/markdown_html";
interface Props {
  data: any;
}
export const RenderPage: FC<Props> = ({data}) => {
  const { lang } = useContext(RegionContext);
  let buf_title = data.allMarkdownRemark.edges[0].node.frontmatter.title;
  let buf_html = data.allMarkdownRemark.edges[0].node.html;

  // useEffect or not useEffect for this loop ?????
  for(let i = 0 ; i < data.allMarkdownRemark.edges.length ; i++) {
    if(lang === data.allMarkdownRemark.edges[i].node.frontmatter.lang) {
      buf_title = data.allMarkdownRemark.edges[i].node.frontmatter.title;
      buf_html = data.allMarkdownRemark.edges[i].node.html;
    }
  }

  const [title, set_title] = useState(buf_title);
  const [html, set_html] = useState(buf_html);

  return <>
    <h1>{title}</h1>
    <MarkdownHtml html={html} />
  </>
}