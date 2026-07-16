'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import EstimateModal from './EstimateModal';

// 'manual' = visitor clicked a "Request a free estimate" link. 'wander' = auto-triggered by
// WanderingEstimatePopup after the dwell delay. EstimateModal reads this to pick its copy.
export type EstimateModalSource = 'manual' | 'wander';

type EstimateModalContextValue = {
  isOpen: boolean;
  source: EstimateModalSource;
  open: (source?: EstimateModalSource) => void;
  close: () => void;
};

const EstimateModalContext = createContext<EstimateModalContextValue | null>(null);

// Read by WanderingEstimatePopup so the auto-trigger never fires on top of (or right after)
// a modal the visitor already opened themselves this session, manually or via the timer.
export const ESTIMATE_MODAL_SHOWN_KEY = 'estimate_modal_shown';

// Any "Request a free in-home estimate" link site-wide (blog posts, service pages, location
// pages) calls this to open the popup form instead of navigating to /free-estimate.
export function useEstimateModal() {
  const ctx = useContext(EstimateModalContext);
  if (!ctx) throw new Error('useEstimateModal must be used within EstimateModalProvider');
  return ctx;
}

export default function EstimateModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState<EstimateModalSource>('manual');
  const open = (nextSource: EstimateModalSource = 'manual') => {
    sessionStorage.setItem(ESTIMATE_MODAL_SHOWN_KEY, '1');
    setSource(nextSource);
    setIsOpen(true);
  };
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
    <EstimateModalContext.Provider value={{ isOpen, source, open, close }}>
      {children}
      <EstimateModal />
    </EstimateModalContext.Provider>
  );
}
