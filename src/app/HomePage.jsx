import React from 'react'
import Banner from '../components/Banner'
import Header from '../components/Header'
import AboutUs from '../components/AboutUs'
import Innovation from '../components/Innovation'
import Offers from '../components/Offers'
import Works from '../components/Works'
import Portfolio from '../components/Portfolio'
import Team from '../components/Team'
import Blog from '../components/Blog'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const HomePage = () => {
    return (
        <div>
            <Header />
            <Banner />
            <AboutUs />
            <Innovation />
            <Offers />
            <Works />
            <Portfolio />
            <Team />
            <Blog />
            <Contact />
            <Footer />
        </div>
    )
}

export default HomePage
