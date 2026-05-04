'use client';

import React, { useState, useEffect } from 'react';
import { Mail, CheckCircle, Clock, Reply, AlertCircle, X } from 'lucide-react';

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: 'UNREAD' | 'READ' | 'REPLIED';
  adminReply?: string;
  createdAt: string;
}

export default function InboxPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);
  const [replyText, setReplyText] = useState('');
  const [sendingReply, setSendingReply] = useState(false);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/contact');
      if (res.ok) {
        const data = await res.json();
        setMessages(data.data);
      }
    } catch (error) {
      console.error('Failed to fetch messages:', error);
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (id: string) => {
    try {
      await fetch(process.env.NEXT_PUBLIC_API_URL + `/contact/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'READ' })
      });
      fetchMessages();
    } catch (error) {
      console.error('Failed to update status:', error);
    }
  };

  const handleReply = async (id: string) => {
    if (!replyText.trim()) return;
    setSendingReply(true);
    try {
      await fetch(process.env.NEXT_PUBLIC_API_URL + `/contact/${id}/reply`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reply: replyText })
      });
      setReplyText('');
      setSelectedMessage(null);
      fetchMessages();
    } catch (error) {
      console.error('Failed to send reply:', error);
    } finally {
      setSendingReply(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'UNREAD': return <AlertCircle size={16} color="var(--accent-teal)" />;
      case 'READ': return <CheckCircle size={16} color="var(--text-muted)" />;
      case 'REPLIED': return <Reply size={16} color="var(--accent-blue)" />;
      default: return <Clock size={16} />;
    }
  };

  if (loading) {
    return <div style={{ padding: '40px' }}>Loading inbox...</div>;
  }

  return (
    <div style={{ padding: '32px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <h1 style={{ fontSize: '2rem' }}>Support Inbox</h1>
        <div style={{ background: 'var(--bg-secondary)', padding: '8px 16px', borderRadius: '20px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          {messages.filter(m => m.status === 'UNREAD').length} Unread Messages
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: selectedMessage ? '1fr 1fr' : '1fr', gap: '24px' }}>
        {/* Messages List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {messages.length === 0 ? (
            <div style={{ padding: '40px', textAlign: 'center', background: 'var(--bg-secondary)', borderRadius: '16px', color: 'var(--text-muted)' }}>
              No messages found.
            </div>
          ) : (
            messages.map((msg) => (
              <div 
                key={msg.id} 
                onClick={() => {
                  setSelectedMessage(msg);
                  if (msg.status === 'UNREAD') markAsRead(msg.id);
                }}
                style={{ 
                  padding: '20px', 
                  background: selectedMessage?.id === msg.id ? 'rgba(37, 99, 235, 0.05)' : 'var(--bg-secondary)', 
                  border: `1px solid ${selectedMessage?.id === msg.id ? 'var(--accent-blue)' : 'var(--border-subtle)'}`,
                  borderRadius: '16px', 
                  cursor: 'pointer',
                  transition: 'var(--transition)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--bg-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}>
                      <Mail size={18} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1rem' }}>{msg.name}</h4>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{msg.email}</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      {new Date(msg.createdAt).toLocaleDateString()}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      {getStatusIcon(msg.status)} {msg.status}
                    </div>
                  </div>
                </div>
                <h5 style={{ fontSize: '0.95rem', marginBottom: '8px', color: 'var(--text-primary)' }}>{msg.subject}</h5>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {msg.message}
                </p>
              </div>
            ))
          )}
        </div>

        {/* Message Detail View */}
        {selectedMessage && (
          <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)', borderRadius: '16px', padding: '32px', position: 'sticky', top: '32px', alignSelf: 'start' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
              <div>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{selectedMessage.subject}</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>From: <span style={{ color: 'var(--text-primary)' }}>{selectedMessage.name}</span> ({selectedMessage.email})</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '4px' }}>Received: {new Date(selectedMessage.createdAt).toLocaleString()}</p>
              </div>
              <button 
                onClick={() => setSelectedMessage(null)}
                style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
              >
                <X size={20} />
              </button>
            </div>

            <div style={{ padding: '24px', background: 'var(--bg-primary)', borderRadius: '12px', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '32px' }}>
              {selectedMessage.message}
            </div>

            {selectedMessage.status === 'REPLIED' ? (
              <div>
                <h4 style={{ fontSize: '0.9rem', color: 'var(--accent-blue)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Reply size={16} /> Replied by Admin
                </h4>
                <div style={{ padding: '20px', background: 'rgba(37, 99, 235, 0.05)', border: '1px solid rgba(37, 99, 235, 0.2)', borderRadius: '12px', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  {selectedMessage.adminReply}
                </div>
              </div>
            ) : (
              <div>
                <h4 style={{ fontSize: '1rem', marginBottom: '16px' }}>Reply to Client</h4>
                <textarea 
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Type your response here... (This would send an email in production)"
                  style={{ width: '100%', padding: '16px', background: 'var(--bg-primary)', border: '1px solid var(--border-subtle)', borderRadius: '12px', color: 'var(--text-primary)', fontSize: '0.95rem', minHeight: '150px', outline: 'none', resize: 'vertical', marginBottom: '16px' }}
                />
                <button 
                  onClick={() => handleReply(selectedMessage.id)}
                  disabled={sendingReply || !replyText.trim()}
                  className="btn-primary" 
                  style={{ padding: '12px 24px', fontSize: '0.95rem', opacity: sendingReply || !replyText.trim() ? 0.7 : 1 }}
                >
                  {sendingReply ? 'Sending...' : 'Send Reply'}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
