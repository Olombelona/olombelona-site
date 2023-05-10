import type { GatsbyConfig } from "gatsby"

// import { breakpoints } from "./src/themes";
import type { GatsbyPluginFixFoucRefOptions } from "gatsby-plugin-fix-fouc";

require("dotenv").config();

const config: GatsbyConfig = {
  siteMetadata: {
    title: `olombelona software`,
    siteUrl: `https://www.olombelona.com`,
    version: `0.0.3`,
    author: `stanislas Marçais / Dinh Doan Van Bien`,
    google: `nostranslate`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    // LOADING Not sur that's work
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `yellow`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    // LOADING 2
    {
      resolve: `gatsby-plugin-fix-fouc`,
      options: {
        attributeName: "is-loading",
        // minWidth: breakpoints.values.sm,
        timeout: 3000,
      } as GatsbyPluginFixFoucRefOptions,
    },
    // FONT
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
    // MANIFEST
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Olombelona software",
        short_name: "Olombelona",
        start_url: "/",
        icon: "medias/icon.png", // This path is relative to the root of the site.
        crossOrigin: `use-credentials`,
      },
    },
    // IMAGE
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // FILE
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `md content fr`,
        path: `${__dirname}/medias/markdown_content/fr`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `md content en`,
        path: `${__dirname}/medias/markdown_content/en`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}

export default config
