import React from 'react'
import AppFooter from '../components/common/Footer'
import AppAbout from '../components/home/About'
import AppContact from '../components/home/Contact'
import AppFAQ from '../components/home/FAQ'
import AppFeatures from '../components/home/Features'
import AppHero from '../components/home/Hero'
import AppPricing from '../components/home/Pricing'
import AppWorks from '../components/home/Works'

const AppHome = () => {
  return (
    <div className="main">
      <AppHero />
      <AppAbout />
      <AppFeatures />
      <AppWorks />
      <AppFAQ />
      <AppPricing />
      <AppContact />
    </div>
  )
}

export default AppHome
