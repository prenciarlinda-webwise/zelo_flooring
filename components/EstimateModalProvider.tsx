'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import EstimateModal from './EstimateModal';

type EstimateModalContextValue = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const EstimateModalContext = createContext<EstimateModalContextValue | null>(null);

// Any "Request a free in-home estimate" link site-wide (blog posts, service pages, location
// pages) calls this to open the popup form instead of navigating to /free-estimate.
export function useEstimateModal() {
  const ctx = useContext(EstimateModalContext);
  if (!ctx) throw new Error('useEstimateModal must be used within EstimateModalProvider');
  return ctx;
}

export default function EstimateModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  useEffect(() => {
    document.body.classList.toggle('estimate-modal-open', isOpen);
    return () => document.body.classList.remove('estimate-modal-open');
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  return (
    <EstimateModalContext.Provider value={{ isOpen, open, close }}>
      {children}
      <EstimateModal />
    </EstimateModalContext.Provider>
  );
}
