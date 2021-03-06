import React from 'react'
import Layout from '../components/Layout'
import styles from '../css/error.module.css'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Banner from '../components/Banner'
import SEO from '../components/SEO'

export default function error() {
    return (
        <Layout>
            <SEO title="Not found" />
            <header className={styles.error}>
                <Banner title="Oops! It's a dead end">
                    <AniLink fade to="/" className="btn-white">
                        Back to home page
                    </AniLink>
                </Banner>
            </header>
        </Layout>
    )
}
