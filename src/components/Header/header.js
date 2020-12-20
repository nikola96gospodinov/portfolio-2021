import PropTypes from "prop-types"
import React, {useState} from "react"
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Logo from '../../images/Nik-logo.png'

import './header.scss'

const Header = () => {
  const [nav, setNav] = useState(false)

  return (
    <>
      <header>
        <div className="container">
          <div className="header">
            <Link to="/"><img alt="Logo" src={Logo}/></Link>
            <ul>
              <li><Link activeClassName="active" to="/about">About</Link></li>
              <li><Link activeClassName="active" to="/portfolio">Portfolio</Link></li>
              <li><Link activeClassName="active" to="/skills">Skills</Link></li>
              <li><Link activeClassName="active" to="/widgets">Widgets</Link></li>
              <li><AnchorLink href="#contact-form">Contact</AnchorLink></li>
            </ul>
            <div>
              <a href="mailto:nikola96gospodinov@gmail.com"><FontAwesomeIcon icon={['fas', 'envelope-open-text']}/></a>
              <a href="tel:+447763979908"><FontAwesomeIcon icon={['fas', 'mobile-alt']}/></a>
              <a href="https://www.linkedin.com/in/nikola-gospodinov-55154a125/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']}/></a>
              <a href="https://github.com/nikola96gospodinov" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={['fab', 'github']}/></a>
            </div>
          </div>
          <div className="header-mobile">
            <Link to="/"><img alt="Logo" src={Logo}/></Link>
            <FontAwesomeIcon onClick={() => setNav(!nav)} icon={['fas', 'bars']}/>
          </div>
        </div>
      </header>
      {
        nav ? 
        <div className="mobile-nav">
          <div className="container">
            <Link activeClassName="active" to="/">Home</Link>
            <Link activeClassName="active" to="/about">About</Link>
            <Link activeClassName="active" to="/portfolio">Portfolio</Link>
            <Link activeClassName="active" to="/skills">Skills</Link>
            <Link activeClassName="active" to="/widgets">Widgets</Link>
            <AnchorLink onClick={() => setNav(!nav)} href="#contact-form">Contact</AnchorLink>
            <div className="mobile-header-icons">
              <a href="mailto:nikola96gospodinov@gmail.com"><FontAwesomeIcon icon={['fas', 'envelope-open-text']}/></a>
              <a href="tel:+447763979908"><FontAwesomeIcon icon={['fas', 'mobile-alt']}/></a>
              <a href="https://www.linkedin.com/in/nikola-gospodinov-55154a125/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']}/></a>
              <a href="https://github.com/nikola96gospodinov" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={['fab', 'github']}/></a>
            </div>
            <FontAwesomeIcon onClick={() => setNav(!nav)} icon={['fas', 'times']}/>
          </div>
        </div>
        :
        null
      }
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header