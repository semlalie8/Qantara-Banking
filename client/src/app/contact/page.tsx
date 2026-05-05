'use client';
import React, { useState } from 'react';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';

import { useLanguage } from '@/context/language.context';

export default function ContactPage() {
  const { t, locale } = useLanguage();
  const isRTL = locale === 'ar';
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState)
      });
      
      if (res.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Failed to submit message", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', direction: isRTL ? 'rtl' : 'ltr' }}>
      <Navbar />
      
      <main style={{ flex: 1, paddingTop: '160px', paddingBottom: '120px' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: 'center', marginBottom: '80px' }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: 'rgba(56, 189, 248, 0.1)', borderRadius: '50px', border: '1px solid rgba(56, 189, 248, 0.2)', marginBottom: '24px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-blue)' }} />
              <span style={{ color: 'var(--accent-blue)', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase' }}>{t('contact.badge')}</span>
            </div>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '24px' }}>
              {t('contact.title')} <span className="gradient-text">Qantara</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
              {t('contact.subtitle')}
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'flex-start' }}>
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 style={{ fontSize: '1.8rem', marginBottom: '32px', textAlign: isRTL ? 'right' : 'left' }}>{t('contact.form_title')}</h3>
              {submitted ? (
                <div style={{ padding: '32px', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '16px', textAlign: 'center' }}>
                  <h4 style={{ color: '#10b981', fontSize: '1.2rem', marginBottom: '12px' }}>{t('contact.success_title')}</h4>
                  <p style={{ color: 'var(--text-secondary)' }}>{t('contact.success_message')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', textAlign: isRTL ? 'right' : 'left' }}>
                    <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{t('contact.name_label')}</label>
                    <input 
                      type="text" 
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      style={{ padding: '14px', background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)', borderRadius: '12px', color: 'var(--text-primary)', fontSize: '1rem', outline: 'none', textAlign: isRTL ? 'right' : 'left' }}
                      placeholder={t('contact.name_placeholder')}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', textAlign: isRTL ? 'right' : 'left' }}>
                    <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{t('contact.email_label')}</label>
                    <input 
                      type="email" 
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      style={{ padding: '14px', background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)', borderRadius: '12px', color: 'var(--text-primary)', fontSize: '1rem', outline: 'none', textAlign: isRTL ? 'right' : 'left' }}
                      placeholder={t('contact.email_placeholder')}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', textAlign: isRTL ? 'right' : 'left' }}>
                    <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{t('contact.subject_label')}</label>
                    <input 
                      type="text" 
                      required
                      value={formState.subject}
                      onChange={(e) => setFormState({...formState, subject: e.target.value})}
                      style={{ padding: '14px', background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)', borderRadius: '12px', color: 'var(--text-primary)', fontSize: '1rem', outline: 'none', textAlign: isRTL ? 'right' : 'left' }}
                      placeholder={t('contact.subject_placeholder')}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', textAlign: isRTL ? 'right' : 'left' }}>
                    <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{t('contact.message_label')}</label>
                    <textarea 
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                      style={{ padding: '14px', background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)', borderRadius: '12px', color: 'var(--text-primary)', fontSize: '1rem', minHeight: '150px', outline: 'none', resize: 'vertical', textAlign: isRTL ? 'right' : 'left' }}
                      placeholder={t('contact.message_placeholder')}
                    />
                  </div>
                  <button type="submit" disabled={loading} className="btn-primary" style={{ padding: '16px', fontSize: '1rem', marginTop: '10px', opacity: loading ? 0.7 : 1 }}>
                    {loading ? t('contact.sending') : t('contact.send_button')}
                  </button>
                </form>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '40px', textAlign: isRTL ? 'right' : 'left' }}
            >
              <div>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '24px' }}>{t('contact.info_title')}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '32px' }}>
                  {t('contact.info_subtitle')}
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(56, 189, 248, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-blue)', flexShrink: 0 }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>{t('contact.hq_title')}</h4>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', whiteSpace: 'pre-line' }}>
                      {t('contact.hq_address')}
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(45, 212, 191, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-teal)', flexShrink: 0 }}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>{t('contact.email_title')}</h4>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                      contact@qantara.ma<br />
                      support@qantara.ma
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(168, 85, 247, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a855f7', flexShrink: 0 }}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>{t('contact.phone_title')}</h4>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                      +212 522 00 00 00<br />
                      {t('contact.phone_hours')}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
