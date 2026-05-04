'use client';
import { motion } from 'framer-motion';
import React from 'react';

interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 32, className = '' }: LogoProps) {
  return (
    <div className={`logo-container ${className}`} style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        style={{ height: size, width: size, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <motion.img 
          src="/logo.png" 
          alt="Qantara Logo" 
          style={{ height: '100%', width: 'auto', borderRadius: '4px' }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
      <motion.span
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{ 
          fontSize: '1.5rem', 
          fontWeight: '800', 
          letterSpacing: '2px',
          fontFamily: 'Space Grotesk, sans-serif',
          background: 'linear-gradient(135deg, #2563EB, #14B8A6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textTransform: 'uppercase'
        }}
      >
        Qantara
      </motion.span>
    </div>
  );
}
