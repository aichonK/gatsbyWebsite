const path = require(`path`)
const makeRequest = (graphql, request) =>
     new Promise((resolve, reject) => {
          // Query for nodes to use in creating pages.
          resolve(
               graphql(request).then(result => {
                    if (result.errors) {
                         reject(result.errors)
                    }
                    return result
               })
          )
     })
// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ boundActionCreators, graphql }) => {
     const { createPage } = boundActionCreators
     // now we have 3 things to do: 
     // 1. get path to template
     // 2. get data
     //3. create new Page
     const getArticles = makeRequest(
          graphql,
          `
    {
      allStrapiArticle {
        edges {
          node {
            id
          }
        }
      }
    }
    `
     ).then(result => {
          // Create a page for each article.
          // in Context write down stuff to pass down to the templates
          result.data.allStrapiArticle.edges.forEach(({
               node
          }) => {
               createPage({
                    path: `/${node.id}`,
                    component: path.resolve(`src/templates/article.js`),
                    context: {
                         id: node.id,
                    },
               })
          })
     })
     // Query for articles nodes to use in creating pages.
     return getArticles
}