module.exports = {
  siteMetadata: {
    title: "Ads Games",
    titleTemplate: "%s - A.D.S. Games",
    description: "A.D.S. Games",
    keywords: "games, adsgames",
    siteUrl: "https://adsgames.net",
    author: {
      name: "Allan Legemaate",
      url: "https://alegemaate.github.io",
      email: "alegemaate@gmail.com",
    },
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "A.D.S. Games",
        short_name: "A.D.S. Games",
        start_url: "/",
        background_color: "#111111",
        theme_color: "#E43F00",
        display: "standalone",
        icon: "src/images/logos/logo.svg",
        lang: "en",
        description: "A.D.S. Games website",
      },
    },
    "gatsby-plugin-typescript",
    "gatsby-plugin-typescript-checker",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-create-client-paths",
      options: {
        prefixes: ["/games/*", "/members/*"],
      },
    },
  ],
};
