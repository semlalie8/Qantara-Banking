'use client';
import React, { useState, FormEvent } from 'react';
import { useAuth } from '@/context/auth.context';
import Link from 'next/link';
import Navbar from '@/components/landing/Navbar';
import { useLanguage } from '@/context/language.context';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const { t, locale } = useLanguage();
  const isRTL = locale === 'ar';

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await login(email, password);
    } catch (err: any) {
      setError(err.response?.data?.message || t('auth.failed_login'));
    }
  };

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh', direction: isRTL ? 'rtl' : 'ltr' }}>
      <Navbar />
      <main className="hero" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 80px)', paddingTop: '80px' }}>
        <div className="hero-bg-grid"></div>
        <div className="glass-card" style={{ padding: '40px', width: '100%', maxWidth: '400px', position: 'relative', zIndex: 10, textAlign: isRTL ? 'right' : 'left' }}>
          <h1 className="section-title" style={{ fontSize: '2rem', marginBottom: '8px' }}>
            {t('auth.login_title_start')} <span className="gradient-text">{t('auth.login_title_gradient')}</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>{t('auth.login_subtitle')}</p>
          
          {error && <p style={{ color: '#ef4444', marginBottom: '16px', fontSize: '0.875rem' }}>{error}</p>}
          
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.875rem', color: 'var(--text-muted)' }}>{t('auth.email')}</label>
              <input 
                type="email" 
                className="cta-input" 
                placeholder="name@company.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
                style={{ width: '100%', textAlign: isRTL ? 'right' : 'left' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.875rem', color: 'var(--text-muted)' }}>{t('auth.password')}</label>
              <input 
                type="password" 
                className="cta-input" 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
                style={{ width: '100%', textAlign: isRTL ? 'right' : 'left' }}
              />
            </div>
            <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }}>
              {t('auth.sign_in')}
            </button>
          </form>
          
          <p style={{ marginTop: '24px', textAlign: 'center', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            {t('auth.no_account')} <Link href="/register" className="gradient-text" style={{ fontWeight: '600' }}>{t('auth.create_one')}</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
