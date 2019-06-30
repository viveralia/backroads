import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import SimpleHero from '../components/SimpleHero'
import Banner from '../components/Banner'
import About from '../components/Home/About'
import Services from '../components/Home/Services'

export default () => (
    <Layout>
        <SimpleHero>
            <Banner
                title="Continue exploring"
                info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, facere!"
            >
                <Link to="/tours" className="btn-white">
                    Explore tours
                </Link>
            </Banner>
        </SimpleHero>
        <About />
        <Services />
    </Layout>
)
