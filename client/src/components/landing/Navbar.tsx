'use client';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import Logo from '../Logo';
import { useAuth } from '@/context/auth.context';
import { useLanguage } from '../../context/language.context';
import LanguageSwitcher from '../LanguageSwitcher';
import { motion, AnimatePresence } from 'framer-motion';
import { User, LayoutDashboard, TrendingUp, LogOut, ChevronDown, ShieldCheck, Settings } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { user, logout } = useAuth();
  const { t } = useLanguage();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav style={{ 
      position: 'fixed', top: 0, width: '100%', zIndex: 100, 
      backdropFilter: scrolled ? 'blur(15px)' : 'none', 
      background: scrolled ? 'rgba(10, 22, 40, 0.8)' : 'transparent',
      borderBottom: scrolled ? '1px solid var(--border-subtle)' : 'none',
      padding: scrolled ? '12px 0' : '24px 0',
      transition: 'all 0.4s ease'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/">
          <Logo size={32} />
        </Link>
        
        <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            {['Services', 'Market', 'Opportunity', 'Roadmap', 'Verticals'].map(item => (
              <Link 
                key={item}
                href={`/#${item.toLowerCase()}`} 
                style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-secondary)', transition: 'var(--transition)' }}
              >
                {t(`nav.${item.toLowerCase()}`)}
              </Link>
            ))}
            <Link 
              href="/contact" 
              style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-primary)', background: 'rgba(255,255,255,0.05)', padding: '6px 14px', borderRadius: '50px', border: '1px solid var(--border-subtle)', transition: 'var(--transition)' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
            >
              {t('common.contact')}
            </Link>
          </div>

          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <LanguageSwitcher />
            <div style={{ height: '20px', width: '1px', background: 'var(--border-subtle)' }} />

            {user ? (
              <div style={{ position: 'relative' }} ref={dropdownRef}>
                <button 
                  onClick={() => setShowDropdown(!showDropdown)}
                  style={{ 
                    display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 12px',
                    borderRadius: '50px', background: 'rgba(255,255,255,0.05)', 
                    border: '1px solid var(--border-subtle)', color: 'var(--text-primary)',
                    cursor: 'pointer', transition: 'var(--transition)'
                  }}
                >
                  <div style={{ 
                    width: '32px', height: '32px', borderRadius: '50%', overflow: 'hidden',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: user.role === 'ADMIN' ? '1.5px solid var(--accent-blue)' : 'none'
                  }}>
                    <img 
                      src="/avatar.png" 
                      alt={t('common.avatar')} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>{user.firstName}</span>
                  <ChevronDown size={16} style={{ transform: showDropdown ? 'rotate(180deg)' : 'none', transition: '0.3s' }} />
                </button>

                <AnimatePresence>
                  {showDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      style={{ 
                        position: 'absolute', top: 'calc(100% + 12px)', right: 0, width: '200px',
                        background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)',
                        borderRadius: '16px', padding: '8px', boxShadow: 'var(--shadow-card)',
                        overflow: 'hidden', backdropFilter: 'blur(20px)'
                      }}
                    >
                      {user.role === 'ADMIN' && (
                        <Link 
                          href="/dashboard/admin" 
                          onClick={() => setShowDropdown(false)}
                          style={{ 
                            display: 'flex', alignItems: 'center', gap: '12px', padding: '12px',
                            borderRadius: '10px', fontSize: '0.85rem', color: 'var(--accent-blue)',
                            fontWeight: '600', transition: 'var(--transition)'
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(37, 99, 235, 0.05)'}
                          onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                        >
                          <ShieldCheck size={18} /> {t('common.admin_panel')}
                        </Link>
                      )}
                      <Link 
                        href="/dashboard" 
                        onClick={() => setShowDropdown(false)}
                        style={{ 
                          display: 'flex', alignItems: 'center', gap: '12px', padding: '12px',
                          borderRadius: '10px', fontSize: '0.85rem', color: 'var(--text-secondary)',
                          transition: 'var(--transition)'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                      >
                        <LayoutDashboard size={18} /> {t('common.dashboard')}
                      </Link>
                      <Link 
                        href="/dashboard/profile" 
                        onClick={() => setShowDropdown(false)}
                        style={{ 
                          display: 'flex', alignItems: 'center', gap: '12px', padding: '12px',
                          borderRadius: '10px', fontSize: '0.85rem', color: 'var(--text-secondary)',
                          transition: 'var(--transition)'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                      >
                        <User size={18} /> {t('common.profile')}
                      </Link>
                      <Link 
                        href="/dashboard/wealth" 
                        onClick={() => setShowDropdown(false)}
                        style={{ 
                          display: 'flex', alignItems: 'center', gap: '12px', padding: '12px',
                          borderRadius: '10px', fontSize: '0.85rem', color: 'var(--text-secondary)',
                          transition: 'var(--transition)'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                      >
                        <TrendingUp size={18} /> {t('common.portfolio')}
                      </Link>
                      <Link 
                        href="/dashboard/settings" 
                        onClick={() => setShowDropdown(false)}
                        style={{ 
                          display: 'flex', alignItems: 'center', gap: '12px', padding: '12px',
                          borderRadius: '10px', fontSize: '0.85rem', color: 'var(--text-secondary)',
                          transition: 'var(--transition)'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                      >
                        <Settings size={18} /> {t('common.settings')}
                      </Link>
                      <div style={{ height: '1px', background: 'var(--border-subtle)', margin: '4px 8px' }} />
                      <button 
                        onClick={() => { logout(); setShowDropdown(false); }}
                        style={{ 
                          width: '100%', display: 'flex', alignItems: 'center', gap: '12px', padding: '12px',
                          borderRadius: '10px', fontSize: '0.85rem', color: '#ef4444',
                          background: 'transparent', border: 'none', cursor: 'pointer',
                          transition: 'var(--transition)'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(239, 68, 68, 0.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                      >
                        <LogOut size={18} /> {t('common.logout')}
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <>
                <Link href="/login" className="btn-secondary" style={{ padding: '10px 24px', fontSize: '0.85rem' }}>{t('common.login')}</Link>
                <Link href="/register" className="btn-primary" style={{ padding: '10px 24px', fontSize: '0.85rem' }}>{t('common.register')}</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
