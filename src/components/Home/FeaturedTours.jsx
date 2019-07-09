import React from 'react'
import Tour from '../Tours/Tour'
import { useStaticQuery, graphql } from 'gatsby'
import Title from '../Title'
import styles from '../../css/items.module.css'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const getFeaturedTours = graphql`
    {
        featuredTours: allContentfulTourExample(
            filter: { featured: { eq: true } }
        ) {
            edges {
                node {
                    contentful_id
                    name
                    price
                    slug
                    country
                    days
                    images {
                        fluid {
                            ...GatsbyContentfulFluid_tracedSVG
                        }
                    }
                }
            }
        }
    }
`

const FeaturedTours = () => {
    const response = useStaticQuery(getFeaturedTours)
    const tours = response.featuredTours.edges

    return (
        <section className={styles.tours}>
            <Title title="featured" subtitle="tours" />
            <div className={styles.center}>
                {tours.map(tour => (
                    <Tour key={tour.node.contentful_id} tour={tour.node} />
                ))}
            </div>
            <AniLink fade to="/tours" className="btn-primary">
                All tours
            </AniLink>
        </section>
    )
}

export default FeaturedTours
