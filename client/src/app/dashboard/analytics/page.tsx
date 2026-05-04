'use client';
import React from 'react';
import { BarChart3, PieChart, TrendingUp, Calendar, Download } from 'lucide-react';

export default function AnalyticsPage() {
  return (
    <div>
      <header style={{ marginBottom: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <h1 className="section-title" style={{ fontSize: '1.75rem', marginBottom: '4px' }}>
            Financial <span className="gradient-text">Analytics</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)' }}>Deep dive into your spending and saving patterns.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="btn-secondary" style={{ height: '44px', gap: '8px' }}>
            <Calendar size={18} /> Last 30 Days
          </button>
          <button className="btn-secondary" style={{ height: '44px', gap: '8px' }}>
            <Download size={18} /> Export
          </button>
        </div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '32px', marginBottom: '32px' }}>
        {/* Spending Category */}
        <div className="glass-card" style={{ padding: '24px' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <PieChart size={20} color="var(--accent-blue)" /> Spending by Category
          </h3>
          <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
            <div style={{ 
              width: '180px', height: '180px', borderRadius: '50%',
              background: 'conic-gradient(var(--accent-blue) 0% 35%, var(--accent-teal) 35% 60%, var(--accent-cyan) 60% 85%, #fbbf24 85% 100%)',
              position: 'relative'
            }}>
              <div style={{ 
                position: 'absolute', inset: '30px', borderRadius: '50%', background: 'var(--bg-secondary)',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
              }}>
                <span style={{ fontSize: '1.25rem', fontWeight: '800' }}>8,420</span>
                <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>MAD TOTAL</span>
              </div>
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { name: 'Rent & Bills', value: '35%', color: 'var(--accent-blue)' },
                { name: 'Groceries', value: '25%', color: 'var(--accent-teal)' },
                { name: 'Leisure', value: '25%', color: 'var(--accent-cyan)' },
                { name: 'Others', value: '15%', color: '#fbbf24' },
              ].map((cat, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: cat.color }}></div>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', flex: 1 }}>{cat.name}</span>
                  <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>{cat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Monthly Trends */}
        <div className="glass-card" style={{ padding: '24px' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <BarChart3 size={20} color="var(--accent-teal)" /> Savings Trend
          </h3>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '12px', height: '180px', marginTop: '20px' }}>
            {[40, 55, 30, 70, 45, 85, 60].map((height, i) => (
              <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <div style={{ 
                  width: '100%', height: `${height}%`, background: i === 5 ? 'var(--gradient-brand)' : 'rgba(255,255,255,0.05)', 
                  borderRadius: '4px 4px 0 0', position: 'relative'
                }}>
                  {i === 5 && (
                    <div style={{ 
                      position: 'absolute', top: '-30px', left: '50%', transform: 'translateX(-50%)',
                      padding: '4px 8px', borderRadius: '4px', background: 'var(--bg-primary)', border: '1px solid var(--border-subtle)',
                      fontSize: '0.7rem', whiteSpace: 'nowrap'
                    }}>+24%</div>
                  )}
                </div>
                <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>M{i+1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Intelligence Card */}
      <div className="glass-card" style={{ padding: '32px', background: 'var(--gradient-card)' }}>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <div style={{ 
            width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(255,255,255,0.05)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem'
          }}>
            🧠
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Financial Health Analysis</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Your "Savings-to-Income" ratio is at <strong>22%</strong>, which is 7% higher than the average MOUJ user in Casablanca. To achieve your goal of "Home Purchase" by 2028, we recommend increasing your <strong>Green Bonds</strong> allocation by 5%.
            </p>
          </div>
          <button className="btn-primary">Optimize Now</button>
        </div>
      </div>
    </div>
  );
}
