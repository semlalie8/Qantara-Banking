'use client';
import { motion } from 'framer-motion';
import { ShieldAlert, Cpu, Search, Link2, Plug, Share2, Users2, Leaf, Briefcase } from 'lucide-react';
import React from 'react';
import SectionHeader from './SectionHeader';
import { useLanguage } from '@/context/language.context';

export default function VerticalsSection() {
  const { t, locale } = useLanguage();
  const isRTL = locale === 'ar';

  const verticals = [
    { icon: <ShieldAlert size={24} />, title: t('verticals.insurtech_title'), description: t('verticals.insurtech_desc'), trend: t('verticals.insurtech_trend') },
    { icon: <Cpu size={24} />, title: t('verticals.wealthtech_title'), description: t('verticals.wealthtech_desc'), trend: t('verticals.wealthtech_trend') },
    { icon: <Search size={24} />, title: t('verticals.regtech_title'), description: t('verticals.regtech_desc'), trend: t('verticals.regtech_trend') },
    { icon: <Link2 size={24} />, title: t('verticals.blockchain_title'), description: t('verticals.blockchain_desc'), trend: t('verticals.blockchain_trend') },
    { icon: <Plug size={24} />, title: t('verticals.embedded_title'), description: t('verticals.embedded_desc'), trend: t('verticals.embedded_trend') },
    { icon: <Share2 size={24} />, title: t('verticals.openbanking_title'), description: t('verticals.openbanking_desc'), trend: t('verticals.openbanking_trend') },
    { icon: <Users2 size={24} />, title: t('verticals.crowdfunding_title'), description: t('verticals.crowdfunding_desc'), trend: t('verticals.crowdfunding_trend') },
    { icon: <Leaf size={24} />, title: t('verticals.greenfinance_title'), description: t('verticals.greenfinance_desc'), trend: t('verticals.greenfinance_trend') },
    { icon: <Briefcase size={24} />, title: t('verticals.gigfinance_title'), description: t('verticals.gigfinance_desc'), trend: t('verticals.gigfinance_trend') }
  ];

  return (
    <section id="verticals" style={{ padding: '120px 0' }}>
      <div className="container" style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
        <SectionHeader 
          label={t('verticals.label')}
          title={t('verticals.title')}
          subtitle={t('verticals.subtitle')}
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
                border: '1px solid var(--border-subtle)', transition: 'all 0.3s ease',
                textAlign: isRTL ? 'right' : 'left'
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
