import React from 'react'
import BlogCard from './BlogCard'
import Title from '../Title'
import { graphql, useStaticQuery } from 'gatsby'
import styles from '../../css/blog.module.css'

const getPosts = graphql`
    {
        posts: allContentfulPostExample(
            sort: { fields: published, order: DESC }
        ) {
            edges {
                node {
                    published(formatString: "MMMM Do, YYYY")
                    title
                    slug
                    id: contentful_id
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

const BlogList = () => {
    const { posts } = useStaticQuery(getPosts)
    return (
        <section className={styles.blog}>
            <Title title="our" subtitle="posts" />
            <div className={styles.center}>
                {posts.edges.map(({ node }) => (
                    <BlogCard key={node.id} blog={node} />
                ))}
            </div>
        </section>
    )
}

export default BlogList
