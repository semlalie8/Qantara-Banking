import React, { ReactNode } from 'react';
import '../styles/globals.css';
import { AuthProvider } from '@/context/auth.context';
import { LanguageProvider } from '@/context/language.context';

export const metadata = {
  title: 'Qantara — Full-Stack Fintech Platform',
  description: 'AI-powered financial services in Morocco and beyond.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body>
        <AuthProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
