import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Form from '../components/contact-form'

import CV from '../files/CV - Nikola Gospodinov.pdf'

import Banner from '../images/skills-banner.png'

import '../styles/skills.scss'

const SkillsPage = () => (
    <Layout>
        <SEO 
            title="Skills"
            image={Banner}    
        />

        <div className="banner banner-skills">
            <div className="banner-o">
                <div className="container">
                    <div className="double-grid">
                        <div>
                            <h1>Skills</h1>
                            <h2>With my wide range of skills I am capable of developing well rounded websites</h2>
                            <AnchorLink href="#skill-list" className="cta">
                                <span>Learn more</span>
                                <svg width="13px" height="10px" viewBox="0 0 13 10">
                                    <path d="M1,5 L11,5"></path>
                                    <polyline points="8 1 12 5 8 9"></polyline>
                                </svg>
                            </AnchorLink>
                        </div>
                        <div className="circle">
                            <div>
                                <img src={Banner} alt="Skills illustration"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="outer-container skill-list" id="skill-list">
            <div className="container">
                <div className="two-one-grid">
                    <div className="skills">
                        <h2 className="sub-heading">Main Skills</h2>
                        <p>Those are the skills that I use on a daily basis and I am most proficient at:</p>
                        <ul>
                            <li><b>React</b> (including frameworks - <b>Next.js</b> and <b>Gatsby</b>)</li>
                            <li><b>Strapi</b></li>
                            <li><b>GraphQL</b></li>
                            <li>Modern <b>JavaScript</b></li>
                            <li>Responsive, cross-browser <b>CSS/HTML</b></li>
                            <li><b>Adobe PhotoShop</b></li>
                        </ul>
                        <h2 className="sub-heading">Secondary Skills</h2>
                        <p>Those are the skills that I use on a less regular basis but I am still proficient at:</p>
                        <ul>
                            <li><b>Node.js</b> (including <b>Express</b>)</li>
                            <li><b>WordPress</b></li>
                            <li><b>jQuery</b></li>
                            <li>Relational (<b>SQL</b>) and non-relational (<b>MongoDB</b>) databases</li>
                            <li><b>Git</b></li>
                            <li><b>JSON</b></li>
                            <li>Basic <b>UI/UX</b></li>
                            <li>Technical <b>SEO</b></li>
                        </ul>
                        <h2 className="sub-heading">Soft Skills</h2>
                        <p>Those are the non-technical skills that are arguably as important as the technical skills:</p>
                        <ul>
                            <li><b>Fluent English</b></li>
                            <li>Very good <b>listening skills</b></li>
                            <li>Proven effectiveness in <b>team collaboration</b> (experience working in a team, both in University and in the working environment)</li>
                            <li>Following <b>leadership principles</b> (most notably by expert on leadership <b>Jocko Willink</b>)</li>
                            <li>High <b>emotional intelligence</b></li>
                            <li>Clear and precise <b>writing style</b></li>
                            <li><b>Time-management</b> skills</li>
                            <li>Excellent <b>problem-solving</b> abilities and resourcefulness</li>
                            <li>Thoroughly completion of all assigned tasks and responsibilities</li>
                            <li>Offers constructive suggestions for improvements</li>
                        </ul>
                    </div>
                    <div className="cv">
                        <div>
                            <h3>Need a copy of my CV?</h3>
                            <p>Containing a list of all my skills and work experience.</p>
                            <a href={CV} target="_blank" rel="noreferrer" className="button">Get a copy</a>
                        </div>
                    </div>
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

export default SkillsPage