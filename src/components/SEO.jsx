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
            <meta name="twitter:title" content={siteTitle} />
            <meta
                name="twitter:description"
                content={description || siteDesc}
            />
            <meta name="twitter:image" content={`${siteUrl}${image}`} />
        </Helmet>
    )
}

export default SEO
