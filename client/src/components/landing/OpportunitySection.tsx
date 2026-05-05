'use client';
import { motion } from 'framer-motion';
import { Building2, Globe, Lock, Zap } from 'lucide-react';
import React from 'react';
import SectionHeader from './SectionHeader';
import { useLanguage } from '@/context/language.context';

export default function OpportunitySection() {
  const { t, locale } = useLanguage();
  const isRTL = locale === 'ar';

  const features = [
    {
      icon: <Building2 size={24} />,
      title: t('opportunity.feature1_title'),
      description: t('opportunity.feature1_desc'),
      color: 'var(--accent-blue)'
    },
    {
      icon: <Globe size={24} />,
      title: t('opportunity.feature2_title'),
      description: t('opportunity.feature2_desc'),
      color: 'var(--accent-teal)'
    },
    {
      icon: <Lock size={24} />,
      title: t('opportunity.feature3_title'),
      description: t('opportunity.feature3_desc'),
      color: 'var(--accent-cyan)'
    },
    {
      icon: <Zap size={24} />,
      title: t('opportunity.feature4_title'),
      description: t('opportunity.feature4_desc'),
      color: 'var(--accent-blue)'
    }
  ];

  return (
    <section id="opportunity" style={{ padding: '120px 0' }}>
      <div className="container" style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isRTL ? '0.9fr 1.1fr' : '1.1fr 0.9fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <SectionHeader 
              label={t('opportunity.label')}
              title={t('opportunity.title')}
              subtitle={t('opportunity.subtitle')}
            />
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px', marginTop: '40px' }}>
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  style={{ display: 'flex', gap: '20px', flexDirection: isRTL ? 'row-reverse' : 'row' }}
                >
                  <div style={{ 
                    flexShrink: 0, width: '48px', height: '48px', borderRadius: '12px', 
                    background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-subtle)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: feature.color
                  }}>
                    {feature.icon}
                  </div>
                  <div style={{ textAlign: isRTL ? 'right' : 'left' }}>
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
                src="/casablanca-gateway.png" 
                alt={t('opportunity.title')} 
                style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '16px', display: 'block' }} 
              />
              <div style={{ padding: '12px 8px 4px', fontSize: '0.8rem', color: 'var(--text-secondary)', textAlign: 'center' }}>
                {t('opportunity.image_caption')}
              </div>
            </div>
            
            {/* Overlay Badge */}
            <div style={{ 
              position: 'absolute', bottom: '40px', left: isRTL ? '-20px' : 'auto', right: isRTL ? 'auto' : '-20px',
              padding: '20px', background: 'var(--bg-primary)', border: '1px solid var(--border-subtle)',
              borderRadius: '16px', boxShadow: 'var(--shadow-card)', zIndex: 10,
              textAlign: isRTL ? 'right' : 'left'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent-teal)' }} />
                <span style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '1px' }}>{t('opportunity.market_potential')}</span>
              </div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-teal)' }}>{t('opportunity.potential_value')}</h3>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{t('opportunity.potential_label')}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
