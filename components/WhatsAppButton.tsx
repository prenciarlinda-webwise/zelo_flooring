'use client';

import { SITE } from '@/lib/areas';

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    `Hi ${SITE.name}, I'm interested in a flooring project. Can you help me with a free estimate?`
  );
  const whatsappUrl = `https://wa.me/${SITE.phoneRaw}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 32 32" width="32" height="32" fill="white">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.129 6.742 3.047 9.379L1.054 31.27l6.1-1.957A15.908 15.908 0 0016.004 32C24.826 32 32 24.826 32 16.004S24.826 0 16.004 0zm9.302 22.602c-.387 1.092-1.93 1.998-3.156 2.264-.84.178-1.937.32-5.633-1.211-4.727-1.957-7.77-6.754-8.004-7.07-.226-.316-1.89-2.52-1.89-4.808 0-2.289 1.196-3.414 1.621-3.879.387-.422.918-.62 1.37-.62.168 0 .317.008.453.016.422.016.633.04.91.707.348.832 1.196 2.867 1.3 3.074.106.207.207.48.078.758-.12.285-.223.41-.43.637-.206.226-.422.504-.602.676-.207.191-.422.398-.18.781.242.383 1.074 1.77 2.305 2.867 1.586 1.414 2.922 1.852 3.34 2.059.418.207.66.176.903-.105.25-.29 1.062-1.234 1.344-1.66.277-.426.559-.352.937-.211.383.14 2.422 1.141 2.84 1.348.418.207.695.312.797.48.102.168.102.973-.285 2.066z" />
      </svg>
    </a>
  );
}
