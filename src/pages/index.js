import React from 'react'
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import About from '../components/Home/About'
import Services from '../components/Home/Services'
import StyledHero from '../components/StyledHero'
import { graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export default ({ data }) => (
    <Layout>
        <StyledHero home img={data.defaultBcg.childImageSharp.fluid}>
            <Banner
                title="Continue exploring"
                info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, facere!"
            >
                <AniLink fade to="/tours" className="btn-white">
                    Explore tours
                </AniLink>
            </Banner>
        </StyledHero>
        <About />
        <Services />
    </Layout>
)

export const query = graphql`
    {
        defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
            childImageSharp {
                fluid(maxWidth: 4160, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`
