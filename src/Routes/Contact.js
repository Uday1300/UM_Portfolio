import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero2 from '../components/Hero2';
import ContactForm from '../components/ContactForm'; 

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero2 heading="Contact" text="Let's Have a Chat" />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Home;
