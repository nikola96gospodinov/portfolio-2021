import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Form from '../components/contact-form'

import Banner from '../images/widgets-banner.png'

import '../styles/widgets.scss'

const WidgetsPage = () => (
    <Layout>
        <SEO 
            title="Widgets"
            image={Banner}
        />

        <div className="banner banner-widgets">
            <div className="banner-o">
                <div className="container">
                    <div className="double-grid">
                        <div>
                            <h1>Widgets</h1>
                            <h2>Have a look through some of the best widgets that I have developed across my projects.</h2>
                            <AnchorLink href="#widgets" className="cta">
                                <span>Learn more</span>
                                <svg width="13px" height="10px" viewBox="0 0 13 10">
                                    <path d="M1,5 L11,5"></path>
                                    <polyline points="8 1 12 5 8 9"></polyline>
                                </svg>
                            </AnchorLink>
                        </div>
                        <div className="circle">
                            <div>
                                <img src={Banner} alt="widget illustration"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="outer-container widgets" id="widgets">
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