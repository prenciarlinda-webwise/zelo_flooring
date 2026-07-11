'use client';

import EstimateForm from './EstimateForm';
import { useEstimateModal } from './EstimateModalProvider';

// Reuses the existing coupon-modal-* CSS (same backdrop/card/close-button look already used
// by CouponsBlock) so this popup matches the rest of the site instead of introducing a new style.
export default function EstimateModal() {
  const { isOpen, close } = useEstimateModal();

  if (!isOpen) return null;

  return (
    <div className="coupon-modal-backdrop" onClick={close} aria-hidden="true">
      <div
        className="coupon-modal"
        role="dialog"
        aria-modal="true"
        aria-label="Get a free flooring estimate"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="coupon-modal-close" onClick={close} aria-label="Close">
          &times;
        </button>
        <p className="coupon-modal-title">Get a Free Flooring Estimate</p>
        <p className="coupon-modal-body">
          We bring samples to your door, measure your space, and give you a clear written quote. No pressure, no obligation.
        </p>
        <EstimateForm formId="estimate_modal" plain title="" subtitle="" />
      </div>
    </div>
  );
}
