type Props = { size?: number; className?: string };

const make = (size = 24) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
});

export const PhoneIcon = ({ size }: Props) => (
  <svg {...make(size)}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const PinIcon = ({ size }: Props) => (
  <svg {...make(size)}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const MailIcon = ({ size }: Props) => (
  <svg {...make(size)}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 6l-10 7L2 6" />
  </svg>
);

export const ClockIcon = ({ size }: Props) => (
  <svg {...make(size)}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

export const ArrowIcon = ({ size = 16 }: Props) => (
  <svg {...make(size)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const CarpetIcon = ({ size }: Props) => (
  <svg {...make(size)}>
    <rect x="3" y="4" width="18" height="16" rx="1" />
    <path d="M3 9h18M3 14h18M8 4v16M14 4v16" />
  </svg>
);

export const VinylIcon = ({ size }: Props) => (
  <svg {...make(size)}>
    <rect x="3" y="4" width="18" height="16" />
    <path d="M3 10h18M3 16h18" />
  </svg>
);

export const WoodIcon = ({ size }: Props) => (
  <svg {...make(size)}>
    <path d="M3 6c4 1.5 14 1.5 18 0M3 12c4 1.5 14 1.5 18 0M3 18c4 1.5 14 1.5 18 0" />
    <path d="M3 4v16M21 4v16" />
  </svg>
);

export const LaminateIcon = ({ size }: Props) => (
  <svg {...make(size)}>
    <rect x="3" y="5" width="8" height="14" />
    <rect x="13" y="5" width="8" height="14" />
    <path d="M3 12h8M13 12h8" />
  </svg>
);

export const TileIcon = ({ size }: Props) => (
  <svg {...make(size)}>
    <rect x="3" y="3" width="8" height="8" />
    <rect x="13" y="3" width="8" height="8" />
    <rect x="3" y="13" width="8" height="8" />
    <rect x="13" y="13" width="8" height="8" />
  </svg>
);

export const CorkIcon = ({ size }: Props) => (
  <svg {...make(size)}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="9" cy="9" r="0.6" fill="currentColor" />
    <circle cx="14" cy="11" r="0.6" fill="currentColor" />
    <circle cx="11" cy="14" r="0.6" fill="currentColor" />
    <circle cx="15" cy="15" r="0.6" fill="currentColor" />
    <circle cx="8" cy="14" r="0.6" fill="currentColor" />
  </svg>
);

export const RubberIcon = ({ size }: Props) => (
  <svg {...make(size)}>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <circle cx="8" cy="8" r="1.2" />
    <circle cx="16" cy="8" r="1.2" />
    <circle cx="8" cy="16" r="1.2" />
    <circle cx="16" cy="16" r="1.2" />
  </svg>
);

export const VctIcon = ({ size }: Props) => (
  <svg {...make(size)}>
    <rect x="3" y="3" width="18" height="18" />
    <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
  </svg>
);

export const ShieldIcon = ({ size }: Props) => (
  <svg {...make(size)}>
    <path d="M12 2l9 4v6c0 5-4 9-9 10-5-1-9-5-9-10V6l9-4z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

export const StarIcon = ({ size }: Props) => (
  <svg {...make(size)} fill="currentColor" stroke="none">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export const ToolIcon = ({ size }: Props) => (
  <svg {...make(size)}>
    <path d="M14.7 6.3a4 4 0 0 0 5 5l-9.3 9.4a2.8 2.8 0 1 1-4-4l8.3-10.4z" />
  </svg>
);

export const BadgeIcon = ({ size }: Props) => (
  <svg {...make(size)}>
    <circle cx="12" cy="8" r="6" />
    <path d="M9 13l-2 8 5-3 5 3-2-8" />
  </svg>
);

export const HomeIcon = ({ size }: Props) => (
  <svg {...make(size)}>
    <path d="M3 11l9-8 9 8v10a2 2 0 0 1-2 2h-4v-7H10v7H6a2 2 0 0 1-2-2z" />
  </svg>
);

export const CheckIcon = ({ size }: Props) => (
  <svg {...make(size)}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const TruckIcon = ({ size }: Props) => (
  <svg {...make(size)}>
    <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);

export const FacebookIcon = ({ size = 24, className }: Props) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12z" />
  </svg>
);

export const InstagramIcon = ({ size = 24, className }: Props) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const YelpIcon = ({ size = 24, className }: Props) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M13.6 12.7l4.3-1.4c.4-.1.6-.5.5-.9 0-.1-.1-.2-.1-.3l-2.2-3.5c-.2-.4-.7-.5-1.1-.3-.1.1-.2.1-.3.2l-2.7 3.6c-.3.4-.2.9.2 1.2.2.1.4.2.6.2.3 0 .6-.1.8-.2zm-1.5 3.4c-.2-.4-.6-.5-1-.4l-4 1.5c-.4.2-.6.6-.5 1 0 .1.1.2.1.3l2.4 3.6c.3.4.7.5 1.1.3.1-.1.2-.1.3-.2l1.6-4.6c.1-.5 0-1-.3-1.3l.3-.2zm-3-3.7l4.4-1.5c.4-.1.6-.5.5-.9V3.2c0-.5-.4-.8-.8-.8h-.2L8.6 3.5c-.4.1-.7.5-.6.9.1 1.5.5 5.1 1 6.5.1.5.6.7 1.1.5zm10 3l-4.4-.6c-.4 0-.8.2-.9.6-.1.4 0 .8.3 1.1l3.3 3c.3.3.8.3 1.1 0l1.5-2.9c.2-.4 0-.9-.4-1.1-.2-.1-.4-.1-.5-.1zm-3.6 1.7c-.3-.3-.7-.3-1-.1-.4.3-.5.7-.3 1.1l1.7 4.1c.2.4.6.5 1 .4.1 0 .2-.1.3-.1l3-2.1c.4-.3.4-.8.1-1.1l-4.8-2.3z" />
  </svg>
);

export const ThumbtackIcon = ({ size = 24, className }: Props) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M12 2v8" />
    <path d="M7 10h10l-1.5 4h-7L7 10z" />
    <path d="M12 14v8" />
  </svg>
);

export const MapQuestIcon = ({ size = 24, className }: Props) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="2.5" fill="currentColor" stroke="none" />
  </svg>
);

const ICONS: Record<string, React.FC<Props>> = {
  carpet: CarpetIcon,
  vinyl: VinylIcon,
  wood: WoodIcon,
  laminate: LaminateIcon,
  tile: TileIcon,
  cork: CorkIcon,
  rubber: RubberIcon,
  vct: VctIcon,
};

export const ServiceIcon = ({ name, size = 32 }: { name: string; size?: number }) => {
  const Icon = ICONS[name] || CarpetIcon;
  return <Icon size={size} />;
};
