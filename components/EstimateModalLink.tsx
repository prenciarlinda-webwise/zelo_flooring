'use client';

import Link from 'next/link';
import { CSSProperties, MouseEvent, ReactNode } from 'react';
import { useEstimateModal } from './EstimateModalProvider';

type Props = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

// Drop-in replacement for a link to the old /free-estimate page: opens the estimate popup
// in place instead of navigating away. Keeps a real href to /contact (the surviving lead-gen
// page /free-estimate now redirects to) so it still works with JavaScript disabled, right-click
// "open in new tab", and screen readers.
export default function EstimateModalLink({ children, className, style }: Props) {
  const { open } = useEstimateModal();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    open();
  };

  return (
    <Link href="/contact" className={className} style={style} onClick={handleClick}>
      {children}
    </Link>
  );
}
