# MESA Website Roadmap

## Current Status

**Phase 3: Admin CMS** - COMPLETE ✓

Admin portal is fully functional with:
- Google OAuth login restricted to @mesamadisonva.org domain
- Role-based access (ADMIN/STAFF)
- Content editor, testimonial moderation, slideshow manager
- Resources, users, and settings management (ADMIN only)

**Google OAuth**: Configured and tested (Feb 1, 2025)
- Project: `mesa-website-admin-sso` in Google Cloud Console
- First admin user created: itsupport@mesamadisonva.org

## Phases

### Phase 1: Foundation [COMPLETE]
- [x] Next.js 14 + TypeScript + Tailwind CSS
- [x] Prisma schema (User, ContentBlock, Testimonial, SlideshowImage, Resource, SiteSetting)
- [x] NextAuth.js with Google OAuth + role system
- [x] Basic layout (Header, Footer, navigation)
- [x] Homepage skeleton
- [x] Railway deployment (https://mesa-website-production.up.railway.app)

### Phase 2: Public Pages [COMPLETE - SCAFFOLD]
- [x] About Us — history, mission/vision, core values
- [x] Food Pantry — hours, location, eligibility, what's provided
- [x] Emergency Services — types of assistance, how to apply
- [x] Resources — static community resources + database-driven section
- [x] Volunteer & Donate — donation options, food drives, volunteer opportunities
- [x] Contact — address, phone, email, hours, Google Maps embed, directions
- [x] Stories — displays approved testimonials from database
- [x] Stories/Submit — client submission form with permission checkboxes
- [x] Testimonials API — POST/GET endpoints at /api/testimonials

**Note:** All pages use placeholder/estimated content. Actual content needs to come from MESA.

### Phase 3: Admin CMS [COMPLETE]
- [x] Google OAuth login flow with @mesamadisonva.org domain restriction
- [x] Admin dashboard at /admin with statistics and quick actions
- [x] Content editor interface at /admin/content
- [x] Testimonials moderation queue at /admin/testimonials
- [x] Slideshow manager at /admin/slideshow
- [x] Resources manager at /admin/resources (ADMIN only)
- [x] User management at /admin/users (ADMIN only)
- [x] Site settings at /admin/settings (ADMIN only)
- [ ] Seed initial content from existing mesamadisonva.org site
- [ ] Connect public pages to ContentBlock database

### Phase 4: Dynamic Features [NEXT]
- [ ] Photo upload to Google Drive for testimonials (5 MB limit)
- [ ] Homepage slideshow integration with frontend
- [ ] Google Calendar embed on Contact page
- [ ] PayPal donation button integration
- [ ] Amazon Wishlist links

### Phase 5: Launch Prep
- [ ] Performance optimization
- [ ] SEO (meta tags, Open Graph, sitemap.xml)
- [ ] Security review
- [ ] Staff documentation / training guide
- [ ] DNS cutover (mesamadisonva.org → Railway)

## Page Inventory

| Route | Status | Notes |
|-------|--------|-------|
| `/` | Scaffold | Homepage with hero, mission, services preview |
| `/about` | Scaffold | History, mission, vision, values, team placeholder |
| `/food-pantry` | Scaffold | Hours, location, items provided, eligibility |
| `/emergency-services` | Scaffold | Assistance types, application process |
| `/resources` | Scaffold | Static resources + database resources |
| `/stories` | Functional | Displays approved testimonials from DB |
| `/stories/submit` | Functional | Form submits to database |
| `/volunteer-donate` | Scaffold | Donation info, volunteer opportunities |
| `/contact` | Scaffold | Contact info, map, calendar placeholder |
| `/admin` | Complete | Dashboard with stats and quick actions |
| `/admin/login` | Complete | Google OAuth login |
| `/admin/content` | Complete | CMS content block editor |
| `/admin/testimonials` | Complete | Moderation queue with approve/reject |
| `/admin/slideshow` | Complete | Image manager with activate/delete |
| `/admin/resources` | Complete | External links manager (ADMIN only) |
| `/admin/users` | Complete | User role management (ADMIN only) |
| `/admin/settings` | Complete | Site configuration (ADMIN only) |

## Items Needed From MESA

- [ ] Google Calendar embed URL
- [ ] PayPal donation button/link URL
- [ ] Amazon Wishlist URLs
- [ ] Logo file (high resolution PNG or SVG)
- [ ] Google Drive folder ID (for image uploads - slideshow, testimonials)
- [x] ~~Initial ADMIN user email addresses~~ (itsupport@mesamadisonva.org is ADMIN)
- [ ] Review of page content for accuracy
- [ ] Any additional resources to list on Resources page

## Session Notes

### Feb 1, 2025 - Session 2: Google OAuth Setup
**Completed:**
- Configured Google Cloud project `mesa-website-admin-sso`
- Created OAuth 2.0 credentials with redirect URIs for localhost and Railway
- Connected to Railway PostgreSQL database
- Ran initial `prisma db push` to create tables
- Tested login flow - first user (itsupport@mesamadisonva.org) auto-promoted to ADMIN

**Environment configured:**
- `.env` file with DATABASE_URL, NEXTAUTH_SECRET, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET
- Railway variables already configured for production

---

### Feb 1, 2025 - Session 1: Admin Portal Build
Built complete admin portal with the following components:

**Layout & Auth:**
- Admin layout with sidebar navigation ([src/app/admin/(authenticated)/layout.tsx](src/app/admin/(authenticated)/layout.tsx))
- Login page with Google OAuth ([src/app/admin/login/page.tsx](src/app/admin/login/page.tsx))
- Session provider wrapper for client components
- Route groups: `(public)` for main site, `(authenticated)` for protected admin

**Admin Pages:**
- Dashboard with stats cards and pending testimonials list
- Content editor with page-grouped blocks and save indicators
- Testimonials moderation with tabs (Pending/Approved/Rejected) and review modal
- Slideshow manager with add/toggle/delete functionality
- Resources manager with category grouping (ADMIN only)
- User management with role switching (ADMIN only)
- Site settings with initialize defaults feature (ADMIN only)

**API Endpoints:**
- `/api/admin/content/[id]` - PATCH content blocks
- `/api/admin/testimonials/[id]` - PATCH/DELETE testimonials
- `/api/admin/slideshow` - POST new images
- `/api/admin/slideshow/[id]` - PATCH/DELETE images
- `/api/admin/resources` - POST new resources
- `/api/admin/resources/[id]` - PATCH/DELETE resources
- `/api/admin/users/[id]` - PATCH user roles
- `/api/admin/settings/[id]` - PATCH settings
- `/api/admin/settings/initialize` - POST to create default settings

### File Structure Added
```
src/app/
├── (public)/                    # Public pages route group
│   └── layout.tsx               # Header/Footer wrapper
├── admin/
│   ├── layout.tsx               # Admin root layout (metadata only)
│   ├── login/
│   │   ├── layout.tsx           # Bypass auth check
│   │   └── page.tsx             # Google OAuth login
│   └── (authenticated)/
│       ├── layout.tsx           # Auth check + sidebar/header
│       ├── page.tsx             # Dashboard
│       ├── content/page.tsx
│       ├── testimonials/page.tsx
│       ├── slideshow/page.tsx
│       ├── resources/page.tsx
│       ├── users/page.tsx
│       └── settings/page.tsx
└── api/admin/                   # Admin API routes

src/components/
├── admin/
│   ├── AdminSidebar.tsx
│   ├── AdminHeader.tsx
│   ├── ContentEditor.tsx
│   ├── TestimonialList.tsx
│   ├── TestimonialModal.tsx
│   ├── SlideshowManager.tsx
│   ├── ResourcesManager.tsx
│   ├── UsersManager.tsx
│   └── SettingsManager.tsx
└── providers/
    └── SessionProvider.tsx
```

### To Test Admin ✓ COMPLETE
Google OAuth is configured and working. See Session 2 notes above.

---

## Next Steps (Phase 4)
1. Set up Google Drive API for image uploads
2. Connect public pages to read from ContentBlock database
3. Integrate slideshow on homepage
4. Add Google Drive upload for testimonial photos
5. Wire up site settings (PayPal, calendar embed, etc.) to frontend
