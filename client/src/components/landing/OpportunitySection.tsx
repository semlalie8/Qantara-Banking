'use client';
import { motion } from 'framer-motion';
import { Building2, Globe, Lock, Zap } from 'lucide-react';
import React from 'react';
import SectionHeader from './SectionHeader';

const features = [
  {
    icon: <Building2 size={24} />,
    title: 'Regulatory Support',
    description: 'Morocco Fintech Center backed by 15+ banks and government — with sandbox programs and streamlined licensing.',
    color: 'var(--accent-blue)'
  },
  {
    icon: <Globe size={24} />,
    title: 'Diaspora Network',
    description: '$10B+ annual remittances from Europe create a massive cross-border payments opportunity.',
    color: 'var(--accent-teal)'
  },
  {
    icon: <Lock size={24} />,
    title: 'GDPR-Aligned Privacy',
    description: 'Data protection law (CNDP), onshore hosting, and EU adequacy path — enterprise-grade compliance from day one.',
    color: 'var(--accent-cyan)'
  },
  {
    icon: <Zap size={24} />,
    title: 'Crypto & CBDC Roadmap',
    description: 'Draft crypto regulation and Central Bank Digital Currency exploration opening blockchain-native fintech services.',
    color: 'var(--accent-blue)'
  }
];

export default function OpportunitySection() {
  return (
    <section id="opportunity" style={{ padding: '120px 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <SectionHeader 
              label="Why Morocco"
              title={<>Africa's Gateway to <span className="gradient-text">Global Finance</span></>}
              subtitle="Morocco sits at the crossroads of Africa, Europe, and the Middle East — with regulatory momentum, a massive diaspora, and a digitally-connected young population ready for fintech."
            />
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px', marginTop: '40px' }}>
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  style={{ display: 'flex', gap: '20px' }}
                >
                  <div style={{ 
                    flexShrink: 0, width: '48px', height: '48px', borderRadius: '12px', 
                    background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-subtle)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: feature.color
                  }}>
                    {feature.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>{feature.title}</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative' }}
          >
            <div className="glass-card" style={{ 
              padding: '12px', borderRadius: '24px', overflow: 'hidden', 
              boxShadow: '0 20px 80px rgba(0,0,0,0.5)' 
            }}>
              <img 
                src="https://images.unsplash.com/photo-1548345680-f5475ee511d7?auto=format&fit=crop&q=80&w=1200" 
                alt="Morocco Innovation" 
                style={{ width: '100%', height: 'auto', borderRadius: '16px', display: 'block' }} 
              />
            </div>
            
            {/* Overlay Badge */}
            <div style={{ 
              position: 'absolute', bottom: '40px', right: '-20px',
              padding: '20px', background: 'var(--bg-primary)', border: '1px solid var(--border-subtle)',
              borderRadius: '16px', boxShadow: 'var(--shadow-card)', zIndex: 10
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent-teal)' }} />
                <span style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '1px' }}>MARKET POTENTIAL</span>
              </div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-teal)' }}>$7.2 Trillion</h3>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>By 2030 in Embedded Finance</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
