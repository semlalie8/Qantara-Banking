'use client';
import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import SectionHeader from './SectionHeader';
import { useLanguage } from '@/context/language.context';

export default function StatsSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { t, locale } = useLanguage();
  const isRTL = locale === 'ar';

  const stats = [
    { value: t('stats.stat1_value'), label: t('stats.stat1_label'), suffix: 'M+' },
    { value: t('stats.stat2_value'), label: t('stats.stat2_label'), prefix: '$', suffix: 'B+' },
    { value: t('stats.stat3_value'), label: t('stats.stat3_label'), suffix: 'K+' },
    { value: t('stats.stat4_value'), label: t('stats.stat4_label'), suffix: '%' }
  ];
  
  return (
    <section id="stats" ref={containerRef} style={{ padding: '120px 0', background: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container" style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
        <SectionHeader 
          label={t('stats.label')}
          title={t('stats.title')}
          subtitle={t('stats.subtitle')}
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
              <h2 style={{ fontSize: '4rem', fontWeight: '800', marginBottom: '8px', color: 'var(--text-primary)', display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '4px' }}>
                <span style={{ fontSize: '2.5rem' }}>{stat.prefix}</span>
                {stat.value}
                <span style={{ fontSize: '1.5rem', color: 'var(--accent-blue)' }}>{stat.suffix}</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '180px', margin: '0 auto' }}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
