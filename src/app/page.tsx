'use client';

import { useState } from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import MainContentArea from './components/MainContentArea';
import Footer from './components/Footer';

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);

  return (
    <Layout>
      <Hero />
      <MainContentArea 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
      />
      <Footer />
    </Layout>
  );
}