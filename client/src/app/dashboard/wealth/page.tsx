'use client';
import React from 'react';
import { TrendingUp, PieChart, ArrowUpRight, BarChart3, Wallet } from 'lucide-react';

export default function WealthPage() {
  return (
    <div>
      <header style={{ marginBottom: '32px' }}>
        <h1 className="section-title" style={{ fontSize: '1.75rem', marginBottom: '4px' }}>
          Wealth <span className="gradient-text">Management</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)' }}>Micro-investing and robo-advisory for everyone.</p>
      </header>

      {/* Portfolio Overview */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1.2fr', gap: '32px', marginBottom: '40px' }}>
        <div className="glass-card" style={{ padding: '32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
            <div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Total Portfolio Value</p>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>32,840.50 MAD</h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-teal)', fontSize: '0.9rem', marginTop: '8px' }}>
                <ArrowUpRight size={18} />
                <span>+1,240.20 (4.2%) this month</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button className="btn-secondary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>1W</button>
              <button className="btn-secondary" style={{ padding: '8px 16px', fontSize: '0.85rem', borderColor: 'var(--accent-blue)', color: 'var(--text-primary)' }}>1M</button>
              <button className="btn-secondary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>1Y</button>
              <button className="btn-secondary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>ALL</button>
            </div>
          </div>
          
          {/* Chart Placeholder */}
          <div style={{ height: '240px', width: '100%', position: 'relative', overflow: 'hidden' }}>
            <svg viewBox="0 0 800 240" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
              <path 
                d="M0,200 Q100,180 200,190 T400,140 T600,100 T800,40" 
                fill="none" 
                stroke="var(--accent-blue)" 
                strokeWidth="3"
                style={{ filter: 'drop-shadow(0 0 8px rgba(37, 99, 235, 0.5))' }}
              />
              <path 
                d="M0,200 Q100,180 200,190 T400,140 T600,100 T800,40 L800,240 L0,240 Z" 
                fill="url(#gradient)" 
                opacity="0.1"
              />
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--accent-blue)" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div className="glass-card" style={{ padding: '24px' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <PieChart size={20} color="var(--accent-cyan)" /> Asset Allocation
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              { name: 'Moroccan Stocks', value: '45%', color: 'var(--accent-blue)' },
              { name: 'Global ETFs', value: '30%', color: 'var(--accent-teal)' },
              { name: 'Micro-savings', value: '15%', color: 'var(--accent-cyan)' },
              { name: 'Green Bonds', value: '10%', color: '#fbbf24' },
            ].map((asset, i) => (
              <div key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '8px' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>{asset.name}</span>
                  <span style={{ fontWeight: '600' }}>{asset.value}</span>
                </div>
                <div style={{ height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '3px' }}>
                  <div style={{ width: asset.value, height: '100%', background: asset.color, borderRadius: '3px' }}></div>
                </div>
              </div>
            ))}
          </div>
          <button className="btn-primary" style={{ width: '100%', marginTop: '32px', justifyContent: 'center' }}>
            Rebalance Portfolio
          </button>
        </div>
      </div>

      {/* Suggested Investments */}
      <h3 style={{ fontSize: '1.1rem', marginBottom: '20px' }}>AI Recommended Funds</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
        {[
          { title: 'Casablanca Blue-Chip', desc: 'Top 10 performing companies on CSE.', returns: '+12.4%', icon: TrendingUp },
          { title: 'Green Energy Morocco', desc: 'Solar and wind infrastructure focus.', returns: '+8.1%', icon: Wallet },
          { title: 'Tech Pioneers', desc: 'Early stage African fintech startup fund.', returns: '+18.2%', icon: BarChart3 },
        ].map((fund, i) => (
          <div key={i} className="glass-card" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-cyan)' }}>
                <fund.icon size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: '600' }}>{fund.title}</h4>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{fund.desc}</p>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Historical Return</p>
                <p style={{ fontWeight: '700', color: 'var(--accent-teal)' }}>{fund.returns}</p>
              </div>
              <button className="btn-secondary" style={{ padding: '8px 16px', fontSize: '0.8rem' }}>Invest</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
