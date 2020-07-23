import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { IoIosCloseCircle } from "react-icons/io"
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

const Header = ({ siteTitle }) => {
  const [mobileMenuIsShown, setMobileMenuIsShown] = useState(false)
  return (
    <header className="bg-gray-800 sm:flex sm:justify-between sm:px-4 sm:py-2">
      <div className="flex item-center justify-between px-4 py-2 sm:p-0">
        <h2 style={{ margin: 0 }}>
          <Link
            to="/"
            className="text-gray-500 font-bold"
            style={{
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h2>
        <button
          className=" block focus:outline-none  focus:text-gray-100 hover:text-gray-100 text-gray-500 sm:hidden"
          onClick={() => setMobileMenuIsShown(!mobileMenuIsShown)}
        >
          <GiHamburgerMenu
            className={`h-6 w-6 ${mobileMenuIsShown ? "hidden" : ""}`}
          />
          <IoIosCloseCircle
            className={`h-6 w-6 ${mobileMenuIsShown ? "" : "hidden"}`}
          />
        </button>
      </div>
      <div
        class={`px-2 pb-4 sm:flex ${mobileMenuIsShown ? "block" : "hidden"}`}
      >
        {Pages.map(({ name, url }) => (
          <Link
            className="text-white block  font-semibold rounded hover:bg-gray-700 
              pl-2 py-1
               mt-1 sm:mx-2 sm:py-0 sm:my-0"
            to={url}
          >
            {name}
          </Link>
        ))}
      </div>
      
      {/* <div className="flex">
      {" "}
      {Pages.map(({ name, url }) => (
        <Link
          className="text-gray-500"
          to={url}
          style={{
            textDecoration: `none`,
            marginRight: "10px",
          }}
        >
          {name}
        </Link>
      ))}
    </div> */}
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
