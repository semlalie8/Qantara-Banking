'use client';
import { motion } from 'framer-motion';
import { ShieldAlert, Cpu, Search, Link2, Plug, Share2, Users2, Leaf, Briefcase } from 'lucide-react';
import React from 'react';
import SectionHeader from './SectionHeader';

const verticals = [
  { icon: <ShieldAlert size={24} />, title: 'Insurtech', description: 'Micro-insurance for agriculture, health, and on-demand policies.', trend: '▲ 90% funding surge Q1 2025' },
  { icon: <Cpu size={24} />, title: 'WealthTech', description: 'Robo-advisors, micro-investing apps, and AI-driven finance.', trend: '▲ $76.2B market by 2033' },
  { icon: <Search size={24} />, title: 'RegTech', description: 'KYC/AML automation, compliance tools, and fraud detection.', trend: '▲ Top fintech priority globally' },
  { icon: <Link2 size={24} />, title: 'Blockchain & DeFi', description: 'Crypto exchanges, tokenized assets, and stablecoin remittances.', trend: '▲ 46.8% CAGR to 2032' },
  { icon: <Plug size={24} />, title: 'Embedded Finance', description: 'In-app payments, POS lending, and insurance embedded.', trend: '▲ $7.2T market by 2030' },
  { icon: <Share2 size={24} />, title: 'Open Banking', description: 'API-driven aggregation, BaaS modules, and payment services.', trend: '▲ Users 5× growth by 2024' },
  { icon: <Users2 size={24} />, title: 'Crowdfunding', description: 'P2P lending, equity crowdfunding for SMEs, and real estate.', trend: '▲ Newly legalized in Morocco' },
  { icon: <Leaf size={24} />, title: 'Green Finance', description: 'Climate micro-loans, carbon credits, and ESG impact investing.', trend: '▲ UN-backed Morocco initiative' },
  { icon: <Briefcase size={24} />, title: 'Gig Finance', description: 'Earned-wage access, freelancer payments, and micro-pensions.', trend: '▲ Rising global gig economy' }
];

export default function VerticalsSection() {
  return (
    <section id="verticals" style={{ padding: '120px 0' }}>
      <div className="container">
        <SectionHeader 
          label="Innovation Verticals"
          title={<>Beyond Payments: The <span className="gradient-text">Full Stack</span></>}
          subtitle="Nine technology verticals powering the next decade of financial innovation."
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {verticals.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.03)' }}
              style={{ 
                padding: '30px', borderRadius: '16px', background: 'transparent',
                border: '1px solid var(--border-subtle)', transition: 'all 0.3s ease'
              }}
            >
              <div style={{ color: 'var(--accent-blue)', marginBottom: '16px' }}>{v.icon}</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>{v.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '16px', lineHeight: '1.6' }}>{v.description}</p>
              <div style={{ 
                fontSize: '0.7rem', fontWeight: '700', color: 'var(--accent-teal)',
                padding: '4px 8px', borderRadius: '4px', background: 'rgba(20, 184, 166, 0.1)',
                display: 'inline-block'
              }}>
                {v.trend}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
