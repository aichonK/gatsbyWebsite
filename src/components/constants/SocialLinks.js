import React from 'react'
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa"
// customise the icon or the group of item 
// add classes
const data = [
  {
    id: 1,
    icon: <FaTwitterSquare />,
    url: "",
  },
  {
    id: 2,
    icon: <FaLinkedin />,
    url: "",
  },
  {
    id: 3,
    icon: <FaFacebookSquare />,
    url: "",
  },
]
//styleClass in case we want to customise the component
const SocialLinks = ({styleClass}) => {
     return (
       <ul className={`social-links flex mt-2 ${styleClass ? styleClass : ""}`}>
         {data.map(link => (
           <li key={link.id} className="mr-2">
             <a href={link.url}>
               {link.icon}
             </a>
           </li>
         ))}
       </ul>
     )
}

export default SocialLinks
