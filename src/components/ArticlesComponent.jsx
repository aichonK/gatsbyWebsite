import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image" // to take image data and render it

const ArticlesComponent = () => {
  const data = useStaticQuery(pageQuery);
  return (
    <div>
      Articles
      <div className="bg-gray-200 min-h-screen p-2 block sm:flex items-center justify-center">
        {data.allStrapiArticle.edges.map(({node})=>
        <Article data={node}></Article>
        )}
      </div>
    </div>
  )
}

export default ArticlesComponent

const Article = ({ data }) => (
  <Link
    className="bg-white border rounded-lg overflow-hidden max-w-sm"
    to={`/${data.id}`}
  >
    <div className="overview-hidden">
      {/* <Img class="w-full" fluid={data.image.childImageSharp.fluid} /> */}
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">
          {data.title}
        </div>
        <p class="text-gray-700 text-base h-8 overflow-hidden">
          {data.content}
        </p>
      </div>
      <div class="px-6 py-4">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #photography
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #travel
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          #winter
        </span>
      </div>
    </div>
  </Link>
)

 const pageQuery = graphql`
   {
     allStrapiArticle {
       edges {
         node {
           id
           title
           content
          #  image {
          #    childImageSharp {
          #      fluid(maxHeight: 205) {
          #        ...GatsbyImageSharpFluid
          #      }
          #    }
          #  }
         }
       }
     }
   }
 `


