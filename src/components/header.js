import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
     <div className='nav'>
      <Link to="/"><h4 className="brand">{siteTitle}</h4></Link>
      <nav className="nav-items">
        <Link to='/' className="link-item">Home</Link>
        <Link to='/about' className="link-item">about us</Link>
        <Link to='/blog' className="link-item">blogs</Link>
        <Link to='/contact' className="link-item">contact us</Link>
      </nav>
    </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `test website`,
}

export default Header
