import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Olombelona Software`,
    siteUrl: `https://www.olombelona.com`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Olombelona Software",
        short_name: "Olombelona",
        start_url: "/",
        icon: "medias/icon.png", // This path is relative to the root of the site.
      },
    },
  ],
}

export default config
