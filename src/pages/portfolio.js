import React, { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Form from '../components/contact-form'

import Banner from '../images/portfolio-banner.png'
import PCHProductions from '../images/pch-productions.png'
import WeatherApp from '../images/weather-app-mockup.png'
import SpaceX from '../images/space-x-api.png'

import '../styles/portfolio.scss'

const projects = [
    {
        name: 'P.Ch. Productions',
        pic: {
            path: PCHProductions,
            alt: 'P.Ch. Productions mockup on laptop'
        },
        description: 'A website developed for a photographer who can add new photos himself.',
        link: 'https://pch-productions.netlify.app/',
        technologies: ['React', 'Gatsby', 'Strapi', 'GraphQL']
    },
    {
        name: 'Weather App',
        pic: {
            path: WeatherApp,
            alt: 'Weather app mockup on laptop'
        },
        description: "A simple app that gives you the current weather based on the location that you've entered.",
        link: 'https://gospodinov-weather-app.herokuapp.com/',
        technologies: ['HTML', 'CSS', 'Node.js']
    },
    {
        name: 'SpaceX API',
        pic: {
            path: SpaceX,
            alt: 'SpaceX API app mockup on laptop'
        },
        description: "A web app developed with SpaceX's API which contains all the relevant data",
        link: 'https://nik-space-x-api.vercel.app/',
        technologies: ['React', 'Next.js']
    }
]

const languages = [
    'Show all',
    'React',
    'Gatsby',
    'Next.js',
    'Strapi',
    'HTML',
    'Node.js'
]

const PortfolioPage = () => {

    const [tech, setTech] = useState('Show all')

    const filteredProjects =
    tech === "Show all"
      ? projects
      : projects.filter(project => project.technologies.includes(tech))

    return (
        <Layout>
            <SEO 
                title="Portfolio"
                image={Banner}
            />
            
            <div className="portfolio-banner banner">
                <div className="banner-o">
                    <div className="container">
                        <div className="double-grid">
                            <div>
                                <h1>Portfolio</h1>
                                <h2>See examples of my work</h2>
                                <AnchorLink href="#portfolio-items" className="cta">
                                    <span>Learn more</span>
                                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                                        <path d="M1,5 L11,5"></path>
                                        <polyline points="8 1 12 5 8 9"></polyline>
                                    </svg>
                                </AnchorLink>
                            </div>
                            <div className="circle">
                                <div>
                                    <img src={Banner} alt="Portfolio illustration"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            <div className="portfolio-items outer-container" id="portfolio-items">
                <div className="container">
                    <div>
                        {
                            languages.map(lang => {
                                return (
                                    <button 
                                        onClick={() => setTech(lang)}
                                        className={
                                            lang === tech ? "active-button" : ""
                                        }
                                    >{lang}</button>
                                )
                            })
                        }
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
                                        <a className="button" href={filteredProject.link} target="_blank" rel="ugc">See project</a>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <p style={{
                        fontSize: '1.5rem',
                        textDecoration: 'underline',
                        marginTop: '3rem'
                    }}>More projects to be added soon!</p>
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