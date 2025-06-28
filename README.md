# GovTech DesignFest

A modern web application built with **Next.js 15**, **Tailwind CSS v4**, and **shadcn/ui** components. This project demonstrates the latest in web development technologies with a focus on performance, accessibility, and developer experience.

## 🚀 Tech Stack

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - Latest React with enhanced features
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework with new CSS-first configuration
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful and accessible React components
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible components

## ✨ Features

- 🎨 **Modern Design**: Clean, responsive UI with beautiful components
- 🌙 **Dark Mode Ready**: CSS variables-based theming system
- ♿ **Accessible**: Built with accessibility in mind using Radix UI primitives
- 🚀 **Performance**: Optimized build with Next.js 15 and Tailwind CSS v4
- 📱 **Responsive**: Mobile-first design that works on all devices
- 🔧 **Developer Experience**: TypeScript, ESLint, and modern tooling
- 🎯 **Production Ready**: Configured for deployment and scaling

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd govtech-designfest
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
govtech-designfest/
├── src/
│   ├── app/
│   │   ├── globals.css          # Tailwind CSS v4 configuration
│   │   ├── layout.tsx           # Root layout component
│   │   └── page.tsx             # Home page
│   ├── components/
│   │   └── ui/                  # shadcn/ui components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── badge.tsx
│   │       └── ...
│   └── lib/
│       └── utils.ts             # Utility functions
├── public/                      # Static assets
├── components.json              # shadcn/ui configuration
├── next.config.mjs             # Next.js configuration
├── package.json                # Dependencies and scripts
├── postcss.config.mjs          # PostCSS configuration for Tailwind v4
└── tsconfig.json               # TypeScript configuration
```

## 🎨 Tailwind CSS v4 Features

This project uses **Tailwind CSS v4** with the new CSS-first configuration approach:

- **@theme directive**: Configure design tokens directly in CSS
- **@import "tailwindcss"**: New import syntax (no more @tailwind directives)
- **Improved performance**: Faster builds and smaller bundles
- **CSS variables**: Built-in support for CSS custom properties
- **Native cascade layers**: Better CSS organization

### Custom Theme Configuration

The theme is configured in `src/app/globals.css` using the `@theme` directive:

```css
@theme {
  --color-primary: 221.2 83.2% 53.3%;
  --color-secondary: 210 40% 96%;
  --radius: 0.5rem;
  /* ... more theme variables */
}
```

## 🧩 shadcn/ui Components

The project includes several pre-installed shadcn/ui components:

- **Button** - Various button styles and sizes
- **Card** - Container component with header, content, and footer
- **Badge** - Small status indicators
- **Input** - Form input fields
- **Textarea** - Multi-line text input
- **Select** - Dropdown selection component
- **Checkbox** - Checkbox input with custom styling
- **Switch** - Toggle switch component

### Adding New Components

To add more shadcn/ui components:

```bash
npx shadcn@latest add [component-name]
```

For example:
```bash
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
npx shadcn@latest add toast
```

## 🎯 Available Scripts

- **`npm run dev`** - Start development server
- **`npm run build`** - Build for production
- **`npm run start`** - Start production server
- **`npm run lint`** - Run ESLint

## 📦 Building for Production

```bash
npm run build
npm run start
```

## 🚀 Deployment

This project is ready to deploy to:

- **[Vercel](https://vercel.com/)** (Recommended for Next.js)
- **[Netlify](https://netlify.com/)**
- **[Railway](https://railway.app/)**
- **Any platform supporting Node.js**

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

## 🎨 Customization

### Styling

- Modify theme variables in `src/app/globals.css`
- Customize component styles in their respective files
- Add custom utilities using Tailwind's `@utility` directive

### Components

- Extend shadcn/ui components in `src/components/ui/`
- Create custom components in `src/components/`
- Use the `cn()` utility for className merging

## 📚 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [React 19 Documentation](https://react.dev/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

**Built with ❤️ for GovTech DesignFest** 