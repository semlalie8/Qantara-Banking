'use client';
import { useAuth } from '@/context/auth.context';
import { 
  TrendingUp, 
  TrendingDown, 
  Wallet, 
  ArrowUpRight, 
  ArrowDownLeft,
  Clock
} from 'lucide-react';

export default function DashboardPage() {
  const { user } = useAuth();

  const stats = [
    { name: 'Total Balance', value: '45,230.00 MAD', icon: Wallet, change: '+2.4%', trend: 'up' },
    { name: 'Monthly Income', value: '12,500.00 MAD', icon: ArrowUpRight, change: '+12%', trend: 'up' },
    { name: 'Monthly Expenses', value: '8,420.00 MAD', icon: ArrowDownLeft, change: '-4%', trend: 'down' },
    { name: 'Active Loans', value: '1,200.00 MAD', icon: Clock, change: 'Due in 5 days', trend: 'neutral' },
  ];

  return (
    <div>
      <header style={{ marginBottom: '32px' }}>
        <h1 className="section-title" style={{ fontSize: '1.75rem', marginBottom: '4px' }}>
          Welcome, <span className="gradient-text">{user?.firstName}</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)' }}>Here's what's happening with your finances today.</p>
      </header>

      {/* Stats Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', marginBottom: '40px' }}>
        {stats.map((stat) => (
          <div key={stat.name} className="glass-card" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div style={{ 
                width: '44px', 
                height: '44px', 
                borderRadius: '12px', 
                background: 'rgba(37, 99, 235, 0.1)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: 'var(--accent-blue)'
              }}>
                <stat.icon size={22} />
              </div>
              <span style={{ 
                fontSize: '0.75rem', 
                fontWeight: '600', 
                color: stat.trend === 'up' ? 'var(--accent-teal)' : stat.trend === 'down' ? '#ef4444' : 'var(--text-muted)'
              }}>
                {stat.change}
              </span>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '4px' }}>{stat.name}</p>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700' }}>{stat.value}</h3>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
        {/* Recent Transactions */}
        <div className="glass-card" style={{ padding: '24px' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '20px' }}>Recent Transactions</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '16px', borderBottom: i !== 4 ? '1px solid var(--border-subtle)' : 'none' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {i % 2 === 0 ? <TrendingDown size={16} color="#ef4444" /> : <TrendingUp size={16} color="var(--accent-teal)" />}
                  </div>
                  <div>
                    <p style={{ fontSize: '0.9rem', fontWeight: '500' }}>{i % 2 === 0 ? 'Marjane Market' : 'Salary Deposit'}</p>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>May {i + 1}, 2024 • {i % 2 === 0 ? 'Shopping' : 'Income'}</p>
                  </div>
                </div>
                <p style={{ fontWeight: '600', color: i % 2 === 0 ? 'var(--text-primary)' : 'var(--accent-teal)' }}>
                  {i % 2 === 0 ? '-' : '+'}{(i * 150).toFixed(2)} MAD
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* AI Quick Insight */}
        <div className="glass-card" style={{ padding: '24px', background: 'var(--gradient-card)' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '1.2rem' }}>✨</span> AI Insight
          </h3>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '20px' }}>
            Based on your spending this week, you've spent 15% more on groceries than usual. Our <strong>qwen3.5:cloud</strong> advisor suggests moving 500 MAD to your "Emergency Fund" to stay on track.
          </p>
          <button className="btn-secondary" style={{ width: '100%', fontSize: '0.8rem', padding: '10px' }}>
            Ask Advisor
          </button>
        </div>
      </div>
    </div>
  );
}
