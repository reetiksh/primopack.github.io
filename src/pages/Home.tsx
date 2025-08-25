import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import ProductShowcase from '@/components/ProductShowcase';
import StatsSection from '@/components/StatsSection';

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <ProductShowcase />
      <StatsSection />
    </Layout>
  );
};

export default Home;