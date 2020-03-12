module.exports = {
  siteMetadata: {
    title: `Lane Le Prevost-Smith`,
    description: `Freelance Full-Stack Web Developer and Graphic Designer from Auckland, New Zealand.`,
    author: `Lane Le Prevost-Smith`,
    siteUrl: "https://lanelps.xyz",
    phone: "+64226954688",
    email: "lanelps@gmail.com"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `${__dirname}/assets/img/favicon.png`
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`
  ]
}
