import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import StyledHero from '../components/StyledHero'
import Contact from '../components/Contact/Contact'
import SEO from '../components/SEO'

const contact = ({ data }) => {
    return (
        <Layout>
            <SEO title="Contact" />
            <StyledHero
                img={data.contactBcg.childImageSharp.fluid}
            ></StyledHero>
            <Contact />
        </Layout>
    )
}

export default contact

export const query = graphql`
    {
        contactBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
            childImageSharp {
                fluid(maxWidth: 4160, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`
