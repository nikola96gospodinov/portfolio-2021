import React from "react"
import PropTypes from "prop-types"

// Font Awesome Icons - IMPORTS
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import Header from "./Header/header"
import Footer from "./Footer/footer"

import '../styles/style.scss'

// Adding the Icons to the App
library.add(fab, fas)

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>
        {children}
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
