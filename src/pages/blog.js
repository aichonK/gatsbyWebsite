import React from 'react'
import Layout from '../components/layout'
import {
     Link,
     graphql
} from "gatsby"
import Img from "gatsby-image"

const BlogPage = ({data}) => (
          <Layout><ul>
      {data.allStrapiArticle.edges.map(({node:{id,title,image, content}}) => (
        <li key={id}>
          <h2>
            <Link to={`/${id}`}>{title}</Link>
          </h2>
      
      
       {image&&<Img fixed = {
          image.childImageSharp.fixed
        }
        alt = "" />}
          <p>{content}</p>
        </li>
      ))}
    </ul>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link></Layout>
     )


export default BlogPage
// Gatsby looks for an exported graphql string from the file 

export const pageQuery = graphql ` query IndexQuery {
    allStrapiArticle {
      edges {
        node {
          id
          title
          content
          image {
            childImageSharp {
              fixed(width: 200, height: 125) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }`
