import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { WagmiConfig } from 'wagmi';
import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import { wagmiConfig, chains } from './config/wagmi';

// Temporary fallback routing elements for presentation
const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-background text-textPrimary flex flex-col font-sans">
    <header className="h-16 border-b border-white/10 flex items-center justify-between px-6 bg-cardBg">
      <div className="text-xl font-bold text-primary">Novadex</div>
      <div className="text-sm text-accent">BNB Chain</div>
    </header>
    <main className="flex-1 flex flex-col items-center justify-center p-4">{children}</main>
  </div>
);

export default function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider 
        chains={chains} 
        theme={darkTheme({
          accentColor: '#7645D9',
          accentColorForeground: '#F4EEFF',
          backgroundColor: '#1E1D20',
          borderRadius: 'medium'
        })}
      >
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/swap" element={
                <div className="bg-cardBg p-6 rounded-card w-full max-w-md border border-white/10">
                  <h2 className="text-xl font-bold mb-4">Swap</h2>
                  <div className="bg-inputBg p-4 rounded-input mb-3">
                    <input className="bg-transparent w-full outline-none text-xl" placeholder="0.0" />
                  </div>
                  <button className="w-full bg-primary py-3 rounded-btn font-semibold hover:opacity-90 transition">
                    Connect Wallet
                  </button>
                </div>
              } />
              <Route path="*" element={<Navigate to="/swap" replace />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
