import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import styles from '../css/single-blog.module.css'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export const query = graphql`
    query($slug: String) {
        post: contentfulPostExample(slug: { eq: $slug }) {
            title
            published(formatString: "MMMM Do, YYYY")
            text {
                json
            }
        }
    }
`

const blogTemplate = ({ data }) => {
    const {
        title,
        published,
        text: { json },
    } = data.post
    const options = {
        renderNode: {
            'embedded-asset-block': node => (
                <div>
                    <h3>This is an awesome image</h3>
                    <img
                        width="400"
                        src={node.data.target.fields.file['en-US'].url}
                        alt="..."
                    />
                    <p>Image provided by John Doe</p>
                </div>
            ),
            'embedded-entry-block': node => {
                const { name } = node.data.target.fields
                return (
                    <div>
                        <h2>Related tour: {name['en-US']}</h2>
                    </div>
                )
            },
        },
    }
    return (
        <Layout>
            <section className={styles.blog}>
                <div className={styles.center}>
                    <h1>{title}</h1>
                    <h4>Published at: {published}</h4>
                    <article className={styles.post}>
                        {documentToReactComponents(json, options)}
                    </article>
                    <AniLink fade to="/blog" className="btn-primary">
                        All Posts
                    </AniLink>
                </div>
            </section>
        </Layout>
    )
}

export default blogTemplate
