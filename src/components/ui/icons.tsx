import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Svg({ size = 22, children, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const Icons = {
  menu: (p: IconProps) => (
    <Svg {...p}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </Svg>
  ),
  close: (p: IconProps) => (
    <Svg {...p}>
      <path d="M6 6l12 12M18 6L6 18" />
    </Svg>
  ),
  phone: (p: IconProps) => (
    <Svg {...p}>
      <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3A2 2 0 0 1 18.5 19 15.5 15.5 0 0 1 5 5.5a2 2 0 0 1 1.5-2z" />
    </Svg>
  ),
  whatsapp: (p: IconProps) => (
    <Svg {...p}>
      <path d="M20 11.5A8.5 8.5 0 0 1 7.2 18.4L4 20l1.7-3.1A8.5 8.5 0 1 1 20 11.5z" />
      <path d="M9.2 9.4c.2-.5.3-.5.6-.5h.5c.2 0 .3.1.4.4l.6 1.5c.1.2 0 .4-.1.5l-.4.4c-.1.2 0 .4.2.6.4.5 1 1 1.6 1.4.2.1.4.1.5-.1l.4-.4c.2-.1.4-.1.5 0l1.5.7c.2.1.3.2.3.4v.5c0 .3 0 .4-.5.6A4.2 4.2 0 0 1 12 16a6 6 0 0 1-2.8-1.6A6 6 0 0 1 7.6 11c0-1 .3-1.5.6-1.6z" />
    </Svg>
  ),
  pin: (p: IconProps) => (
    <Svg {...p}>
      <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.2" />
    </Svg>
  ),
  clock: (p: IconProps) => (
    <Svg {...p}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </Svg>
  ),
  chevronDown: (p: IconProps) => (
    <Svg {...p}>
      <path d="M6 9l6 6 6-6" />
    </Svg>
  ),
  chevronLeft: (p: IconProps) => (
    <Svg {...p}>
      <path d="M15 6l-6 6 6 6" />
    </Svg>
  ),
  chevronRight: (p: IconProps) => (
    <Svg {...p}>
      <path d="M9 6l6 6-6 6" />
    </Svg>
  ),
  star: (p: IconProps) => (
    <Svg {...p} fill="currentColor" stroke="none">
      <path d="M12 2.8l2.4 5 5.5.8-4 3.9.9 5.5L12 15.8 7.2 18l.9-5.5-4-3.9 5.5-.8L12 2.8z" />
    </Svg>
  ),
  plus: (p: IconProps) => (
    <Svg {...p}>
      <path d="M12 5v14M5 12h14" />
    </Svg>
  ),
  minus: (p: IconProps) => (
    <Svg {...p}>
      <path d="M5 12h14" />
    </Svg>
  ),
  trash: (p: IconProps) => (
    <Svg {...p}>
      <path d="M4 7h16M9 7V5h6v2M8 7l1 12h6l1-12" />
    </Svg>
  ),
  search: (p: IconProps) => (
    <Svg {...p}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16l4 4" />
    </Svg>
  ),
  cart: (p: IconProps) => (
    <Svg {...p}>
      <path d="M5 6h2l1.2 9h9.3l1.5-7H8" />
      <circle cx="10" cy="19" r="1.2" />
      <circle cx="17" cy="19" r="1.2" />
    </Svg>
  ),
  mail: (p: IconProps) => (
    <Svg {...p}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </Svg>
  ),
  arrow: (p: IconProps) => (
    <Svg {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Svg>
  ),
  instagram: (p: IconProps) => (
    <Svg {...p}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
    </Svg>
  ),
  facebook: (p: IconProps) => (
    <Svg {...p}>
      <path d="M14 9h3V6h-3a4 4 0 0 0-4 4v2H8v3h2v7h3v-7h3l1-3h-4v-2a1 1 0 0 1 1-1z" />
    </Svg>
  ),
  tiktok: (p: IconProps) => (
    <Svg {...p}>
      <path d="M14 7.2c1.2 1.6 2.8 2.4 4.7 2.6V13c-1.7-.1-3.3-.7-4.7-1.7v5.4A5.7 5.7 0 1 1 10.5 11" />
      <path d="M14 13.6V7" />
    </Svg>
  ),
  utensils: (p: IconProps) => (
    <Svg {...p}>
      <path d="M7 3v8M5 3v5a2 2 0 0 0 4 0V3M7 11v10M16 3v18M14 8c0-2.5 1-5 2-5s2 2.5 2 5" />
    </Svg>
  ),
  sun: (p: IconProps) => (
    <Svg {...p}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v2M12 19v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M3 12h2M19 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </Svg>
  ),
  users: (p: IconProps) => (
    <Svg {...p}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <circle cx="17" cy="9" r="2.2" />
      <path d="M16 19a4.5 4.5 0 0 1 4.5-4" />
    </Svg>
  ),
  snowflake: (p: IconProps) => (
    <Svg {...p}>
      <path d="M12 3v18M5 7.5l14 9M5 16.5l14-9" />
    </Svg>
  ),
  wifi: (p: IconProps) => (
    <Svg {...p}>
      <path d="M5 10a10 10 0 0 1 14 0M8 13a6 6 0 0 1 8 0" />
      <circle cx="12" cy="17" r="1.2" fill="currentColor" stroke="none" />
    </Svg>
  ),
  parking: (p: IconProps) => (
    <Svg {...p}>
      <rect x="4" y="3.5" width="16" height="17" rx="2" />
      <path d="M9 16V8h4.2a2.6 2.6 0 0 1 0 5.2H9" />
    </Svg>
  ),
  bag: (p: IconProps) => (
    <Svg {...p}>
      <path d="M6 8h12l-1 12H7L6 8z" />
      <path d="M9 8V7a3 3 0 0 1 6 0v1" />
    </Svg>
  ),
  bike: (p: IconProps) => (
    <Svg {...p}>
      <circle cx="6.5" cy="16.5" r="2.5" />
      <circle cx="17.5" cy="16.5" r="2.5" />
      <path d="M6.5 16.5l4-8h4l3 8M10.5 8.5L9 12h6" />
    </Svg>
  ),
  accessible: (p: IconProps) => (
    <Svg {...p}>
      <circle cx="12" cy="5" r="2" />
      <path d="M8 21l2.2-7H16M10 14l6 6" />
      <circle cx="8" cy="19" r="2" />
    </Svg>
  ),
  sparkle: (p: IconProps) => (
    <Svg {...p}>
      <path d="M12 3l1.2 5.3L18 9.5l-4.8 1.2L12 16l-1.2-5.3L6 9.5l4.8-1.2L12 3zM18 15l.6 2.4L21 18l-2.4.6L18 21l-.6-2.4L15 18l2.4-.6L18 15z" />
    </Svg>
  ),
  chef: (p: IconProps) => (
    <Svg {...p}>
      <path d="M8 10a4 4 0 1 1 8 0v9H8v-9z" />
      <path d="M8 10a3.2 3.2 0 0 1-2-5.8 4.2 4.2 0 0 1 12 0 3.2 3.2 0 0 1-2 5.8" />
    </Svg>
  ),
  leaf: (p: IconProps) => (
    <Svg {...p}>
      <path d="M5 19C5 11 11 5 19 5 19 13 13 19 5 19z" />
      <path d="M8 16c3-3 6-6 8-9" />
    </Svg>
  ),
  flame: (p: IconProps) => (
    <Svg {...p}>
      <path d="M12 3c2 3-1 5 1 8 1.5 1.5 4 .5 4 4a5 5 0 1 1-10 0c0-4 3-6 5-12z" />
    </Svg>
  ),
  home: (p: IconProps) => (
    <Svg {...p}>
      <path d="M4 11l8-7 8 7v9a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9z" />
    </Svg>
  ),
  gift: (p: IconProps) => (
    <Svg {...p}>
      <rect x="4" y="11" width="16" height="9" rx="1" />
      <path d="M4 11h16V8H4zM12 8v12M12 8c0-2-1.5-3.5-3.2-2.2S7.5 10 12 8M12 8c0-2 1.5-3.5 3.2-2.2S16.5 10 12 8" />
    </Svg>
  ),
  briefcase: (p: IconProps) => (
    <Svg {...p}>
      <rect x="3.5" y="8" width="17" height="11" rx="2" />
      <path d="M9 8V6.5A1.5 1.5 0 0 1 10.5 5h3A1.5 1.5 0 0 1 15 6.5V8M3.5 13h17" />
    </Svg>
  ),
  check: (p: IconProps) => (
    <Svg {...p}>
      <path d="M5 12.5l4.2 4.2L19 7.5" />
    </Svg>
  ),
  chilli: (p: IconProps) => (
    <Svg {...p}>
      <path d="M15 5c-1 2-1 3 0 4 2 2 4 6 1 9s-9 1-10-4 4-8 9-9z" />
    </Svg>
  ),
  leafSmall: (p: IconProps) => (
    <Svg {...p}>
      <path d="M6 16C6 10 12 6 18 6 18 12 12 18 6 16z" />
    </Svg>
  ),
};

export type IconName = keyof typeof Icons;
