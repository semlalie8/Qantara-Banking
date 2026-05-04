import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

interface SectionHeaderProps {
  label: string;
  title: ReactNode;
  subtitle?: string;
}

export default function SectionHeader({ label, title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{ textAlign: 'center', marginBottom: '60px' }}
    >
      <span style={{ 
        fontSize: '0.75rem', fontWeight: '700', letterSpacing: '2px', 
        color: 'var(--accent-teal)', textTransform: 'uppercase', marginBottom: '12px', display: 'block' 
      }}>
        ✦ {label}
      </span>
      <h2 style={{ fontSize: '3rem', marginBottom: '20px' }}>{title}</h2>
      {subtitle && <p style={{ 
        maxWidth: '700px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '1.1rem' 
      }}>{subtitle}</p>}
    </motion.div>
  );
}
