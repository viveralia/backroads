import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const blog = () => {
    return (
        <Layout>
            <h1>Hello from the blog page</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
                nisi amet fuga alias qui cumque officiis commodi tempora!
                Deleniti ipsum eligendi nostrum vel! Ex ab voluptatum inventore
                magnam, amet odio!
            </p>
            <Link to="/">Home</Link>
        </Layout>
    )
}

export default blog
