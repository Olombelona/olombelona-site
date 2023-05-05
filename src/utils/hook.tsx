/**
 * 
 * Hook
 * 2023-2023
 * v 0.0.1
 * 
 * 
 * */

import { useState } from "react";
// import { useContext, useState } from "react";
// import { RegionContext } from "../context/context";

export function useNode(data : any) {
  // const { lang } = useContext(RegionContext);
  const lang  = "fr";
  let buf_node = data.allMarkdownRemark.edges[0].node;

  for(let i = 0 ; i < data.allMarkdownRemark.edges.length ; i++) {
    if(lang === data.allMarkdownRemark.edges[i].node.frontmatter.lang) {
      buf_node = data.allMarkdownRemark.edges[i].node;
    }
  }

  const [node, set_node] = useState(buf_node);
  return node;
}