import React, { FC } from "react";
import { graphql } from "gatsby";
import type { HeadFC } from "gatsby";
import { Layout } from "../components/hc";
import { RenderPage } from "../render/hr";

interface Props {
  data: any;
}

export const Privacy: FC<Props> = ({data}) => {
  return <Layout>
    <RenderPage data={data}/>
  </Layout>;
};

export default Privacy;

export const Head: HeadFC = () => <title>Olombelona — Privacy Policy</title>

export const myQuery = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {categorie: {eq: "privacy"}}}) {
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
