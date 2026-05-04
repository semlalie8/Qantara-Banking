'use client';
import React from 'react';
import Navbar from '../components/landing/Navbar';
import HeroSection from '../components/landing/HeroSection';
import ServicesSection from '../components/landing/ServicesSection';
import StatsSection from '../components/landing/StatsSection';
import OpportunitySection from '../components/landing/OpportunitySection';
import RoadmapSection from '../components/landing/RoadmapSection';
import VerticalsSection from '../components/landing/VerticalsSection';
import CTASection from '../components/landing/CTASection';
import Footer from '../components/landing/Footer';

export default function LandingPage() {
  return (
    <div style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <StatsSection />
        <OpportunitySection />
        <RoadmapSection />
        <VerticalsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
