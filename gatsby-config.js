module.exports = {
  siteMetadata: {
    title: "Ads Games",
    titleTemplate: "%s - Ads Games",
    description: "Frontend for A.D.S. Games.",
    keywords: "gatsbyjs, gatsby, javascript",
    siteUrl: "https://adsgames.net",
    author: {
      name: "Allan Legemaate",
      url: "https://alegemaate.github.io",
      email: "alegemaate@gmail.com",
    },
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-json",
    "gatsby-plugin-typescript",
    "gatsby-plugin-typescript-checker",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-create-client-paths",
      options: {
        prefixes: ["/games/*"],
      },
    },
  ],
};
