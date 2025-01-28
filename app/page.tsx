// src/pages/index.tsx
import React from 'react';
// import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedRestaurants from '../components/FeaturedRestaurants';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <FeaturedRestaurants />
      <Footer />
    </div>
  );
};

export default Home;