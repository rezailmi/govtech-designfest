# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Next.js 15.1.0** event application for the GovTech Design Festival, built with React 19 and TypeScript. The app showcases event information, schedules, speakers, and registration details.

## Essential Commands

```bash
# Development
npm run dev          # Start development server on http://localhost:3000

# Building & Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint with Next.js rules
npx tsc             # Run TypeScript type checking
```

## Architecture & Key Patterns

### Directory Structure
- `/src/app/` - Next.js App Router pages and layouts
- `/src/components/` - Reusable components organized by feature
- `/src/components/ui/` - shadcn/ui component library
- `/src/icons/` - Icon components (brand, social, ui)
- `/src/lib/utils.ts` - Utility functions including `cn()` for className merging

### Styling Approach
- **Tailwind CSS v4** with CSS-first configuration
- Design tokens defined in `globals.css` using `@theme` directive
- CSS variables for theming (e.g., `--background`, `--foreground`)
- Use `cn()` utility from `lib/utils.ts` for conditional classNames

### Component Patterns
- All components use TypeScript with proper type definitions
- shadcn/ui components are in `/src/components/ui/`
- Follow existing patterns when creating new components:
  ```tsx
  import { cn } from "@/lib/utils"
  
  interface ComponentProps {
    className?: string
    // other props
  }
  
  export function Component({ className, ...props }: ComponentProps) {
    return <div className={cn("base-classes", className)} {...props} />
  }
  ```

### Key Dependencies
- **UI Components**: @radix-ui/react-* for accessible components
- **Icons**: lucide-react for consistent iconography
- **Utilities**: clsx, tailwind-merge, class-variance-authority

## Important Notes

1. **Path Aliases**: Use `@/` for imports from `src/` directory
2. **No Test Setup**: Currently no testing framework configured
3. **Git Workflow**: Always check git status before committing; uncommitted changes may exist
4. **Tailwind v4**: Uses new import syntax (`@import "tailwindcss"`) not the old `@tailwind` directives

## Page Structure

### Implemented Pages
- **Home (`/`)**: Hero section, event overview, featured speakers preview, agenda highlights
- **Speakers (`/speakers`)**: Grid layout of keynote speakers with profiles (if implemented)
- **Agenda (`/agenda`)**: Timeline view with session details and filtering (if implemented)

### Component Organization
Based on the project plan, components should be organized as:
- `/components/navigation/`: TopNavigation, MobileMenu, NavLink components
- `/components/speakers/`: SpeakerCard, SpeakerGrid, SpeakerProfile
- `/components/agenda/`: AgendaTimeline, SessionCard, AgendaFilter
- `/components/event/`: EventHero, EventInfo, EventStats

## Development Phases

When implementing new features, follow the planned development timeline:
1. **Navigation**: Set up navigation structure and basic layouts
2. **Home Page**: Implement with event information and highlights
3. **Speakers Page**: Develop speaker profiles and grid layout
4. **Agenda Page**: Create timeline functionality with filtering
5. **Responsive Design**: Mobile optimization
6. **Polish**: Testing, accessibility, and performance

## Design Principles

- **Mobile-First**: Start responsive design from mobile viewports
- **Accessibility**: Use Radix UI primitives for WCAG 2.1 AA compliance
- **Performance**: Leverage Next.js optimization features
- **Type Safety**: Full TypeScript implementation for all components

## Event-Specific Features

Current implementation includes:
- Hero section with event branding
- Agenda with tabbed week navigation
- Keynote speakers showcase
- Registration information
- Networking opportunities
- Past events gallery

Future enhancements planned:
- Personal agenda builder
- Push notifications for sessions
- Social sharing capabilities