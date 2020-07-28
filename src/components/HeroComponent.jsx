import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby" // to query for image data
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
       <div className=" text-center  ">
         <h1 className="block font-sans font-bold">Hallo.</h1>
         <p className="font-sans text-lg text-gray-800 text-center">
           I'm
           <p className="text-red-700 font-bold">Aicha Ben Chaouacha </p>A north
           african women based in Germany a full-stack developer interested in
           business and building cool products
         </p>
         <Link to="/contact" className=" item-center">
           <button className="bg-red-200 text-white hover:bg-red-500 font-bold py-2 px-4 rounded block">
             Say hey!
           </button>
         </Link>
         <div>
           <SocialLinks styleClass="mt-2"></SocialLinks>
         </div>
       </div>
     )
}


export default HeroComponent