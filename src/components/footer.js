import React from 'react'
import SocialLinks from './constants/SocialLinks'

const Footer = ({ author }) => (
  <footer className="bg-gray-800 p-2 text-white flex justify-between item-center absolute bottom-0 left-0 h-3 w-full">
    © {new Date().getFullYear()}, created with love by {author}
    <SocialLinks></SocialLinks>
  </footer>
)

export default Footer
