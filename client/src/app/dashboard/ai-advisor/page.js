'use client';
import { useState, useRef, useEffect } from 'react';
import { useAuth } from '../../context/auth.context';
import { Send, Bot, User, Sparkles, Brain, ShieldCheck, Zap } from 'lucide-react';

const models = [
  { id: 'qwen3.5:cloud', name: 'Primary Advisor', icon: Sparkles, color: 'var(--accent-blue)' },
  { id: 'deepseek-r1:8b', name: 'Reasoning Engine', icon: Brain, color: 'var(--accent-teal)' },
  { id: 'gemma4:E4B', name: 'Fraud Watch', icon: ShieldCheck, color: '#ef4444' },
  { id: 'gemma4:E2B', name: 'Quick Helper', icon: Zap, color: 'var(--accent-cyan)' },
];

export default function AIAdvisorPage() {
  const { user } = useAuth();
  const [messages, setMessages] = useState([
    { role: 'assistant', content: `Hello ${user?.firstName}! I'm your Qantara AI assistant. How can I help you with your finances today?`, model: 'qwen3.5:cloud' }
  ]);
  const [input, setInput] = useState('');
  const [selectedModel, setSelectedModel] = useState(models[0]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages, isTyping]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      // In a real app, this would call our backend API
      // For now, we'll simulate the AI response
      setTimeout(() => {
        const aiResponse = { 
          role: 'assistant', 
          content: `I'm analyzing your request using the ${selectedModel.name} model. Based on your current balance of 45,230 MAD, I recommend optimizing your monthly savings by diversifying into local equity markets.`,
          model: selectedModel.id
        };
        setMessages(prev => [...prev, aiResponse]);
        setIsTyping(false);
      }, 1500);
    } catch (err) {
      console.error(err);
      setIsTyping(false);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 120px)' }}>
      <header style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '4px' }}>AI Financial <span className="gradient-text">Advisor</span></h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Personalized financial guidance powered by multiple LLMs.</p>
        </div>
        
        <div style={{ display: 'flex', gap: '8px' }}>
          {models.map((model) => (
            <button 
              key={model.id}
              onClick={() => setSelectedModel(model)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 12px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid',
                borderColor: selectedModel.id === model.id ? model.color : 'var(--border-subtle)',
                background: selectedModel.id === model.id ? 'rgba(255,255,255,0.05)' : 'transparent',
                color: selectedModel.id === model.id ? 'var(--text-primary)' : 'var(--text-muted)',
                fontSize: '0.75rem',
                cursor: 'pointer',
                transition: 'var(--transition)'
              }}
            >
              <model.icon size={14} color={selectedModel.id === model.id ? model.color : 'currentColor'} />
              {model.name.split(' ')[0]}
            </button>
          ))}
        </div>
      </header>

      {/* Chat Container */}
      <div className="glass-card" style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <div style={{ flex: 1, overflowY: 'auto', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {messages.map((msg, i) => (
            <div key={i} style={{ 
              display: 'flex', 
              gap: '12px', 
              alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
              maxWidth: '80%'
            }}>
              {msg.role === 'assistant' && (
                <div style={{ 
                  width: '32px', 
                  height: '32px', 
                  borderRadius: '8px', 
                  background: 'var(--gradient-brand)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}>
                  <Bot size={18} color="white" />
                </div>
              )}
              
              <div style={{ 
                padding: '12px 16px', 
                borderRadius: '16px', 
                borderTopRightRadius: msg.role === 'user' ? '4px' : '16px',
                borderTopLeftRadius: msg.role === 'assistant' ? '4px' : '16px',
                background: msg.role === 'user' ? 'var(--accent-blue)' : 'rgba(255,255,255,0.05)',
                color: 'var(--text-primary)',
                fontSize: '0.9rem'
              }}>
                <p>{msg.content}</p>
                {msg.model && (
                  <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', marginTop: '4px', display: 'block' }}>
                    Model: {msg.model}
                  </span>
                )}
              </div>

              {msg.role === 'user' && (
                <div style={{ 
                  width: '32px', 
                  height: '32px', 
                  borderRadius: '8px', 
                  background: 'rgba(255,255,255,0.1)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}>
                  <User size={18} color="var(--text-secondary)" />
                </div>
              )}
            </div>
          ))}
          
          {isTyping && (
            <div style={{ display: 'flex', gap: '12px', alignSelf: 'flex-start' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'var(--gradient-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Bot size={18} color="white" />
              </div>
              <div style={{ padding: '12px 16px', borderRadius: '16px', borderTopLeftRadius: '4px', background: 'rgba(255,255,255,0.05)' }}>
                <div style={{ display: 'flex', gap: '4px' }}>
                  <div className="typing-dot" style={{ width: '6px', height: '6px', background: 'var(--text-muted)', borderRadius: '50%' }}></div>
                  <div className="typing-dot" style={{ width: '6px', height: '6px', background: 'var(--text-muted)', borderRadius: '50%' }}></div>
                  <div className="typing-dot" style={{ width: '6px', height: '6px', background: 'var(--text-muted)', borderRadius: '50%' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div style={{ padding: '20px', borderTop: '1px solid var(--border-subtle)' }}>
          <form onSubmit={handleSend} style={{ display: 'flex', gap: '12px' }}>
            <input 
              type="text" 
              className="cta-input" 
              placeholder={`Ask ${selectedModel.name}...`}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{ flex: 1, height: '48px' }}
            />
            <button type="submit" className="btn-primary" style={{ padding: '0 20px' }}>
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .typing-dot {
          animation: bounce 1.4s infinite ease-in-out both;
        }
        .typing-dot:nth-child(1) { animation-delay: -0.32s; }
        .typing-dot:nth-child(2) { animation-delay: -0.16s; }
        
        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1.0); }
        }
      `}</style>
    </div>
  );
}
