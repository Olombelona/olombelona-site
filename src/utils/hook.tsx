/**
 * 
 * Hook
 * 2023-2023
 * v 0.0.1
 * 
 * 
 * */

import { useState, useEffect } from "react";

export function useNode(data : any, lang: string | null) {
  if(lang === null) {
    lang = "en";
  }
  let buf_node = data.allMarkdownRemark.edges[0].node;
  const [node, set_node] = useState(buf_node);

  useEffect(() => {
    for(let i = 0 ; i < data.allMarkdownRemark.edges.length ; i++) {
      if(lang === data.allMarkdownRemark.edges[i].node.frontmatter.lang) {
        buf_node = data.allMarkdownRemark.edges[i].node;
        set_node(buf_node);
      }
    }
  })
  return node;
}