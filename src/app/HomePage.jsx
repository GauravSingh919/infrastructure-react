import React from 'react'
import Banner from '../components/Banner'
import Header from '../components/Header'
import AboutUs from '../components/AboutUs'
import Innovation from '../components/Innovation'
import Offers from '../components/Offers'
import Works from '../components/Works'

const HomePage = () => {
    return (
        <div>
            <Header />
            <Banner />
            <AboutUs />
            <Innovation />
            <Offers />
            <Works />
        </div>
    )
}

export default HomePage
