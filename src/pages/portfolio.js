import React, { useState } from 'react'
import { Link } from 'gatsby'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Form from '../components/contact-form'

import Banner from '../images/portfolio-banner.png'
import THCDreams from '../images/thc-dreams-mockup.png'
import WeatherApp from '../images/weather-app-mockup.png'

import '../styles/portfolio.scss'

const projects = [
    {
        name: 'P.Ch. Photography',
        pic: {
            path: THCDreams,
            alt: 'THC Dreams mockup on laptop'
        },
        description: 'A website developed for a photographer who can add new photos himself.',
        link: '/portfolio/pchphotography',
        technologies: ['React', 'Gatsby', 'Strapi', 'GraphQL']
    },
    {
        name: 'Weather App',
        pic: {
            path: WeatherApp,
            alt: 'Weather app mockup on laptop'
        },
        description: "A simple app that gives you the current weather based on the location that you've entered.",
        link: '/portfolio/weather-app',
        technologies: ['HTML', 'CSS', 'Node.js']
    },
    {
        name: 'Project 3',
        pic: {
            path: THCDreams,
            alt: 'THC Dreams mockup on laptop'
        },
        description: 'This is the third project of my portfolio',
        link: '/portfolio/project-3',
        technologies: ['React', 'Node.js']
    },
    {
        name: 'Project 4',
        pic: {
            path: WeatherApp,
            alt: 'Weather app mockup on laptop'
        },
        description: 'This is the fourth project of my portfolio',
        link: '/portfolio/project-4',
        technologies: ['HTML', 'CSS', 'WordPress']
    }
]

const PortfolioPage = () => {

    const [tech, setTech] = useState('')

    const filteredProjects =
    tech === ""
      ? projects
      : projects.filter(project => project.technologies.includes(tech))

    return (
        <Layout>
            <SEO title="Portfolio"/>
            
            <div className="portfolio-banner banner">
                <div className="container">
                    <div className="double-grid">
                        <div>
                            <h1>Portfolio</h1>
                            <h2>See examples of my work</h2>
                            <AnchorLink href="#portfolio-items" className="button">See Projects</AnchorLink>
                        </div>
                        <div className="circle">
                            <div>
                                <img src={Banner} alt="Portfolio illustration"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            <div className="portfolio-items outer-container" id="portfolio-items">
                <div className="container">
                    <div>
                        <button onClick={() => setTech('')}>Show all</button>
                        <button onClick={() => setTech('React')}>React</button>
                        <button onClick={() => setTech('Gatsby')}>Gatsby</button>
                        <button onClick={() => setTech('Strapi')}>Strapi</button>
                        <button onClick={() => setTech('HTML')}>HTML</button>
                        <button onClick={() => setTech('Node.js')}>Node.js</button>
                    </div>
                    <div className="triple-grid">
                        {filteredProjects.map((filteredProject) => {
                            return (
                                <div className="project-row">
                                    <img src={filteredProject.pic.path} alt={filteredProject.pic.alt}/>
                                    <div className="project-row-container">
                                        <div>
                                            <h2>{filteredProject.name}</h2>
                                            <p>{filteredProject.description}</p>
                                            <ul>
                                                {filteredProject.technologies.map((t) => {
                                                    return (
                                                        <li>{t}</li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                        <Link className="button" to={filteredProject.link}>See project</Link>
                                    </div>
                                </div>
                            )
                        })}
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
} 

export default PortfolioPage