'use client';
import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/context/language.context';
import { ChevronDown, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const locales = [
  { id: 'en', label: 'English', flag: '🇬🇧', icon: 'https://flagcdn.com/w40/gb.png' },
  { id: 'fr', label: 'Français', flag: '🇫🇷', icon: 'https://flagcdn.com/w40/fr.png' },
  { id: 'ar', label: 'العربية', flag: '🇲🇦', icon: 'https://flagcdn.com/w40/ma.png' },
];

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLocale = locales.find(l => l.id === locale) || locales[0];

  return (
    <div style={{ position: 'relative' }} ref={containerRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '12px',
          padding: '6px 12px',
          cursor: 'pointer',
          color: 'var(--text-primary)',
          fontSize: '0.85rem',
          fontWeight: '500',
          transition: 'var(--transition)'
        }}
        onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent-blue)'}
        onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-subtle)'}
      >
        <img 
          src={currentLocale.icon} 
          alt={currentLocale.label} 
          style={{ width: '20px', borderRadius: '3px', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }} 
        />
        <ChevronDown size={14} style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: '0.3s' }} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            style={{
              position: 'absolute',
              top: 'calc(100% + 8px)',
              right: 0,
              width: '160px',
              background: 'var(--bg-secondary)',
              backdropFilter: 'blur(20px)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '16px',
              padding: '6px',
              boxShadow: 'var(--shadow-card)',
              zIndex: 1000
            }}
          >
            {locales.map((l) => (
              <button
                key={l.id}
                onClick={() => {
                  setLocale(l.id as any);
                  setIsOpen(false);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  width: '100%',
                  padding: '10px 12px',
                  borderRadius: '10px',
                  border: 'none',
                  background: locale === l.id ? 'rgba(37, 99, 235, 0.1)' : 'transparent',
                  color: locale === l.id ? 'var(--accent-blue)' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  fontWeight: locale === l.id ? '600' : '400',
                  textAlign: 'left',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  if (locale !== l.id) e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                }}
                onMouseLeave={(e) => {
                  if (locale !== l.id) e.currentTarget.style.background = 'transparent';
                }}
              >
                <img src={l.icon} alt={l.label} style={{ width: '18px', borderRadius: '2px' }} />
                <span>{l.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
