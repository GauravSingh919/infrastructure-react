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
import ClientSection from '../components/ClientSection'
import Testimonials from '../components/Testimonials'
import Blogs from '../components/Blogs'
import Location from '../components/Location'

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
            <ClientSection />
            <Testimonials />
            {/* <Team /> */}
            {/* <Blog /> */}
            <Blogs />
            <Contact />
            <Location />
            <Footer />
        </div>
    )
}

export default HomePage
