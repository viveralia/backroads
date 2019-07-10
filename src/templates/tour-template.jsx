import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import StyledHero from '../components/StyledHero'
import styles from '../css/template.module.css'
import Img from 'gatsby-image'
import { FaMoneyBillWave, FaMap } from 'react-icons/fa'
import Day from '../components/SingleTour/Day'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import SEO from '../components/SEO'

const tourTemplate = ({ data }) => {
    // Destructuring all the info needed from data
    const {
        name,
        price,
        country,
        days,
        start,
        description: { description },
        journey,
        images,
    } = data.tour

    // Saves the first image in mainImage and the rest in tourImages
    const [mainImage, ...tourImages] = images

    return (
        <Layout>
            <SEO title={name} />
            <StyledHero img={mainImage.fluid} />
            <section className={styles.template}>
                <div className={styles.center}>
                    <div className={styles.images}>
                        {tourImages.map((item, index) => (
                            <Img
                                key={index}
                                fluid={item.fluid}
                                alt="single tour"
                                className={styles.image}
                            />
                        ))}
                    </div>
                    <h2>{name}</h2>
                    <div className={styles.info}>
                        <p>
                            <FaMoneyBillWave className={styles.icon} /> starting
                            from ${price}
                        </p>
                        <p>
                            <FaMap className={styles.icon} /> {country}
                        </p>
                    </div>
                    <h4>starts on: {start}</h4>
                    <h4>duration: {days} days</h4>
                    <p className={styles.desc}>{description}</p>
                    <h2>Daily schedule</h2>
                    <div className={styles.journey}>
                        {journey.map((item, index) => (
                            <Day key={index} day={item.day} info={item.info} />
                        ))}
                    </div>
                    <AniLink fade to="/tours" className="btn-primary">
                        Back to tours
                    </AniLink>
                </div>
            </section>
        </Layout>
    )
}

// PageQuery from Gatsby
export const query = graphql`
    query($slug: String) {
        tour: contentfulTourExample(slug: { eq: $slug }) {
            name
            price
            country
            days
            start(formatString: "dddd MMMM Do, YYYY")
            description {
                description
            }
            journey {
                day
                info
            }
            images {
                fluid {
                    ...GatsbyContentfulFluid_tracedSVG
                }
            }
        }
    }
`

export default tourTemplate
