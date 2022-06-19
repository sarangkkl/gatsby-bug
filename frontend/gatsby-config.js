const strapiConfig = {
  apiURL: 'http://localhost:1337',
  accessToken: 'bdb96f43f777a5eab1aefff34482c31b402960dabfb98e525cef3b3b65f78d40daf83accaf1030f4f1721e8eca6ff35ee9823be7e246589a37b9143c3aa4cb6fb210a9b45f232a1ffb0ae26fd8affb5c942e52df74f42c27b31c69db133638b9e5821397be919bca0b8471bb3c09a5ef083af6fb47a68a82b0b21d9cf34a0e5b',
  collectionTypes: ['exshow'],
  singleTypes: [],
};

module.exports = {
  siteMetadata: {
    title: `frontend`,
    siteUrl: `https://www.yourdomain.tld`
  },

  plugins: ["gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: `gatsby-source-strapi`,
    options: strapiConfig,
  },
]
};