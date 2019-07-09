import React, { Fragment } from 'react'
import TourList from './TourList'
import { useStaticQuery, graphql } from 'gatsby'

const getTours = graphql`
    {
        tours: allContentfulTourExample {
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

const Tours = () => {
    const { tours } = useStaticQuery(getTours)
    return (
        <Fragment>
            <TourList tours={tours} />
        </Fragment>
    )
}

export default Tours
