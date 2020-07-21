import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

const ArticleTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiArticle.title}</h1>
    <p>
      by{" "}
      <Link to={`/authors/User_${data.strapiArticle.author.id}`}>
        {data.strapiArticle.author.username}
      </Link>
    </p>
    {data.strapiArticle.image&&<Img fixed={data.strapiArticle.image.childImageSharp.fixed} />}
    <p>{data.strapiArticle.content}</p>
  </Layout>
)

export default ArticleTemplate

//see equal with eq 
export const query = graphql`
  # id is a query variables -> $
  # the id is gonne come from the context we set up when we creaate the page
  query ArticleTemplate($id: String!) {
    strapiArticle(id: { eq: $id }) {
      title
      content
      image {
        childImageSharp {
          fixed(width: 200, height: 125) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      author {
        id
        username
      }
    }
  }
`