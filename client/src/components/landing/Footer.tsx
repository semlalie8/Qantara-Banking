import Link from 'next/link';
import React from 'react';
import Logo from '../Logo';
import { useLanguage } from '@/context/language.context';

const FacebookIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const XIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Footer() {
  const { t, locale } = useLanguage();
  const isRTL = locale === 'ar';

  return (
    <footer style={{ padding: '100px 0 60px', borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1.5fr 1fr 1fr 1fr', 
          gap: '60px', 
          marginBottom: '80px',
          textAlign: isRTL ? 'right' : 'left'
        }}>
          <div>
            <Link href="/">
              <Logo size={40} />
            </Link>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '24px', lineHeight: '1.7', maxWidth: '300px' }}>
              {t('footer.tagline')}
            </p>
            <div style={{ display: 'flex', gap: '16px', marginTop: '24px', justifyContent: isRTL ? 'flex-start' : 'flex-start' }}>
              <Link href="#" style={{ color: 'var(--text-muted)', transition: 'var(--transition)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-blue)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}><FacebookIcon size={20} /></Link>
              <Link href="#" style={{ color: 'var(--text-muted)', transition: 'var(--transition)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-teal)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}><InstagramIcon size={20} /></Link>
              <Link href="#" style={{ color: 'var(--text-muted)', transition: 'var(--transition)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}><XIcon size={20} /></Link>
              <Link href="#" style={{ color: 'var(--text-muted)', transition: 'var(--transition)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-blue)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}><LinkedinIcon size={20} /></Link>
            </div>
          </div>
          <div>
            <h4 style={{ marginBottom: '24px', fontSize: '1.1rem' }}>{t('footer.platform')}</h4>
            <ul style={{ listStyle: 'none', color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '12px', padding: 0 }}>
              <li><Link href="#services">{t('services.service1_title')}</Link></li>
              <li><Link href="#services">{t('services.service2_title')}</Link></li>
              <li><Link href="#services">{t('services.service3_title')}</Link></li>
              <li><Link href="#verticals">{t('nav.verticals')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: '24px', fontSize: '1.1rem' }}>{t('footer.company')}</h4>
            <ul style={{ listStyle: 'none', color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '12px', padding: 0 }}>
              <li><Link href="#opportunity">{t('nav.opportunity')}</Link></li>
              <li><Link href="#roadmap">{t('nav.roadmap')}</Link></li>
              <li><Link href="#stats">{t('nav.market')}</Link></li>
              <li><Link href="#cta">{t('hero.cta_join')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: '24px', fontSize: '1.1rem' }}>{t('footer.legal')}</h4>
            <ul style={{ listStyle: 'none', color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '12px', padding: 0 }}>
              <li><Link href="#">{t('footer.privacy')}</Link></li>
              <li><Link href="#">{t('footer.terms')}</Link></li>
              <li><Link href="#">{t('footer.cndp')}</Link></li>
              <li><Link href="#">{t('footer.gdpr')}</Link></li>
            </ul>
          </div>
        </div>
        <div style={{ 
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
          paddingTop: '40px', borderTop: '1px solid rgba(148, 163, 184, 0.05)',
          color: 'var(--text-muted)', fontSize: '0.85rem',
          flexDirection: isRTL ? 'row-reverse' : 'row'
        }}>
          <span>&copy; 2025 Qantara. {t('footer.rights')} 🇲🇦</span>
          <span>{t('footer.backed_by')}</span>
        </div>
      </div>
    </footer>
  );
}
