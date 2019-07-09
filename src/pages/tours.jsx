import React, { Component } from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import StyledHero from '../components/StyledHero'
import Tours from '../components/Tours/Tours'

export default class tours extends Component {
    render() {
        return (
            <Layout>
                <StyledHero
                    img={this.props.data.defaultBcg.childImageSharp.fluid}
                ></StyledHero>
                <Tours />
            </Layout>
        )
    }
}

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
