import React from 'react'
import Helmet from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

const getMetaData = graphql`
    {
        site {
            siteMetadata {
                siteTitle: title
                siteDesc: description
                author
                siteUrl
                twitterUsername
                image
            }
        }
    }
`

const SEO = ({ title, description }) => {
    const { site } = useStaticQuery(getMetaData)
    const {
        siteTitle,
        siteDesc,
        author,
        siteUrl,
        twitterUsername,
        image,
    } = site.siteMetadata
    return (
        <Helmet
            title={`${title} | ${siteTitle}`}
            htmlAttributes={{ lang: 'en' }}
        >
            {/* If there is no description passed to the component, use the default description */}
            <meta name="description" content={description || siteDesc} />
            <meta name="image" content={image} />
            {/* Twitter card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={twitterUsername} />
            <meta name="twitter:title" content={`${title} | ${siteTitle}`} />
            <meta
                name="twitter:description"
                content={description || siteDesc}
            />
            <meta name="twitter:image" content={`${siteUrl}${image}`} />
            {/* Facebook Cards */}
            <meta property="og:url" content={siteUrl} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={`${title} | ${siteTitle}`} />
            <meta property="og:description" content={description || siteDesc} />
            <meta property="og:image" content={`${siteUrl}${image}`} />
            <meta property="og:image:width" content="400" />
            <meta property="og:image:height" content="250" />
        </Helmet>
    )
}

export default SEO
