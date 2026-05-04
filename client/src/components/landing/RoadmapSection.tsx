'use client';
import { motion } from 'framer-motion';
import React from 'react';
import SectionHeader from './SectionHeader';

const phases = [
  {
    phase: 'Phase 1 — Months 0–6',
    title: 'Proof of Concept',
    description: 'Build MVP targeting one segment in Morocco. Pilot with early users, join Morocco Fintech Center for mentorship. Validate product-market fit.'
  },
  {
    phase: 'Phase 2 — Months 6–18',
    title: 'Scale Locally',
    description: 'Incorporate legal entity. Secure payment license or bank partnership. Launch full product, build user base, seek seed funding.'
  },
  {
    phase: 'Phase 3 — Years 2–3',
    title: 'North Africa Expansion',
    description: 'Enter Tunisia, Ivory Coast, Senegal. Adapt for Francophone markets. Regional partnerships and Series A funding.'
  },
  {
    phase: 'Phase 4 — Years 3–4',
    title: 'European Market',
    description: 'EU entity in France or Malta. Target Moroccan diaspora. Comply with GDPR, PSD3, and AI Act. Visa Fast Track partnerships.'
  },
  {
    phase: 'Phase 5 — Year 5+',
    title: 'Global Scale',
    description: 'North America, Middle East, and Asia. B2B API platform. Maintain Moroccan DNA with global technology and funding leverage.'
  }
];

export default function RoadmapSection() {
  return (
    <section id="roadmap" style={{ padding: '120px 0', background: 'var(--bg-secondary)' }}>
      <div className="container">
        <SectionHeader 
          label="Growth Roadmap"
          title={<>From Morocco to the <span className="gradient-text">World</span></>}
          subtitle="A phased strategy: prove locally, scale regionally, dominate globally."
        />

        <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto', padding: '40px 0' }}>
          {/* Vertical Line */}
          <div style={{ 
            position: 'absolute', left: '50%', top: 0, bottom: 0, width: '2px', 
            background: 'var(--gradient-brand)', opacity: 0.2, transform: 'translateX(-50%)' 
          }} />

          {phases.map((phase, i) => (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{ 
                display: 'flex', justifyContent: i % 2 === 0 ? 'flex-end' : 'flex-start',
                width: '100%', marginBottom: '60px', position: 'relative' 
              }}
            >
              <div style={{ 
                width: '45%', textAlign: i % 2 === 0 ? 'right' : 'left',
                padding: '30px', borderRadius: '20px', background: 'var(--bg-primary)',
                border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-card)'
              }}>
                <span style={{ 
                  fontSize: '0.7rem', fontWeight: '700', color: 'var(--accent-blue)', 
                  marginBottom: '12px', display: 'block', textTransform: 'uppercase' 
                }}>{phase.phase}</span>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>{phase.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>{phase.description}</p>
              </div>

              {/* Dot */}
              <div style={{ 
                position: 'absolute', left: '50%', top: '40px', width: '16px', height: '16px', 
                borderRadius: '50%', background: 'var(--bg-primary)', border: '4px solid var(--accent-blue)',
                transform: 'translateX(-50%)', zIndex: 10
              }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
