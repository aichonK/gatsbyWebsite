import React from 'react'
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa"
// customise the icon or the group of item 
// add classes
const data = [
  {
    id: 1,
    icon: <FaTwitterSquare />,
    url: "https://twitter.com/AichaChaouacha",
  },
  {
    id: 2,
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/aicha-ben-chaouacha-1a9417152/",
  },
  {
    id: 3,
    icon: <FaFacebookSquare />,
    url: "https://www.facebook.com/aichabenchaoucha",
  },
]
//styleClass in case we want to customise the component
const SocialLinks = ({styleClass}) => {
     return (
       <ul className={`social-links flex  ${styleClass ? styleClass : ""}`}>
         {data.map(link => (
           <li key={link.id} className="mr-2">
             <a href={link.url} target="_blank">
               {link.icon}
             </a>
           </li>
         ))}
       </ul>
     )
}

export default SocialLinks
