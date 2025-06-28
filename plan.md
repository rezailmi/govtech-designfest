# Event App Project Plan

## Project Overview
This is an event application that showcases information about an event, featuring keynote speakers, event agenda, and general event information. The app provides a clean, modern interface for attendees to explore event details and plan their participation.

## Website Features
- **Event Information**: Display general event details, dates, venue, and description
- **Keynote Speakers**: Showcase featured speakers with profiles, bios, and session details
- **Event Agenda**: Detailed schedule with sessions, timings, and locations
- **Responsive Design**: Mobile-first approach ensuring optimal experience across all devices

## Navigation Structure
The application will have a top navigation bar with the following sections:
- **Home**: Main landing page with event overview and highlights
- **Speakers**: Dedicated page for keynote speakers and their profiles
- **Agenda**: Detailed event schedule and session information

## Tech Stack

### Frontend Framework
- **Next.js 15.1.0**: React-based framework with App Router
- **React 19.0.0**: Latest React version with concurrent features
- **TypeScript 5**: Type-safe development

### Styling & UI
- **Tailwind CSS 4.0.0**: Utility-first CSS framework
- **shadcn/ui**: Modern component library built on Radix UI
- **Radix UI Primitives**: Accessible, unstyled UI components
  - `@radix-ui/react-checkbox`
  - `@radix-ui/react-select`
  - `@radix-ui/react-slot`
  - `@radix-ui/react-switch`

### Utilities & Tools
- **class-variance-authority**: Component variant management
- **clsx**: Conditional className utility
- **tailwind-merge**: Tailwind CSS class merging utility

### Development Tools
- **ESLint**: Code linting and formatting
- **PostCSS**: CSS processing
- **TypeScript**: Static type checking

## Project Structure

```
govtech-designfest/
├── components.json              # shadcn/ui configuration
├── next.config.mjs             # Next.js configuration
├── package.json                # Dependencies and scripts
├── postcss.config.mjs          # PostCSS configuration
├── tsconfig.json               # TypeScript configuration
├── public/                     # Static assets
├── README.md                   # Project documentation
└── src/
    ├── app/
    │   ├── globals.css         # Global styles
    │   ├── layout.tsx          # Root layout component
    │   ├── page.tsx            # Home page
    │   ├── speakers/           # Speakers page (to be created)
    │   │   └── page.tsx
    │   └── agenda/             # Agenda page (to be created)
    │       └── page.tsx
    ├── components/
    │   ├── ui/                 # shadcn/ui components
    │   │   ├── badge.tsx
    │   │   ├── button.tsx
    │   │   ├── card.tsx
    │   │   ├── checkbox.tsx
    │   │   ├── input.tsx
    │   │   ├── select.tsx
    │   │   ├── switch.tsx
    │   │   └── textarea.tsx
    │   ├── navigation/         # Navigation components (to be created)
    │   ├── speakers/           # Speaker-related components (to be created)
    │   ├── agenda/             # Agenda-related components (to be created)
    │   └── event/              # Event information components (to be created)
    └── lib/
        └── utils.ts            # Utility functions
```

## Pages to Implement

### 1. Home Page (`/`)
- Hero section with event branding
- Event overview and key information
- Featured speakers preview
- Agenda highlights
- Call-to-action sections

### 2. Speakers Page (`/speakers`)
- Grid/list layout of all keynote speakers
- Individual speaker cards with:
  - Profile photo
  - Name and title
  - Bio/description
  - Session information
  - Social links (if applicable)

### 3. Agenda Page (`/agenda`)
- Timeline view of event schedule
- Session cards with:
  - Time and duration
  - Session title and description
  - Speaker information
  - Location/venue details
- Filtering options (by track, time, speaker)

## Components to Develop

### Navigation Components
- `TopNavigation`: Main navigation bar
- `MobileMenu`: Responsive mobile navigation
- `NavLink`: Active navigation link component

### Speaker Components
- `SpeakerCard`: Individual speaker display
- `SpeakerGrid`: Grid layout for speakers
- `SpeakerProfile`: Detailed speaker information

### Agenda Components
- `AgendaTimeline`: Schedule timeline view
- `SessionCard`: Individual session information
- `AgendaFilter`: Filtering and search functionality

### Event Components
- `EventHero`: Main hero section
- `EventInfo`: General event information
- `EventStats`: Key statistics and highlights

## Design Principles
- **Mobile-First**: Responsive design starting from mobile
- **Accessibility**: WCAG 2.1 AA compliance using Radix UI primitives
- **Performance**: Optimized loading with Next.js features
- **Modern UI**: Clean, professional design using Tailwind CSS
- **Type Safety**: Full TypeScript implementation

## Development Timeline
1. **Phase 1**: Set up navigation structure and basic layouts
2. **Phase 2**: Implement home page with event information
3. **Phase 3**: Develop speakers page and components
4. **Phase 4**: Create agenda page with timeline functionality
5. **Phase 5**: Add responsive design and mobile optimization
6. **Phase 6**: Testing, accessibility audit, and performance optimization

## Future Enhancements
- User registration and authentication
- Personal agenda builder
- Push notifications for session reminders
- Interactive venue maps
- Live session feedback and Q&A
- Social sharing capabilities 