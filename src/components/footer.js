import React from 'react'

const Footer = ({author}) =>  (
          <footer>
          © {new Date().getFullYear()}, created with love by {author}
        </footer>
     )

export default Footer
