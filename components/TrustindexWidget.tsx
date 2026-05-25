'use client';

import { useEffect, useRef } from 'react';

type Props = {
  // Full Trustindex loader URL, e.g. https://cdn.trustindex.io/loader.js?<id>
  src: string;
  className?: string;
};

// Trustindex injects its widget next to the loader <script>. We append the
// script inside a container ref so the widget renders exactly where this
// component is placed (a raw <script> in JSX does not execute in React).
export default function TrustindexWidget({ src, className }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || container.querySelector('script')) return;
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.defer = true;
    container.appendChild(script);
  }, [src]);

  return <div className={className} ref={containerRef} />;
}
