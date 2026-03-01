import React, { FC } from "react";
import { graphql } from "gatsby";
import type { HeadFC } from "gatsby";
import { Layout } from "../../components/hc";
import { RenderPage } from "../../render/hr";

interface Props {
  data: any;
}

export const RenalaPrivacy: FC<Props> = ({data}) => {
  return <Layout>
    <RenderPage data={data}/>
  </Layout>;
};

export default RenalaPrivacy;

export const Head: HeadFC = () => <title>Renala — Privacy Policy</title>

export const myQuery = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {categorie: {eq: "renala-privacy"}}}) {
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
