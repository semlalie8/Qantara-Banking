'use client';
import React, { useState, FormEvent, ChangeEvent } from 'react';
import { useAuth } from '@/context/auth.context';
import Link from 'next/link';
import Navbar from '@/components/landing/Navbar';
import { useLanguage } from '@/context/language.context';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const { register } = useAuth();
  const { t, locale } = useLanguage();
  const isRTL = locale === 'ar';

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await register(formData);
    } catch (err: any) {
      setError(err.response?.data?.message || t('auth.failed_register'));
    }
  };

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh', direction: isRTL ? 'rtl' : 'ltr' }}>
      <Navbar />
      <main className="hero" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 80px)', paddingTop: '80px' }}>
        <div className="hero-bg-grid"></div>
        <div className="glass-card" style={{ padding: '40px', width: '100%', maxWidth: '450px', position: 'relative', zIndex: 10, textAlign: isRTL ? 'right' : 'left' }}>
          <h1 className="section-title" style={{ fontSize: '2rem', marginBottom: '8px' }}>
            {t('auth.register_title_start')} <span className="gradient-text">{t('auth.register_title_gradient')}</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>{t('auth.register_subtitle')}</p>
          
          {error && <p style={{ color: '#ef4444', marginBottom: '16px', fontSize: '0.875rem' }}>{error}</p>}
          
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', gap: '16px', flexDirection: isRTL ? 'row-reverse' : 'row' }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.875rem', color: 'var(--text-muted)' }}>{t('auth.first_name')}</label>
                <input 
                  type="text" 
                  name="firstName"
                  className="cta-input" 
                  placeholder="John" 
                  value={formData.firstName}
                  onChange={handleChange}
                  required 
                  style={{ width: '100%', textAlign: isRTL ? 'right' : 'left' }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.875rem', color: 'var(--text-muted)' }}>{t('auth.last_name')}</label>
                <input 
                  type="text" 
                  name="lastName"
                  className="cta-input" 
                  placeholder="Doe" 
                  value={formData.lastName}
                  onChange={handleChange}
                  required 
                  style={{ width: '100%', textAlign: isRTL ? 'right' : 'left' }}
                />
              </div>
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.875rem', color: 'var(--text-muted)' }}>{t('auth.email')}</label>
              <input 
                type="email" 
                name="email"
                className="cta-input" 
                placeholder="name@company.com" 
                value={formData.email}
                onChange={handleChange}
                required 
                style={{ width: '100%', textAlign: isRTL ? 'right' : 'left' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.875rem', color: 'var(--text-muted)' }}>{t('auth.password')}</label>
              <input 
                type="password" 
                name="password"
                className="cta-input" 
                placeholder="••••••••" 
                value={formData.password}
                onChange={handleChange}
                required 
                style={{ width: '100%', textAlign: isRTL ? 'right' : 'left' }}
              />
            </div>
            <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }}>
              {t('auth.create_account')}
            </button>
          </form>
          
          <p style={{ marginTop: '24px', textAlign: 'center', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            {t('auth.have_account')} <Link href="/login" className="gradient-text" style={{ fontWeight: '600' }}>{t('auth.log_in')}</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
