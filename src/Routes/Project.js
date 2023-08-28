import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; 
import Hero2 from '../components/Hero2';
import Work from '../components/Work';
const Home = () => {
  return (
    <div>
     <Navbar />
     <Hero2 heading= "Projects" text ="Some of my Projects" />
     <Work />
     <Footer />
     
    </div>
  )
}

export default Home
