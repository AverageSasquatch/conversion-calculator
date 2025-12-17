# Agent Notes - Conversion Calculator Website

## Project Summary
Building a minimal viable website (MVW) for unit conversions. Focus on SEO-optimized individual converter pages to capture organic search traffic for "X to Y" conversion queries.

---

## Critical Information

### Tech Stack Decision
- **Next.js 14 with App Router** - Chosen for SSR/SSG capabilities (essential for SEO)
- **TypeScript** - Type safety for conversion formulas
- **Tailwind CSS** - Rapid UI development matching design system

### Key Design Decisions
1. Each converter has its own dedicated page for SEO (not SPA-style)
2. URL structure: `/{category}/{from-unit}-to-{to-unit}`
3. Bidirectional conversion on each page (user can swap units)
4. Real-time conversion (no "Convert" button needed for MVW)

---

## User Preferences
- Minimalist UI approach
- Fast performance prioritized
- SEO-first development
- Non-intrusive monetization (placeholder only for MVW)

---

## Project Structure
```
ConversionWebsite/
├── .cursor/           # Agent memory and tools
│   ├── docs/          # PRD and technical specs
│   ├── notes/         # Session notes and checklists
│   ├── rules/         # Coding rules
│   └── tools/         # Utility scripts
├── app/               # Next.js App Router pages
│   ├── layout.tsx     # Root layout
│   ├── page.tsx       # Homepage
│   ├── weight/        # Weight converter pages
│   ├── length/        # Length converter pages
│   ├── temperature/   # Temperature converter pages
│   └── volume/        # Volume converter pages
├── components/        # Reusable React components
├── lib/               # Utilities and conversion logic
└── public/            # Static assets
```

---

## Conversion Formulas Reference
| Conversion | Formula |
|------------|---------|
| lb → kg | × 0.453592 |
| oz → g | × 28.3495 |
| in → cm | × 2.54 |
| ft → m | × 0.3048 |
| °F → °C | (value - 32) × 5/9 |
| L → mL | × 1000 |
| gal → L | × 3.78541 |

---

## Key Files to Reference
- `PRD.md` - Full product requirements
- `wireframes.png` - UI wireframes (3 layouts: desktop home, converter page, mobile)
- `.cursor/notes/project_checklist.md` - Progress tracking

---

## Next Session Starting Point
Continue from wherever the checklist is at. Always check `project_checklist.md` first.

---

## Important Notes
- Wireframe shows 3 layouts: 
  1. Desktop homepage (1669 lrands aspect)
  2. Desktop converter page (1669 aspect)
  3. Mobile view (9:16 vertical)
- Ad placements: Top banner, right sidebar (desktop), bottom (mobile)
- Category cards: Weight, Length, Temperature, Volume, From (?)

---

## Blog Feature

### Routes
- `/blog` - Blog listing page (all articles)
- `/blog/[slug]` - Individual blog post
- `/admin` - Admin login page
- `/admin/blog` - Blog management dashboard
- `/admin/blog/new` - Create new post
- `/admin/blog/[id]` - Edit existing post

### Admin Authentication
- Default password: `admin123` (change via ADMIN_PASSWORD env variable)
- Cookie-based session (24-hour expiry)
- Protected API routes at `/api/admin/*`

### Data Storage
- Blog posts stored in `/data/blog/posts.json`
- File-based storage (no database required)
- Supports markdown content

### API Endpoints
- `POST /api/admin/login` - Login
- `POST /api/admin/logout` - Logout
- `GET /api/admin/posts` - Get all posts
- `POST /api/admin/posts` - Create post
- `GET /api/admin/posts/[id]` - Get single post
- `PUT /api/admin/posts/[id]` - Update post
- `DELETE /api/admin/posts/[id]` - Delete post
