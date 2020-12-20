import React from 'react'
import {Link} from 'gatsby'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import WeatherApp from '../../images/weather-app-mockup.png'
import THCDreams from '../../images/thc-dreams-mockup.png'

// Logos
import ReactSmall from '../../images/react-logo-small.png'
import GatsbySmall from '../../images/gatsby-logo-small.png'
import StrapiSmall from '../../images/strapi-logo-small.png'
import NodejsSmall from '../../images/nodejs-logo-small.png'
import HTMLLogo from '../../images/html-logo.png'
import CSSLogo from '../../images/css-logo.png'
import GraphQLLogo from '../../images/graphql-logo-small.png'

import './mockups.scss'

const mockups = [
    {
        image: {
            path: WeatherApp,
            alt: 'A mockup of the weather app'
        },
        title: "Weather App",
        description: "A simple app that gives you the current weather based on the location that you've entered.",
        stack: [{path: NodejsSmall, alt: "Small Nodejs Logo"}, {path: HTMLLogo, alt: "Small HTML5 Logo"}, {path: CSSLogo, alt: "Small CSS Logo"}],
        link: "/weather-app"
    },
    {
        image: {
            path: THCDreams,
            alt: 'A mockup of THC Dream\'s website'
        },
        title: "P.Ch. Photography",
        description: "A website developed for a photographer who can add new photos himself.",
        stack: [{path: ReactSmall, alt: "Small React Logo"}, {path: GatsbySmall, alt: "Small Gatsby Logo"}, {path: StrapiSmall, alt: "Small Strapi Logo"}, {path: GraphQLLogo, alt: "Small GraphQL Logo"}],
        link: "/p-ch-photography"
    }
]

const Mockups = () => {
    const displayMockups = () => {
        return mockups.map((mockup, i) => {
            return(
                <Slide>
                    <div className="mockup-cell" key={i}>
                        <div className="logos">
                            <p>Stack:</p>
                            {
                                mockup.stack.map((pic, i) => {
                                    return (
                                            <img src={pic.path} alt={pic.alt}/>
                                    )
                                })
                            }
                        </div>
                        <img src={mockup.image.path} alt={mockup.image.alt}/>
                        <div className="content">
                            <h3 className="small-heading">{mockup.title}</h3>
                            <p>{mockup.description}</p>
                            <Link className="button" to={mockup.link}>View project</Link>
                        </div>
                    </div>
                </Slide>
            )
        })
    }

    return (
        <>
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={45}
                totalSlides={mockups.length}
                visibleSlides={1}
                className="featured-project-slider"
            >
                <div className="arrow-grid">
                    <ButtonBack><FontAwesomeIcon icon={['fas', 'chevron-left']}/></ButtonBack>
                    <Slider>
                        {displayMockups()}
                    </Slider>
                    <ButtonNext><FontAwesomeIcon icon={['fas', 'chevron-right']}/></ButtonNext>
                </div>
            </CarouselProvider>
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={190}
                totalSlides={mockups.length}
                visibleSlides={1}
                className="featured-project-slider-small"
            >
                <div className="arrow-grid">
                    <ButtonBack><FontAwesomeIcon icon={['fas', 'chevron-left']}/></ButtonBack>
                    <Slider>
                        {displayMockups()}
                    </Slider>
                    <ButtonNext><FontAwesomeIcon icon={['fas', 'chevron-right']}/></ButtonNext>
                </div>
            </CarouselProvider>
        </>
    )
}

export default Mockups