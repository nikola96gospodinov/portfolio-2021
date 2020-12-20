import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Form from '../components/contact-form'

import Banner from '../images/widgets-banner.png'

import '../styles/widgets.scss'

const WidgetsPage = () => (
    <Layout>
        <SEO title="Widgets"/>

        <div className="banner banner-widgets">
            <div className="container">
                <div className="double-grid">
                    <div>
                        <h1>Widgets</h1>
                        <h2>Have a look through some of the best widgets that I have developed across my projects.</h2>
                        <AnchorLink className="button">Learn more</AnchorLink>
                    </div>
                    <div className="circle">
                        <div>
                            <img src={Banner} alt="widget ilustration"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="outer-container widgets">
            <div className="container">
                <div className="center-container">
                    <h2 className="sub-heading">Coming Soon</h2>
                </div>
            </div>
        </div>

        <div className="contact outer-container" id="contact-form">
            <div className="container">
                <div className="contact-inner"><Form/></div>
            </div>
        </div>
    </Layout>
)

export default WidgetsPage