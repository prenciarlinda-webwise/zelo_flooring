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
