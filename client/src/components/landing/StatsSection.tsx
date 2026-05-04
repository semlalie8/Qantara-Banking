'use client';
import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import SectionHeader from './SectionHeader';

const stats = [
  { value: '15', label: 'Million Unbanked Citizens', suffix: 'M+' },
  { value: '10', label: 'Billion $ in Annual Remittances', prefix: '$', suffix: 'B+' },
  { value: '600', label: 'Thousand+ SMEs Underserved', suffix: 'K+' },
  { value: '83', label: '% Internet Penetration', suffix: '%' }
];

export default function StatsSection() {
  const containerRef = useRef<HTMLElement>(null);
  
  return (
    <section id="stats" ref={containerRef} style={{ padding: '120px 0', background: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        <SectionHeader 
          label="Market Opportunity"
          title={<>Morocco&apos;s <span className="gradient-text">Fintech Frontier</span></>}
          subtitle="A massive, underserved market with the infrastructure ready for digital disruption."
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '40px' }}>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ textAlign: 'center' }}
            >
              <h2 style={{ fontSize: '4rem', fontWeight: '800', marginBottom: '8px', color: 'var(--text-primary)' }}>
                <span style={{ fontSize: '2.5rem', verticalAlign: 'middle', marginRight: '4px' }}>{stat.prefix}</span>
                {stat.value}
                <span style={{ fontSize: '1.5rem', color: 'var(--accent-blue)', verticalAlign: 'middle' }}>{stat.suffix}</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '180px', margin: '0 auto' }}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
