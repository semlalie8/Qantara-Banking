'use client';
import { motion } from 'framer-motion';
import { Banknote, CreditCard, PieChart, CheckCircle2 } from 'lucide-react';
import React from 'react';
import SectionHeader from './SectionHeader';
import { useLanguage } from '@/context/language.context';

export default function ServicesSection() {
  const { t, locale } = useLanguage();
  const isRTL = locale === 'ar';

  const services = [
    {
      icon: <CreditCard size={32} />,
      title: t('services.service1_title'),
      description: t('services.service1_desc'),
      features: [t('services.s1_f1'), t('services.s1_f2'), t('services.s1_f3'), t('services.s1_f4')],
      color: 'var(--accent-blue)'
    },
    {
      icon: <Banknote size={32} />,
      title: t('services.service2_title'),
      description: t('services.service2_desc'),
      features: [t('services.s2_f1'), t('services.s2_f2'), t('services.s2_f3'), t('services.s2_f4')],
      color: 'var(--accent-teal)'
    },
    {
      icon: <PieChart size={32} />,
      title: t('services.service3_title'),
      description: t('services.service3_desc'),
      features: [t('services.s3_f1'), t('services.s3_f2'), t('services.s3_f3'), t('services.s3_f4')],
      color: 'var(--accent-cyan)'
    }
  ];

  return (
    <section id="services" style={{ padding: '120px 0' }}>
      <div className="container">
        <SectionHeader 
          label={t('services.label')}
          title={<>{t('services.title_start')} <span className="gradient-text">{t('services.title_gradient')}</span></>}
          subtitle={t('services.subtitle')}
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
              style={{ padding: '40px', position: 'relative', overflow: 'hidden', textAlign: isRTL ? 'right' : 'left' }}
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
