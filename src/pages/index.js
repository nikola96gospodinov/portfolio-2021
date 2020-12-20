import React from "react"
import { Link } from 'gatsby'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import 'pure-react-carousel/dist/react-carousel.es.css'

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from '../components/contact-form'
import Mockups from '../page-parts/Home/Mockups'

// Images 
import Banner from '../images/banner.png'
import ReactLogo from '../images/react-logo.png'
import GatsbyLogo from '../images/gatsby-logo.png'
import StrapiLogo from '../images/strapi-logo.svg'
import GraphQlLogo from '../images/graphql-logo.png'
import NodejsLogo from '../images/nodejs-logo.png'
import WordpressLogo from '../images/wordpress-logo.png'
import Icon1 from '../images/monitor-tablet-and-smartohone.png'
import Icon2 from '../images/speed.png'
import Icon3 from '../images/ux.png'
import Icon4 from '../images/vision.png'
import Icon5 from '../images/content.png'
import Icon6 from '../images/seo.png'

import "../styles/index.scss"

const images = [
  {path: ReactLogo, alt: "React Logo", link: "https://reactjs.org/"}, 
  {path: GatsbyLogo, alt: "Gatsby Logo", link: "https://www.gatsbyjs.com/"}, 
  {path: StrapiLogo, alt: "Strapi Logo", link: "https://strapi.io/"}, 
  {path: GraphQlLogo, alt: "GraphQL Logo", link: "https://graphql.org/"}, 
  {path: NodejsLogo, alt: "Node.js Logo", link: "https://nodejs.org/en/"}, 
  {path: WordpressLogo, alt: "WordPress Logo", link: "https://wordpress.com/"}
]

const IndexPage = () => (
  <Layout>
    <SEO 
      title="Home" 
      description="Nik Gospodinov is a full stack web developer who uses mainly React and JavaScript."
      image={Banner}
    />

    <div class="banner">
      <div className="container banner-inner">
        <div className="banner-text">
          <h1>Nik Gospodinov</h1>
          <h2>Full Stack Developer</h2>
          <AnchorLink href="#main-technologies" className="button">Learn more</AnchorLink>
        </div>
        <div className="banner-image">
          <div className="circle">
            <div className="circle-inner">
              <img src={Banner} alt="illustration of a coder"/>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="main-technologies outer-container" id="main-technologies">
      <div className="container">
        <div className="center-container">
          <h2 className="sub-heading">Main Technologies</h2>
        </div>
        {/* Slider desktop */}
        <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={45}
              totalSlides={images.length}
              isPlaying={true}
              interval={3000}
              visibleSlides={4}
              lockOnWindowScroll={true}
              className="skills-slider"
          >
              <Slider>
                  {images.map((data, i) => {
                      return(
                          <Slide index={i} key={i}>
                              <div className="featured-images-container"> 
                                <a href={data.link} target="_blank" rel="noreferrer">
                                  <img className="featured-images" src={data.path} alt={data.alt}/>
                                </a>
                              </div>
                          </Slide>
                      )
                  })}
              </Slider>
        </CarouselProvider>
        {/* Slider tablet */}
        <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={35}
              totalSlides={images.length}
              isPlaying={true}
              interval={3000}
              visibleSlides={2}
              lockOnWindowScroll={true}
              className="skills-slider-tablet"
        >
          <Slider>
              {images.map((data, i) => {
                  return(
                      <Slide index={i} key={i}>
                          <div className="featured-images-container"> 
                            <a href={data.link} target="_blank" rel="noreferrer">
                              <img className="featured-images" src={data.path} alt={data.alt}/>
                            </a>
                          </div>
                      </Slide>
                  )
              })}
          </Slider>
        </CarouselProvider>
        {/* Slider mobile */}
        <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={35}
              totalSlides={images.length}
              isPlaying={true}
              interval={3000}
              visibleSlides={1}
              lockOnWindowScroll={true}
              className="skills-slider-mobile"
        >
          <Slider>
              {images.map((data, i) => {
                  return(
                      <Slide index={i} key={i}>
                          <div className="featured-images-container"> 
                            <a href={data.link} target="_blank" rel="noreferrer">
                              <img className="featured-images" src={data.path} alt={data.alt}/>
                            </a>
                          </div>
                      </Slide>
                  )
              })}
          </Slider>
        </CarouselProvider>
        <div className="center-container">
         <Link className="button" to="/skills">See all skills</Link>
        </div>
      </div>
    </div>
    
    <div className="featured-projects outer-container">
      <div className="container">
        <div className="center-container">
          <h2 className="sub-heading">Featured Projects</h2>
        </div>
        <Mockups/>
        <div className="center-container">
          <Link className="button" to="/portfolio">See all projects</Link>
        </div>
      </div>
    </div>

    <div className="outer-container main-benefits">
      <div className="container">
        <div className="center-container">
          <h2 className="sub-heading">Main Benefits</h2>
        </div>
        <div className="icon-grid">
          <div>
            <img src={Icon1} alt="icon of computer screen, tablet and smartphone"/>
            <h3 className="small-heading">Responsive accross devices</h3>
            <p>All the pages are extensively tested across different devices ensuring that your website looks good on all resolutions.</p>
          </div>
          <div>
            <img src={Icon2} alt="icon of a rocket on a computer screen"/>
            <h3 className="small-heading">Superior Speed</h3>
            <p>The use of the latest technologies guarantee superior speed.</p>
          </div>
          <div>
            <img src={Icon3} alt="icon of a computer screen with different elements on it"/>
            <h3 className="small-heading">Unique Desgin</h3>
            <p>The entire site is built from scratch without the use of themes and templates.</p>
          </div>
        </div>
        <div className="icon-grid">
        <div>
            <img src={Icon4} alt="icon of a computer screen with an eye on it"/>
            <h3 className="small-heading">Accessibility</h3>
            <p>All of the colors used on the websites are ran through a software ensuring that they are visible for everyone.</p>
          </div>
          <div>
            <img src={Icon5} alt="icon of a smartphone with content on it"/>
            <h3 className="small-heading">Edit content yourself</h3>
            <p>You can add and edit content (blog posts, photos) yourself effortlessly.</p>
          </div>
          <div>
            <img src={Icon6} alt="icon with a webpage on it"/>
            <h3 className="small-heading">SEO Optimized</h3>
            <p>All pages have been optimized so that the structure follows the basic SEO principles.</p>
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

export default IndexPage