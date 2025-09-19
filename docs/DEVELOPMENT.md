# Storyism Website Development Guide

A comprehensive guide for developing the Storyism website - a community movement for IP sovereignty on-chain.

## 🏗️ Project Overview

**Tech Stack:**
- **Framework:** Next.js 15.5.3 with App Router
- **Build Tool:** Turbopack (Next.js's fast bundler)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Deployment:** Ready for Vercel/Netlify

**Design System:**
- **Theme:** Dark theme with Deep Purple backgrounds
- **Colors:** Deep Purple (#1a0b2e), Gold (#fbbf24), Purple-Blue gradients
- **Typography:** Space Grotesk (headings), Inter (body), IBM Plex Mono (code)
- **Architecture:** Component-based with reusable sections

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation
```bash
# Clone the repository
git clone <your-repo-url>
cd storyism

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:3000 (or 3001 if 3000 is in use)
```

### Available Scripts
```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout with fonts and global structure
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles and design system
│   ├── manifesto/
│   │   └── page.tsx        # Manifesto page
│   └── blog/
│       ├── page.tsx        # Blog listing page
│       └── [slug]/
│           └── page.tsx    # Individual blog post page
├── components/
│   ├── Header.tsx          # Main navigation header
│   ├── GlobalFooter.tsx   # Site footer
│   └── sections/           # Homepage sections
│       ├── Hero.tsx
│       ├── ManifestoPreview.tsx
│       ├── WhyStoryism.tsx
│       ├── HowToContribute.tsx
│       ├── CommunityAgents.tsx
│       ├── Ecosystem.tsx
│       └── KnowledgeHub.tsx
└── lib/
    └── articles.ts         # Blog data and utilities
```

## 🎨 Design System

### Color Palette
```css
/* Primary Colors */
--deep-purple: #1a0b2e    /* Main background */
--purple: #2d1b4e         /* Secondary background */
--blue: #1e3a8a          /* Gradient accent */
--gold: #fbbf24          /* Primary accent color */
--gold-bright: #fcd34d   /* Hover states */

/* Text Colors */
--white: #ffffff         /* Primary headings */
--light-gray: #e5e7eb    /* Body text */
--gray: #9ca3af         /* Secondary text */
```

### Typography Scale
```css
/* Headings (Space Grotesk) */
h1: 3rem (48px)          /* Main titles */
h2: 2rem (32px)          /* Section titles */
h3: 1.5rem (24px)        /* Subsection titles */

/* Body Text (Inter) */
text-xl: 1.25rem (20px)  /* Large body text */
text-lg: 1.125rem (18px) /* Regular body text */
text-base: 1rem (16px)   /* Small body text */
```

### Component Classes
```css
/* Buttons */
.btn-primary          /* Gold button */
.btn-secondary        /* Gold outline button */

/* Cards */
.card-dark           /* Dark glassmorphism card */

/* Layout */
.section-padding     /* Standard section spacing (6rem) */
.gradient-hero       /* Hero background gradient */
.gradient-purple-blue /* Section background gradient */

/* Typography */
.font-heading        /* Space Grotesk font */
.font-body          /* Inter font */
.font-mono          /* IBM Plex Mono font */
.text-gradient      /* Gold gradient text */

/* Content */
.article-content    /* Blog post styling */
.prose-dark         /* Dark theme prose */
```

## 🧩 Component Development

### Creating New Sections
1. Create a new file in `src/components/sections/`
2. Follow the established pattern:

```tsx
export default function YourSection() {
    return (
        <section className="section-padding bg-deep-purple">
            <div className="w-full px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-16 text-gold uppercase tracking-wide">
                        Your Section Title
                    </h2>
                    
                    {/* Your content */}
                    
                </div>
            </div>
        </section>
    );
}
```

3. Import and add to homepage in `src/app/page.tsx`

### Component Guidelines
- **Use semantic HTML:** `<section>`, `<article>`, `<header>`, `<nav>`
- **Responsive design:** Always include mobile-first responsive classes
- **Accessibility:** Include proper ARIA labels and alt text
- **Performance:** Use Next.js `Image` component for images
- **Consistency:** Follow the established class naming patterns

### Layout Patterns
```tsx
/* Full-width section with constrained content */
<section className="section-padding gradient-purple-blue">
    <div className="w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
            {/* Content */}
        </div>
    </div>
</section>

/* Card-based content */
<div className="card-dark">
    <h3 className="font-heading text-2xl font-bold mb-4 text-gold">
        Card Title
    </h3>
    <p className="text-light-gray">
        Card content...
    </p>
</div>

/* Button group */
<div className="flex flex-col sm:flex-row gap-6 justify-center">
    <button className="btn-primary">Primary Action</button>
    <button className="btn-secondary">Secondary Action</button>
</div>
```

## 📝 Content Management

### Blog System
The blog uses a simple file-based system with slug-based URLs:

#### Adding New Blog Posts
1. Add article data to `src/lib/articles.ts`:

```typescript
{
    id: 7,
    slug: "your-post-slug",
    title: "Your Post Title",
    excerpt: "Brief description of your post...",
    content: `
        <h2>Your Post Content</h2>
        <p>Write your content in HTML...</p>
    `,
    publishedAt: "2025-01-15",
    readTime: "5 min read",
    tags: ["tag1", "tag2"]
}
```

2. The post will automatically be available at `/blog/your-post-slug`

#### Blog Utilities
```typescript
// Get all articles
const articles = getAllArticles();

// Get single article by slug
const article = getArticleBySlug('your-post-slug');

// Get articles by tag
const taggedArticles = getArticlesByTag('blockchain');
```

### Manifesto Content
Edit the manifesto content directly in `src/app/manifesto/page.tsx`. The page uses the same design system and includes:
- Hero section with gradient background
- Card-based content sections
- Responsive typography
- Call-to-action buttons

## 🎯 Development Workflows

### Adding New Pages
1. Create directory in `src/app/` (e.g., `about/`)
2. Add `page.tsx` file with your component
3. Follow Next.js App Router conventions
4. Use the established layout and styling patterns

```tsx
// src/app/about/page.tsx
export default function AboutPage() {
    return (
        <div className="min-h-screen bg-deep-purple">
            <section className="gradient-hero section-padding">
                {/* Page content */}
            </section>
        </div>
    );
}
```

### Styling Guidelines
1. **Use Tailwind classes** for styling
2. **Custom CSS** only in `globals.css` for reusable components
3. **Responsive design** with mobile-first approach
4. **Dark theme** considerations for all components
5. **Performance** - avoid large CSS bundles

### Code Organization
```
// Component structure
components/
├── ui/              # Reusable UI components (buttons, cards, etc.)
├── sections/        # Page sections
├── layout/          # Layout components (header, footer)
└── features/        # Feature-specific components

// Utility structure
lib/
├── utils.ts         # General utilities
├── constants.ts     # App constants
├── types.ts         # TypeScript types
└── data/           # Static data files
```

## 🔧 Customization

### Modifying the Design System
1. **Colors:** Update CSS variables in `globals.css`
2. **Typography:** Change font imports in `layout.tsx` and update CSS classes
3. **Components:** Modify component classes in `globals.css`
4. **Spacing:** Adjust `.section-padding` and other spacing utilities

### Adding New Features
1. **API Routes:** Add to `src/app/api/` directory
2. **Dynamic Pages:** Use `[param]` directory structure
3. **Client Components:** Add `'use client'` directive when needed
4. **Server Components:** Default behavior, good for SEO

### Environment Configuration
Create `.env.local` for environment variables:
```bash
# Example variables
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Configure environment variables
4. Deploy automatically on push

### Manual Build
```bash
# Build for production
npm run build

# Start production server
npm start

# Or export static site
npm run build && npm run export
```

### Performance Optimization
- **Images:** Use Next.js `Image` component
- **Fonts:** Already optimized with Google Fonts preload
- **CSS:** Tailwind automatically purges unused CSS
- **Bundle:** Turbopack provides fast builds and hot reload

## 🐛 Troubleshooting

### Common Issues

**CSS not loading:**
- Clear `.next` cache: `rm -rf .next`
- Restart dev server: `npm run dev`

**TypeScript errors:**
- Run type check: `npm run type-check`
- Check import paths and component props

**Build failures:**
- Check all components are properly exported
- Verify no unused imports
- Ensure proper TypeScript types

**Font loading issues:**
- Check Google Fonts link in `layout.tsx`
- Verify font-family names in CSS

### Development Tips
1. **Hot reload** works automatically with Turbopack
2. **Type safety** - leverage TypeScript for better DX
3. **Component props** - always type your props interfaces
4. **Performance** - use React DevTools to identify bottlenecks
5. **Accessibility** - test with screen readers and keyboard navigation

## 📚 Resources

### Documentation
- [Next.js 15 Docs](https://nextjs.org/docs)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs/)

### Design Resources
- [Space Grotesk Font](https://fonts.google.com/specimen/Space+Grotesk)
- [Inter Font](https://fonts.google.com/specimen/Inter)
- [Color Palette Tool](https://coolors.co/)

### Development Tools
- [VS Code](https://code.visualstudio.com/)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools)

---

## 🎉 Ready to Build!

You now have everything you need to continue developing the Storyism website. The foundation is solid with:
- ✅ Modern Next.js 15 setup with Turbopack
- ✅ Complete design system with dark theme
- ✅ Responsive component library
- ✅ Blog system with slug-based routing
- ✅ Full-width aesthetic layout
- ✅ TypeScript for type safety
- ✅ Performance optimizations

Happy coding! 🚀
