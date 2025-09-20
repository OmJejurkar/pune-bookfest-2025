import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Speakers from '../components/Speakers';
import Schedule from '../components/Schedule';
import Gallery from '../components/Gallery';
import Sponsors from '../components/Sponsors';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Speakers />
      <Schedule />
      <Gallery />
      <Sponsors />
      <Footer />
    </div>
  );
}
