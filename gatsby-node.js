const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    // We can make more than 1 petition at the same time
    const { data } = await graphql(`
        {
            tours: allContentfulTourExample {
                edges {
                    node {
                        slug
                    }
                }
            }
            posts: allContentfulPostExample {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)
    // Creates a new page for each tour
    data.tours.edges.forEach(({ node }) => {
        createPage({
            path: `/tours/${node.slug}`,
            component: path.resolve('./src/templates/tour-template.jsx'),
            context: {
                slug: node.slug,
            },
        })
    })
    // Creates a new page for each blog post
    data.posts.edges.forEach(({ node }) => {
        createPage({
            path: `/blog/${node.slug}`,
            component: path.resolve('./src/templates/blog-template.jsx'),
            context: {
                slug: node.slug,
            },
        })
    })
    // Paginated Blog (blogs)
    const posts = data.posts.edges
    const postsPerPage = 5
    const numPages = Math.ceil(posts.length / postsPerPage)
    // Creates an array with the same number of items as numPages
    // for each item in the array, we will create a page
    Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
            // If if's the first page (elemento 0 in the array),
            // do not add a number at the end of the url, else, do
            path: i === 0 ? `/blogs` : `/blogs/${i + 1}`,
            component: path.resolve('./src/templates/blog-list-template.jsx'),
            context: {
                // Values for the variables defined inside GraphiQL
                // filtering by the limit of the elements inside the query
                // and skipping the first X items for the pagination
                limit: postsPerPage,
                skip: postsPerPage * i,
                // We`ll pass these values to use them later in our
                // pagination UI
                numPages,
                currentPage: i + 1,
            },
        })
    })
}
