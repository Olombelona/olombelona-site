import React, { FC } from "react";
import { graphql } from "gatsby";
import type { HeadFC } from "gatsby";
import { Layout } from "../../components/hc";
import { RenderPage } from "../../render/hr";

interface Props {
  data: any;
}

export const RenalaStorePage: FC<Props> = ({data}) => {
  return <Layout>
    <RenderPage data={data}/>
  </Layout>;
};

export default RenalaStorePage;

export const Head: HeadFC = () => <>
  <title>Renala — Disk Space Visualizer for macOS</title>
  <meta name="description" content="Renala helps you find what is taking space on your Mac with an interactive treemap, fast drill-down, and clear cleanup insights." />
</>;

export const myQuery = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {categorie: {eq: "renala-store"}}}) {
      edges {
        node {
          frontmatter {
            categorie
            title
            menu
            lang
          }
          html
        }
      }
    }
  }
`
