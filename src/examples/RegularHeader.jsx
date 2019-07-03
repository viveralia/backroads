import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const getSiteData = graphql`
    {
        site {
            siteMetadata {
                title
                description
                author
            }
        }
    }
`
const RegularHeader = () => {
    return (
        <StaticQuery
            query={getSiteData}
            render={data => (
                <div>
                    <h2>Title: {data.site.siteMetadata.title}</h2>
                    <h4>Author: {data.site.siteMetadata.author}</h4>
                </div>
            )}
        />
    )
}

export default RegularHeader
