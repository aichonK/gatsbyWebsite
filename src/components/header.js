import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { AiFillPlusCircle } from "react-icons/ai";
const Pages = [{
  name: "Home",
  url: "/"
}, {
  name:  "About",
  url: "/about"
}, {
  name: "Projects",
  url: "/projects"
}, {
  name: "Blog",
  url: "/blog"
}, {
  name: "Contact",
  url: "/contact"
}]

const Header = ({ siteTitle }) => (
  <header
  className="bg-gray-800 mb-6"
    
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h2 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h2>
      <div>
        {" "}
        {Pages.map(({ name, url }) => (
          <Link
            to={url}
            style={{
              color: `white`,
              textDecoration: `none`,
              marginRight: "10px",
            }}
          >
            {name}
          </Link>
        ))}
        <button>
          <AiFillPlusCircle className="h-6 w-6"/>
        </button>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
