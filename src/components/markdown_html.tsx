/**
 * Render Markdown html
 * 2023-2023
 * v 0.0.1
 * */

// REACT
import React, { FC } from "react"

interface Props {
  html : any;
}

export const MarkdownHtml: FC<Props> =({html}) => {
  return <div className="markdown-content" dangerouslySetInnerHTML={{ __html: html }} />
}
