import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero2 from '../components/Hero2';
import AboutContent from '../components/aboutcontent'; 

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero2 heading="About" text="A FULL STACK DEVELOPER" />
      <AboutContent /> 
      <Footer />
    </div>
  );
}

export default Home;
