require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
    siteMetadata: {
        title: 'Backroads',
        description:
            'Explore awesome worldwide tours and discover what makes each of them unique. Forget your daily routine & say yes to adventure.',
        author: '@johndoe',
        twitterUsername: '@johndoe',
        // Inside the static folder
        image: '/defaultBcg.jpeg',
        // Without the ending slash (/)
        siteUrl: 'https://udemy-gatsby-github.netlify.com',
    },
    plugins: [
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images/`,
            },
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-transition-link`,
        `gatsby-plugin-playground`,
        `gatsby-plugin-sitemap`,
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: 'https://udemy-gatsby-github.netlify.com/',
                sitemap: 'https://udemy-gatsby-github.netlify.com/sitemap.xml',
                policy: [{ userAgent: '*', allow: '/' }],
            },
        },
    ],
}
