import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import StyledHero from '../components/StyledHero'
import BlogList from '../components/Blog/BlogList'
import SEO from '../components/SEO'

const blog = ({ data }) => {
    return (
        <Layout>
            <SEO title="Blog" />
            <StyledHero img={data.blogBcg.childImageSharp.fluid}></StyledHero>
            <BlogList />
        </Layout>
    )
}

export default blog

export const query = graphql`
    {
        blogBcg: file(relativePath: { eq: "blogBcg.jpeg" }) {
            childImageSharp {
                fluid(maxWidth: 4160, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`
