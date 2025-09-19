# Quick Reference Guide

## 🎯 Common Development Tasks

### Adding a New Homepage Section

1. **Create the component:**
```tsx
// src/components/sections/YourSection.tsx
export default function YourSection() {
    return (
        <section className="section-padding gradient-purple-blue">
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

2. **Add to homepage:**
```tsx
// src/app/page.tsx
import YourSection from "@/components/sections/YourSection";

export default function HomePage() {
    return (
        <div className="space-y-16">
            {/* Other sections */}
            <YourSection />
        </div>
    );
}
```

### Adding a New Page

1. **Create page directory:**
```bash
mkdir src/app/your-page
```

2. **Create page component:**
```tsx
// src/app/your-page/page.tsx
export default function YourPage() {
    return (
        <div className="min-h-screen gradient-hero">
            <section className="section-padding">
                <div className="w-full px-6 lg:px-12">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="font-heading text-6xl md:text-8xl font-bold text-center mb-8 text-gradient uppercase">
                            Your Page
                        </h1>
                        {/* Page content */}
                    </div>
                </div>
            </section>
        </div>
    );
}
```

3. **Add to navigation:**
```tsx
// src/components/Header.tsx
<Link href="/your-page" className="nav-link">
    Your Page
</Link>
```

### Adding a Blog Post

```typescript
// src/lib/articles.ts
{
    id: 7, // Next available ID
    slug: "your-post-slug", // URL-friendly version
    title: "Your Post Title",
    excerpt: "Brief description shown in listings...",
    content: `
        <h2>Your Content</h2>
        <p>Write your content in HTML format...</p>
        <blockquote>Use blockquotes for quotes</blockquote>
        <ul>
            <li>List items work too</li>
        </ul>
    `,
    publishedAt: "2025-01-15", // YYYY-MM-DD format
    readTime: "5 min read",
    tags: ["blockchain", "ip", "your-tags"]
}
```

## 🎨 CSS Classes Quick Reference

### Layout Classes
```css
/* Sections */
.section-padding          /* 6rem top/bottom padding */
.gradient-hero           /* Hero background gradient */
.gradient-purple-blue    /* Section background gradient */
.bg-deep-purple         /* Solid deep purple background */

/* Containers */
.w-full                 /* Full width */
.max-w-7xl             /* Max width constraint */
.mx-auto               /* Center horizontally */
.px-6 lg:px-12        /* Responsive horizontal padding */

/* Spacing */
.space-y-16           /* Vertical spacing between children */
.mb-16                /* Margin bottom 4rem */
.gap-8                /* Grid/flex gap 2rem */
```

### Typography Classes
```css
/* Headings */
.font-heading                          /* Space Grotesk font */
.text-4xl md:text-5xl                 /* Responsive font size */
.font-bold                            /* Bold weight */
.text-center                          /* Center align */
.text-gold                            /* Gold color */
.text-white                           /* White color */
.text-light-gray                      /* Light gray color */
.uppercase                            /* Uppercase transform */
.tracking-wide                        /* Letter spacing */

/* Body Text */
.font-body                            /* Inter font */
.text-xl md:text-2xl                  /* Responsive body size */
.leading-relaxed                      /* Line height */

/* Special */
.text-gradient                        /* Gold gradient text */
.font-mono                           /* Monospace font */
```

### Component Classes
```css
/* Buttons */
.btn-primary                         /* Gold button */
.btn-secondary                       /* Gold outline button */

/* Cards */
.card-dark                          /* Dark glassmorphism card */

/* Grid */
.grid md:grid-cols-2 lg:grid-cols-4  /* Responsive grid */
.flex flex-col sm:flex-row           /* Responsive flex */
```

## 🌈 Color Variables

```css
/* Use these in custom CSS */
background-color: #1a0b2e;          /* Deep purple */
background-color: #2d1b4e;          /* Purple */
background-color: #1e3a8a;          /* Blue */
color: #fbbf24;                     /* Gold */
color: #fcd34d;                     /* Gold bright */
color: #ffffff;                     /* White */
color: #e5e7eb;                     /* Light gray */
color: #9ca3af;                     /* Gray */

/* Gradients */
background: linear-gradient(135deg, #1a0b2e 0%, #2d1b4e 50%, #1e3a8a 100%);
background: linear-gradient(135deg, #2d1b4e 0%, #1e3a8a 100%);
background: linear-gradient(135deg, #fbbf24 0%, #fcd34d 100%);
```

## 🔧 Development Commands

### Start Development
```bash
npm run dev              # Start with Turbopack
npm run dev -- --port 3001  # Custom port
```

### Building
```bash
npm run build           # Production build
npm run start          # Start production server
npm run lint           # Run linting
npm run type-check     # TypeScript check
```

### Debugging
```bash
rm -rf .next           # Clear build cache
npm run dev            # Restart server
```

## 📱 Responsive Design Patterns

### Breakpoints
```css
/* Mobile first approach */
.text-base             /* Default mobile */
.md:text-lg           /* 768px+ tablets */
.lg:text-xl           /* 1024px+ laptops */
.xl:text-2xl          /* 1280px+ desktops */
```

### Common Responsive Patterns
```tsx
{/* Responsive grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

{/* Responsive flex */}
<div className="flex flex-col sm:flex-row gap-6">

{/* Responsive text */}
<h1 className="text-4xl md:text-6xl lg:text-8xl">

{/* Responsive spacing */}
<div className="px-4 md:px-8 lg:px-12">
```

## 🎯 Best Practices

### Component Structure
1. Keep components small and focused
2. Use TypeScript interfaces for props
3. Follow the established naming patterns
4. Include responsive classes
5. Test on mobile devices

### Styling Guidelines
1. Use Tailwind utility classes
2. Avoid custom CSS unless reusable
3. Follow mobile-first responsive design
4. Maintain consistent spacing
5. Use the established color palette

### Performance Tips
1. Use Next.js Image component for images
2. Implement proper SEO meta tags
3. Keep components as server components when possible
4. Use dynamic imports for heavy components
5. Optimize fonts and assets

## 🔗 Useful Links

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Next.js 15 Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React DevTools](https://chrome.google.com/webstore/detail/react-developer-tools)

---

Keep this guide handy for quick reference during development! 🚀
