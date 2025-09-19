# Storyism - IP Sovereignty On-Chain

A modern, responsive website for the Storyism community movement, built with Next.js 15 and featuring a stunning dark theme design system.

![Storyism Website](https://img.shields.io/badge/Status-Active%20Development-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-15.5.3-black)
![Tailwind](https://img.shields.io/badge/Tailwind-v4-38bdf8)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)

## 🌟 Features

- **🎨 Modern Design System** - Dark theme with purple/gold aesthetic
- **📱 Fully Responsive** - Mobile-first design approach  
- **⚡ Performance Optimized** - Built with Next.js 15 and Turbopack
- **🔍 SEO Ready** - Server-side rendering and meta optimization
- **📝 Blog System** - Slug-based routing with rich content
- **🎯 Accessibility** - WCAG compliant design patterns
- **🚀 Type Safe** - Full TypeScript implementation

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## 🏗️ Tech Stack

- **Framework:** Next.js 15.5.3 with App Router
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Build Tool:** Turbopack
- **Deployment:** Vercel-ready

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Homepage  
│   ├── globals.css     # Global styles
│   ├── manifesto/      # Manifesto page
│   └── blog/           # Blog system
├── components/          # React components
│   ├── Header.tsx      # Navigation
│   ├── GlobalFooter.tsx # Footer
│   └── sections/       # Homepage sections
└── lib/                # Utilities and data
    └── articles.ts     # Blog data
```

## 🎨 Design System

### Color Palette
- **Deep Purple:** `#1a0b2e` (Primary background)
- **Gold:** `#fbbf24` (Accent color)  
- **Purple-Blue Gradient:** `#2d1b4e → #1e3a8a`

### Typography
- **Headings:** Space Grotesk (Google Fonts)
- **Body:** Inter (Google Fonts)
- **Code:** IBM Plex Mono (Google Fonts)

### Components
- Glassmorphism cards with subtle borders
- Gradient buttons with hover effects
- Full-width sections with constrained content
- Responsive grid layouts

## 📝 Content Management

### Adding Blog Posts

Edit `src/lib/articles.ts`:

```typescript
{
    id: 7,
    slug: "new-post-slug",
    title: "Your New Post",
    excerpt: "Post description...",
    content: `<h2>Content in HTML</h2>`,
    publishedAt: "2025-01-15",
    readTime: "5 min read",
    tags: ["blockchain", "ip"]
}
```

Posts automatically appear at `/blog/new-post-slug`

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Development server
npm run build        # Production build
npm run start        # Production server  
npm run lint         # Code linting
npm run type-check   # TypeScript checking
```

### Component Development

Follow established patterns:

```tsx
export default function NewSection() {
    return (
        <section className="section-padding gradient-purple-blue">
            <div className="w-full px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    {/* Your content */}
                </div>
            </div>
        </section>
    );
}
```

## 📐 Design Guidelines

### Layout Patterns
- Full-width sections with gradient backgrounds
- Constrained content containers (max-w-7xl)
- Responsive padding (px-6 lg:px-12)
- Card-based content organization

### Styling Approach
- Tailwind utility classes for consistency
- Custom CSS components in globals.css
- Mobile-first responsive design
- Dark theme considerations

## 🚀 Deployment

### Vercel (Recommended)
1. Connect GitHub repository
2. Auto-deploy on push
3. Zero configuration needed

### Manual Deployment
```bash
npm run build
npm start
```

## 🎯 Performance

- **Fast Builds:** Turbopack for instant hot reload
- **Optimized Images:** Next.js Image component  
- **Font Optimization:** Google Fonts with preload
- **CSS Purging:** Automatic unused CSS removal
- **Bundle Splitting:** Automatic code splitting

## 🛠️ Customization

### Modifying Colors
Update CSS variables in `src/app/globals.css`:

```css
@layer base {
  html, body {
    background-color: #your-color;
    color: #your-text-color;
  }
}
```

### Adding Pages
Create new directories in `src/app/`:

```tsx
// src/app/about/page.tsx
export default function AboutPage() {
    return <div>About content</div>;
}
```

## 📖 Documentation

Comprehensive documentation is available in the [`docs/`](./docs/) directory:

- **[📚 Documentation Index](./docs/README.md)** - Start here for navigation
- **[🚀 Development Guide](./docs/DEVELOPMENT.md)** - Complete setup and development instructions  
- **[⚡ Quick Reference](./docs/QUICK-REFERENCE.md)** - Handy reference for common tasks

### Quick Links
- [Getting Started](./docs/DEVELOPMENT.md#-quick-start)
- [Component Patterns](./docs/DEVELOPMENT.md#-component-patterns)
- [Design System](./docs/DEVELOPMENT.md#-design-system)
- [CSS Classes](./docs/QUICK-REFERENCE.md#-css-classes-quick-reference)

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🌐 Links

- **Live Site:** [Coming Soon]
- **Story Protocol:** [https://storyprotocol.xyz](https://storyprotocol.xyz)
- **Documentation:** [📚 docs/](./docs/)

---

<div align="center">

**Built with ❤️ for the Storyism community**

[📚 Documentation](./docs/) • [🚀 Development Guide](./docs/DEVELOPMENT.md) • [⚡ Quick Reference](./docs/QUICK-REFERENCE.md)

</div>


