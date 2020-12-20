import React from 'react'
import { Link } from 'gatsby'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Form from '../components/contact-form'

import BioIllustration from '../images/about-bio.png'
import UniDegree from '../images/certificate.png'
import Clock from '../images/clock.png'
import Courses from '../images/online-course.png'

import '../styles/about.scss'

const AboutPage = () => (
    <Layout>
        <SEO title="About"/>

        <div className="banner banner-about">
            <div className="container">
                <div className="double-grid">
                    <div>
                        <h1>My name is <span>Nik!</span></h1>
                        <h2>I am a full stack developer with an eye for design</h2>
                        <AnchorLink href="#bio" className="button">Learn more</AnchorLink>
                    </div>
                    <div className="circle"><div></div></div>
                </div>
            </div>
        </div>

        <div className="bio outer-container" id="bio">
            <div className="container">
                <div className="double-grid">
                    <img src={BioIllustration} alt="Illustration of a man leaning on phone"/>
                    <div>
                        <h2 className="sub-heading">Short Bio</h2>
                        <p>My journey in web development started back in 2015 when I started studying Computer Science in University of Liverpool. My education in the field didn’t stop after graduating though. Post-graduation I started doing basic freelancing projects while going through various courses at the same time. As my skills were improving so was the quality of the projects that I was developing. After a year of freelancing and self-education, I became part of a Medico Digital - a digital agency in the medical field - where I further developed my skills.</p>
                        <Link className="button" to="/skills">See Skills</Link>
                    </div>
                </div>
            </div>
        </div>

        <div className="summary outer-container">
            <div className="container">
                <div className="center-container">
                    <h2 className="sub-heading">Summary</h2>
                </div>
                <div className="triple-grid">
                    <div>
                        <img src={UniDegree} alt="icon of an university degree"/>
                        <span>Computer Science BSc, <b>University of Liverpool</b></span>
                    </div>
                    <div>
                        <img src={Clock} alt="icon of a clock"/>
                        <span>Over <b>4000</b> hours of web development and web design experience</span>
                    </div>
                    <div>
                        <img src={Courses} alt="icon of an online course"/>
                        <span><b>7</b> Courses completed on web development</span>
                    </div>
                </div>
                <div className="center-container">
                    <Link className="button" to="/portfolio">See Projects</Link>
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

export default AboutPage