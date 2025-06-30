// Design System Constants

// Colors
export const COLORS = {
  hero: '#70094E',
  dark: '#080c1b',
  cardDark: '#0a0f1e',
  blue: '#2563EB',
  lightBlue: '#6CB4EE',
  pink: '#ea4c89',
  darkPink: '#be185d',
} as const

// URLs
export const URLS = {
  register: "https://docs.google.com/forms/d/e/1FAIpQLSeDiP5lcryP4mjwD49vUiuTZWw01ZMgw4ISNpM3kgfYfLCKHA/viewform",
  slack: "https://govtech.enterprise.slack.com/archives/C08UP6M33J5",
  meetingTalk12pm: "https://go.gov.sg/designfestival-talk12pm",
  meetingTalk1pm: "https://go.gov.sg/designfestival-talk1pm",
} as const

// Font families
export const FONTS = {
  geist: 'Geist, sans-serif',
  geistMono: 'Geist Mono, monospace',
} as const

// Spacing and layout
export const SPACING = {
  sectionPadding: 'py-16 px-6',
  containerMaxWidth: 'max-w-7xl mx-auto',
} as const

// Animation and timing
export const ANIMATION = {
  transition: '0.2s ease-out',
  transitionColors: 'transition-colors',
  transitionAll: 'transition-all duration-200',
} as const

// Z-index layers
export const Z_INDEX = {
  dropdown: 10,
  sticky: 20,
  fixed: 30,
  modalBackdrop: 40,
  modal: 50,
  tooltip: 60,
} as const

// Breakpoints (matching Tailwind defaults)
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const

// Common sizes
export const SIZES = {
  heroMinHeight: 'min-h-[80vh]',
  modalMaxHeight: 'max-h-[70vh]',
  iconSmall: { width: 16, height: 16 },
  iconMedium: { width: 24, height: 24 },
  iconLarge: { width: 32, height: 32 },
  iconXL: { width: 40, height: 40 },
} as const

// Event festival constants
export const FESTIVAL = {
  year: '2025',
  month: 'JULY',
  dates: '1-31 JULY',
  name: 'GovTech Design Festival 2025',
  description: 'Join our design festival for latest announcements and updates. Register now to save your spot!',
} as const

// Component variants
export const BADGE_VARIANTS = {
  keynote: 'bg-pink-400 text-black',
  outlined: 'border border-gray-400 text-gray-300 bg-transparent',
} as const

// Modal settings
export const MODAL = {
  backdropClass: 'fixed inset-0 z-50 bg-black/80 backdrop-blur-sm',
  containerClass: 'relative w-full max-w-2xl border border-gray-700 rounded-2xl shadow-2xl',
  contentMaxHeight: 'max-h-[70vh] overflow-y-auto',
} as const