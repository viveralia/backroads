import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import styles from '../css/blog.module.css'
import BlogCard from '../components/Blog/BlogCard'
import Title from '../components/Title'
import SEO from '../components/SEO'

export const query = graphql`
    query getPosts($skip: Int, $limit: Int) {
        posts: allContentfulPostExample(
            skip: $skip
            limit: $limit
            sort: { fields: published, order: DESC }
        ) {
            edges {
                node {
                    slug
                    title
                    id: contentful_id
                    published(formatString: "MMMM Do, YYYY")
                    image {
                        fluid {
                            ...GatsbyContentfulFluid_withWebp
                        }
                    }
                }
            }
        }
    }
`

// Since we are passing more elements from gatsby-node, we will use props instead of direct destructuring
const blogListTemplate = props => {
    // Normal destructuring as always
    const { data } = props
    // Destructuring the variables from gatsby-node
    const { currentPage, numPages } = props.pageContext
    // Pagination
    const prevPage = currentPage > 2 ? `/blogs/${currentPage - 1}` : `/blogs`
    const nextPage = `/blogs/${currentPage + 1}`
    return (
        <Layout>
            <SEO title="Blogs" />
            <section className={styles.blog}>
                <Title title="latest" subtitle="posts" />
                <div className={styles.center}>
                    {data.posts.edges.map(({ node }) => (
                        <BlogCard key={node.id} blog={node} />
                    ))}
                </div>
                {/* Pagination UI */}
                <section className={styles.links}>
                    {/* Previous Button */}
                    <AniLink
                        fade
                        to={prevPage}
                        className={
                            currentPage > 1
                                ? `${styles.link}`
                                : `${styles.hide}`
                        }
                    >
                        Prev
                    </AniLink>
                    {/* Creating an array with X undefined items equal to numPages */}
                    {Array.from({ length: numPages }, (_, i) => (
                        <AniLink
                            key={i}
                            fade
                            // Links to the numerical url only if it's not the first page (other than the item 0 in the array)
                            to={`/blogs/${i === 0 ? '' : i + 1}`}
                            // Is the button number the same as the currentPage? Then add the active class
                            className={
                                i + 1 === currentPage
                                    ? `${styles.link} ${styles.active}`
                                    : `${styles.link}`
                            }
                        >
                            {/* Shows the page number */}
                            {i + 1}
                        </AniLink>
                    ))}
                    {/* Next button */}
                    <AniLink
                        fade
                        to={nextPage}
                        className={
                            currentPage === numPages
                                ? `${styles.hide}`
                                : `${styles.link}`
                        }
                    >
                        Next
                    </AniLink>
                </section>
            </section>
        </Layout>
    )
}

export default blogListTemplate
