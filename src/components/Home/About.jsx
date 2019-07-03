import React from 'react'
import Title from '../Title'
import styles from '../../css/about.module.css'
// import img from '../../images/defaultBcg.jpeg'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const getAbout = graphql`
    query AboutImg {
        aboutImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
            childImageSharp {
                fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`

const About = () => {
    const { aboutImage } = useStaticQuery(getAbout)
    return (
        <section className={styles.about}>
            <Title title="about" subtitle="us" />
            <div className={styles.aboutCenter}>
                <article className={styles.aboutImg}>
                    <div className={styles.imgContainer}>
                        {/* <img src={img} alt="About Company" /> */}
                        <Img
                            fluid={aboutImage.childImageSharp.fluid}
                            alt="Awesome Landscape"
                        />
                    </div>
                </article>
                <article className={styles.aboutInfo}>
                    <h4>Explore the difference</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Architecto nesciunt ullam optio.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Architecto nesciunt ullam optio.
                    </p>
                    <button type="button" className="btn-primary">
                        Read more
                    </button>
                </article>
            </div>
        </section>
    )
}

export default About
