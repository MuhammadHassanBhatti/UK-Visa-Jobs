import React from 'react'
import Header from './Header/Header'
import Banner from './Banner/Banner'
import Slider from './Slider/Slider'
import TopStudents from './TopStudents/TopStudents'
import TopExpereincedJobs from './TopExpereincedJobs/TopExpereincedJobs'
import UpComingEvents from './UpCommingEvents/UpComingEvents'
import LatestAdvice from './LatestAdvice/LatestAdvice'
import Footer from './Footer/Footer'

const Website = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <Slider/>
      <TopStudents/>
      <TopExpereincedJobs/>
      <UpComingEvents/>
      <LatestAdvice/>
      <Footer/>
     
      
    </div>
  )
}

export default Website  
