'use client';
import { motion } from 'framer-motion';
import { Banknote, CreditCard, PieChart, CheckCircle2 } from 'lucide-react';
import React from 'react';
import SectionHeader from './SectionHeader';

const services = [
  {
    icon: <CreditCard size={32} />,
    title: 'Digital Payments',
    description: 'Seamless payment infrastructure connecting mobile wallets, merchant POS, and cross-border transfers.',
    features: ['Mobile money integration', 'QR-based payments', 'Remittance APIs', 'Real-time settlement'],
    color: 'var(--accent-blue)'
  },
  {
    icon: <Banknote size={32} />,
    title: 'Smart Lending',
    description: 'AI-powered credit scoring and micro-lending for the 15 million unbanked Moroccans and SMEs.',
    features: ['Alternative data scoring', 'Micro-loans for gig workers', 'SME invoice financing', 'P2P lending platform'],
    color: 'var(--accent-teal)'
  },
  {
    icon: <PieChart size={32} />,
    title: 'Wealth Management',
    description: 'Robo-advisory and micro-investing tools making wealth building accessible to every Moroccan.',
    features: ['AI-driven budget advisor', 'Micro-investing from 10 MAD', 'Automated savings plans', 'Green finance portfolios'],
    color: 'var(--accent-cyan)'
  }
];

export default function ServicesSection() {
  return (
    <section id="services" style={{ padding: '120px 0' }}>
      <div className="container">
        <SectionHeader 
          label="Core Services"
          title={<>Three Pillars of <span className="gradient-text">Modern Finance</span></>}
          subtitle="Purpose-built financial infrastructure designed for Morocco's unique market — and ready to scale across continents."
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card"
              style={{ padding: '40px', position: 'relative', overflow: 'hidden' }}
            >
              <div style={{ 
                width: '64px', height: '64px', borderRadius: '16px', 
                background: `rgba(${service.color === 'var(--accent-blue)' ? '37, 99, 235' : service.color === 'var(--accent-teal)' ? '20, 184, 166' : '6, 182, 212'}, 0.1)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', 
                color: service.color, marginBottom: '24px'
              }}>
                {service.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>{service.title}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '0.95rem' }}>{service.description}</p>
              
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {service.features.map(feature => (
                  <li key={feature} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    <CheckCircle2 size={16} color="var(--accent-teal)" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div style={{ 
                position: 'absolute', top: '-20px', right: '-20px', width: '100px', height: '100px',
                background: service.color, opacity: 0.03, borderRadius: '50%'
              }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
