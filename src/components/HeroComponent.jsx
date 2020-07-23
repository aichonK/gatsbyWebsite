import React from 'react'
import { useStaticQuery, graphql } from "gatsby" // to query for image data
import Img from "gatsby-image" // to take image data and render it
import SocialLinks from './constants/SocialLinks'

const HeroComponent = () => {
    const data = useStaticQuery(graphql`
      query {
        file(relativePath: { eq: "heroImage.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
     return (
       <div className="flex">
         <div className="w-1/2 ">
           <h1 className="block">Hallo.</h1>
           I'm Aicha Ben Chaouacha A north african women based in Germany a
           full-stack developer interested in business and building cool
           products
           <button className="bg-red-200 text-white hover:bg-red-500 font-bold py-2 px-4 rounded block">
             {" "}
             Say hey!
           </button>
           <div>
             <SocialLinks styleClass="mt-2"></SocialLinks>
           </div>
         </div>
         {/* <Img
           className="w-1/2  "
           fluid={data.file.childImageSharp.fluid}
           alt="A corgi smiling happily"
         /> */}
       </div>
     )
}


export default HeroComponent