import type { GatsbyConfig } from "gatsby"

require("dotenv").config();

const config: GatsbyConfig = {
  siteMetadata: {
    title: `olombelona-site`,
    siteUrl: `https://www.olombelona.com`,
    version: `0.0.2`,
    author: `stanislas Marçais`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [    {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: "Olombelona",
      short_name: "O",
      start_url: "/",
      icon: "medias/icon.png", // This path is relative to the root of the site.
      crossOrigin: `use-credentials`,
    },
  },],
}

export default config
