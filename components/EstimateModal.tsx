'use client';

import EstimateForm from './EstimateForm';
import { useEstimateModal } from './EstimateModalProvider';
import { HomeIcon, PhoneIcon } from './Icons';
import { SITE } from '@/lib/areas';

// Builds on the shared coupon-modal-* CSS (same backdrop/card/close-button base already used
// by CouponsBlock) but adds an `estimate-modal` modifier for a distinct banner header, icon
// badge, and entrance animation, scoped so CouponsBlock's modal is untouched.
export default function EstimateModal() {
  const { isOpen, source, close } = useEstimateModal();

  if (!isOpen) return null;

  const isWander = source === 'wander';

  return (
    <div className="coupon-modal-backdrop estimate-modal-backdrop" onClick={close} aria-hidden="true">
      <div
        className="coupon-modal estimate-modal"
        role="dialog"
        aria-modal="true"
        aria-label={isWander ? "Call us or get a direct flooring quote" : 'Get a free flooring estimate'}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="coupon-modal-close" onClick={close} aria-label="Close">
          &times;
        </button>
        <div className="estimate-modal-header">
          <div className="estimate-modal-icon">
            {isWander ? <PhoneIcon size={24} /> : <HomeIcon size={26} />}
          </div>
          <p className="coupon-modal-title estimate-modal-title">
            {isWander ? "Can't Find What You're Looking For?" : 'Get a Free Flooring Estimate'}
          </p>
        </div>
        <div className="estimate-modal-content">
          <p className="coupon-modal-body">
            {isWander
              ? "Give us a call and we'll help you find it, or get a direct quote for your project below."
              : 'We bring samples to your door, measure your space, and give you a clear written quote. No pressure, no obligation.'}
          </p>
          {isWander && (
            <>
              <a href={`tel:${SITE.phoneRaw}`} className="btn btn-dark btn-block btn-lg estimate-modal-call">
                <PhoneIcon size={18} /> Call {SITE.phone}
              </a>
              <div className="estimate-modal-divider">
                <span>or get a direct quote</span>
              </div>
            </>
          )}
          <EstimateForm formId="estimate_modal" plain title="" subtitle="" />
        </div>
      </div>
    </div>
  );
}
