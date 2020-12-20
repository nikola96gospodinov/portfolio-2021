import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Logo from '../../images/nik-logo-small.png'

import './footer.scss'

export default function footer() {
    return (
        <footer>
            <div className="container footer-grid">
                <Link to="/">
                    <img src={Logo} alt="Small Logo"/>
                </Link>
                <div className="navigation">
                    <Link to="/about">About</Link>
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/skills">Skills</Link>
                    <Link to="/widgets">Widgets</Link>
                </div>
                <div className="connect">
                    <a href="mailto:nikola96gospodinov@gmail.com">
                        <FontAwesomeIcon icon={['fas', 'envelope-open-text']}/>
                    </a>
                    <a href="tel:+447763979908">
                        <FontAwesomeIcon icon={['fas', 'mobile-alt']}/>
                    </a>
                    <a href="https://www.linkedin.com/in/nikola-gospodinov-55154a125/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={['fab', 'linkedin']}/>
                    </a>
                    <a href="https://github.com/nikola96gospodinov" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={['fab', 'github']}/>
                    </a>
                </div>
            </div>
        </footer>
    )
}