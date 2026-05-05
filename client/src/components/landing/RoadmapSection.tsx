'use client';
import { motion } from 'framer-motion';
import React from 'react';
import SectionHeader from './SectionHeader';
import { useLanguage } from '@/context/language.context';

export default function RoadmapSection() {
  const { t, locale } = useLanguage();
  const isRTL = locale === 'ar';

  const phases = [
    {
      phase: t('roadmap.phase1_label'),
      title: t('roadmap.phase1_title'),
      description: t('roadmap.phase1_desc')
    },
    {
      phase: t('roadmap.phase2_label'),
      title: t('roadmap.phase2_title'),
      description: t('roadmap.phase2_desc')
    },
    {
      phase: t('roadmap.phase3_label'),
      title: t('roadmap.phase3_title'),
      description: t('roadmap.phase3_desc')
    },
    {
      phase: t('roadmap.phase4_label'),
      title: t('roadmap.phase4_title'),
      description: t('roadmap.phase4_desc')
    },
    {
      phase: t('roadmap.phase5_label'),
      title: t('roadmap.phase5_title'),
      description: t('roadmap.phase5_desc')
    }
  ];

  return (
    <section id="roadmap" style={{ padding: '120px 0', background: 'var(--bg-secondary)' }}>
      <div className="container" style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
        <SectionHeader 
          label={t('roadmap.label')}
          title={t('roadmap.title')}
          subtitle={t('roadmap.subtitle')}
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
              initial={{ opacity: 0, x: i % 2 === 0 ? (isRTL ? 50 : -50) : (isRTL ? -50 : 50) }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{ 
                display: 'flex', 
                justifyContent: i % 2 === 0 ? (isRTL ? 'flex-start' : 'flex-end') : (isRTL ? 'flex-end' : 'flex-start'),
                width: '100%', marginBottom: '60px', position: 'relative' 
              }}
            >
              <div style={{ 
                width: '45%', textAlign: i % 2 === 0 ? (isRTL ? 'left' : 'right') : (isRTL ? 'right' : 'left'),
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
