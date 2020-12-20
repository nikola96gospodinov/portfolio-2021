import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

import Banner from '../images/error-banner.png'

import '../styles/error.scss'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="error">
      <div class="container">
        <div className="double-grid">
          <div>
            <h1>404: Page <span>not</span> found</h1>
            <h2><i>“Mistakes are a fact of life. It is the response to error that counts.”</i><br/><span> - Nikki Giovanni</span></h2>
            <Link to="/" className="button">Back to homepage</Link>
          </div>
          <div className="circle">
            <div>
              <img src={Banner} alt="Illustration of a woman in front of a screen with a 404 error"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
