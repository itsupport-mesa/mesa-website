# MESA Website Roadmap

## Current Status

**Streams 1-3 Complete. Stream 4 substantially progressed.** Ready for launch prep once remaining blocked items are resolved.

**Last session**: Mar 2, 2026 — Hero background image, footer simplification, contact page cleanup.
**Next session**: Design review for remaining pages (stories, volunteer-donate, contact), remaining Stream 4 items + Stream 5 launch prep.

**Deployed**: https://mesa-website-production.up.railway.app
**Google OAuth**: Configured and tested — first admin: itsupport@mesamadisonva.org

---

## What's Done

### Stream 1: Assets & Branding [COMPLETE]
- [x] Color scheme updated from green to navy blue (#2B3A67) matching current Squarespace site
- [x] Tailwind config updated with full mesa.blue palette (50-900), mesa.gold (#d4a853), mesa.cream (#EDEDE3)
- [x] MESA letterhead logo in header (desktop + mobile)
- [x] Blue Ridge Area Food Bank logo in footer + food pantry page
- [x] MESA Donation QR Code on volunteer-donate page
- [x] All assets saved to `public/images/` (mesa-logo.jpg, blue-ridge-logo.png, mesa-qr-code.png)

### Stream 2: Seed Approved Content [COMPLETE]
- [x] Food Pantry page — Kristina's approved copy (operations, healthy options, hygiene, snack bags, annual stats: 16,200 individuals / 6,100 households)
- [x] Client Services page — renamed from "Emergency Services", approved copy, hours (Mon/Thu 10-1), operationsmanager@ email
- [x] Volunteer section — approved copy (flexibility, truck unloading, partner donors list)
- [x] Donation section — approved copy (since 1982, tax-deductible, PayPal/check)
- [x] Homepage — hours repositioned as "Normal Hours of Operation" with Food Pantry + Client Services side by side
- [x] USDA Non-Discrimination Statement — full text in Food Pantry page (collapsible) and Footer (collapsible)
- [x] Blue Ridge Area Food Bank logo + "Find a Local Pantry" link on Food Pantry page and Footer
- [x] Email addresses updated sitewide: info@ and operationsmanager@ only (no volunteer@)
- [x] Contact page renamed to "Let's Stay Connected!" with newsletter section stub
- [x] About page — Board of Directors and Staff listings added
- [x] Resources page — Blue Ridge pantry finder link added

### Stream 3: Links & Integrations [COMPLETE — except blocked items]
- [x] PayPal donation button wired up (https://www.paypal.com/donate/?hosted_button_id=4S7MUPTZN7MY4)
- [x] Amazon Wishlist links on Food Pantry + Volunteer-Donate pages (Food: https://a.co/9loRQsi, Hygiene: https://a.co/emf5k7G)
- [x] MESA Donation QR Code on volunteer-donate page
- [x] Facebook Page Plugin embed on homepage
- [x] Google Calendar embed on homepage (MESA calendar in Agenda mode)
- [ ] **BLOCKED** — Client Services Application link (need Google Form URL)
- [ ] **BLOCKED** — Newsletter signup link for "Around The Table With MESA" (need URL)

### Stream 4: New Features [SUBSTANTIAL PROGRESS]
- [x] Facebook feed embed on homepage (Facebook Page Plugin SDK)
- [x] FacebookFeed client component (`src/components/shared/FacebookFeed.tsx`)
- [x] Homepage slideshow carousel (Embla Carousel with autoplay, connected to SlideshowImage DB)
- [x] HomepageCarousel client component (`src/components/home/HomepageCarousel.tsx`)
- [x] Google Calendar embed on homepage (`src/components/shared/GoogleCalendar.tsx`)
- [x] Slideshow admin: Google Drive URL auto-conversion (share link → displayable URL)
- [x] Resources page visual redesign (icons per category, consistent layout)
- [x] Page-by-page design refresh — all public pages updated with consistent:
  - Lucide icons on all section headings (h-7 w-7 text-mesa-blue-600)
  - 2-column responsive grid layouts
  - Consistent spacing, card styles, and color usage
  - Emergency services page spacing fine-tuned
- [x] Footer updated with Client Services Hours section
- [x] About page: team photo cards with Google Drive image serving
- [x] Build fix: homepage try/catch + force-dynamic for Railway deployment
- [ ] Volunteer sign-up form (currently links to email; waiting for Google Form URL)
- [ ] Google Drive API setup for image uploads
- [ ] Photo upload to Google Drive for testimonials (5 MB limit)
- [ ] Board documents display (Google Drive folder integration)
- [ ] **BLOCKED** — Michelle Houser board member details (need title, photo, bio)
- [ ] **BLOCKED** — Board documents (need Google Drive folder link or files)
- [ ] **BLOCKED** — TEFAP income sheet + Link2Feed application presentation

### Admin Portal [COMPLETE — from earlier phases]
- [x] Google OAuth login with @mesamadisonva.org domain restriction
- [x] Dashboard, content editor, testimonials moderation, slideshow manager
- [x] Resources manager, user management, site settings (ADMIN only)
- [x] All admin components updated with navy blue color scheme
- [ ] Connect public pages to ContentBlock database (pages currently use hardcoded JSX)
- [ ] Seed initial ContentBlocks from current hardcoded content

---

## What's Left

### Blocked — Waiting on MESA

These items have TODO placeholders in the code and are ready to wire up once URLs/info are provided:

| Item | Where in Code | What's Needed |
|------|---------------|---------------|
| Client Services Application | `emergency-services/page.tsx` | Google Form URL (with file upload for bills) |
| Newsletter signup | `contact/page.tsx` | Signup link for "Around The Table With MESA" |
| Michelle Houser | `about/page.tsx` | Title, photo, bio for board listing |
| Staff photos | `about/page.tsx` | Photos for Catrina Lloyd (Pantry Manager) and Kristina Magel (Operations Manager) |
| Board documents | `about/page.tsx` | Google Drive folder link or document files |
| Google Drive folder ID | Admin slideshow/testimonials | Folder ID for image uploads |
| TEFAP/Link2Feed | TBD | How to present these on the site |

### Remaining Build Work (Stream 4)

1. **Volunteer Google Form** — Replace email CTA with Google Form link (once URL provided)
2. **Google Drive API** — Set up service account for image uploads (slideshow + testimonials)
3. **Board documents display** — Build Google Drive folder viewer for annual reports / IRS 990s
4. **ContentBlock integration** — Connect public pages to CMS database (currently hardcoded)
5. **Slideshow images** — Need to add actual images via `/admin/slideshow` (carousel component is built)

### Stream 5: Launch Prep

- [ ] Performance optimization (images, lazy loading)
- [ ] SEO (meta tags, Open Graph, sitemap.xml)
- [ ] Security review
- [ ] Staff documentation / training guide
- [ ] DNS cutover (mesamadisonva.org → Railway)

---

## Page Inventory

| Route | Status | Design Review | Notes |
|-------|--------|--------------|-------|
| `/` | **Live** | **Done** (Mar 2) | Hero with mountain bg image, hours/visit cards, mission/vision/values + carousel, food pantry/client services cards, Facebook feed + Google Calendar |
| `/about` | **Live** | **Done** (Feb 28) | History, mission, vision, values, team photos (Google Drive), board of directors grid. TODO: staff photos for Catrina & Kristina |
| `/food-pantry` | **Live** | **Done** (Feb 28) | 2-column layout, what we provide cards, help stock shelves, Blue Ridge partner, USDA statement |
| `/emergency-services` | **Live** | **Done** (Feb 28) | 2-column how we help/please note, types of assistance with icons, how to apply + steps. TODO: application link |
| `/resources` | **Live** | **Done** (Feb 28) | Icons per category heading, static + database resources, "Not Sure Where to Start?" |
| `/stories` | **Live** | Needs review | Displays approved testimonials from DB |
| `/stories/submit` | **Live** | Needs review | Submission form with permission checkboxes |
| `/volunteer-donate` | **Live** | Needs review | Donation copy, PayPal, QR code, Amazon wishlists, volunteer section. TODO: Google Form for volunteers |
| `/contact` | **Live** | Needs review | "Let's Stay Connected!", newsletter stub, contact info, map, directions. TODO: newsletter link |
| `/admin/*` | **Live** | N/A | Full admin portal with CMS, moderation, settings |

---

## Items to Request From MESA

Priority items — send to Kristina:

1. **Client Services Application** — Google Form URL (with file upload field for bill attachments)
2. **Newsletter signup link** — "Around The Table With MESA"
3. **Michelle Houser** — title, photo, and bio for board page
4. **Staff photos** — Headshots for Catrina Lloyd (Pantry Manager) and Kristina Magel (Operations Manager)
5. **Board documents** — shared Google Drive folder link (annual reports, IRS 990s)
6. **Google Drive folder ID** — for slideshow/testimonial image uploads
7. **Volunteer form** — Google Form URL (or confirm using email-based approach)
8. **Slideshow images** — Photos to add to homepage carousel via admin panel

Lower priority:
9. Any additional community resources for the Resources page
10. How to present TEFAP income sheet and Link2Feed application on the site

---

## Session Notes

### Mar 2, 2026 — Hero Image, Footer Cleanup, Contact Page

- Added mountain landscape background image (`hero-bg.png`) behind homepage hero section at 25% opacity
- Simplified footer from 3 columns (Contact / Quick Links / Hours+Partner) to 3 columns (Contact / Food Pantry Hours / Client Services Hours) — removed Quick Links nav and Blue Ridge partner logo
- Removed "Upcoming Events" placeholder section from contact page (calendar already lives on homepage)
- Updated roadmap status and session notes

---

### Feb 28, 2026 — Page-by-Page Design Refresh + New Components

Full design refresh across all public pages with consistent styling patterns:

**New Components:**
- `HomepageCarousel` — Embla Carousel with autoplay, touch/drag support, dot indicators. Connected to SlideshowImage database. Falls back gracefully when no images exist.
- `GoogleCalendar` — MESA Google Calendar iframe in Agenda mode (3 calendars: MESA main, events, US holidays)
- Slideshow admin: Google Drive share URLs auto-converted to displayable `lh3.googleusercontent.com` URLs

**Homepage (`/`) redesign:**
- Row 1: Hours of Operation + Visit Us (side-by-side cards)
- Row 2: Mission/Vision/Core Values + Image Carousel
- Row 3: Food Pantry + Client Services (linked cards)
- Row 4: Facebook Feed + Google Calendar

**Page-by-page updates:**
- **About**: Team photo cards using Google Drive image serving, board grid (5-col on XL)
- **Food Pantry**: 2-column "About / Who Can Use", "What We Provide" cards, "Help Stock Our Shelves"
- **Client Services**: 2-column "How We Help / Please Note", 3-col "Types of Assistance" with icons, 2-column "How to Apply / Steps"
- **Resources**: Lucide icons per category heading (Landmark, Apple, Zap, HeartPulse, HelpCircle)
- **Footer**: Added Client Services Hours section

**Design patterns established:**
- Section headings: `flex items-center gap-3` with Lucide icon (`h-7 w-7 text-mesa-blue-600`)
- Cards: `rounded-xl border border-gray-200 bg-white p-6 shadow-sm`
- Section backgrounds alternate: white → `bg-mesa-cream` → `bg-mesa-blue-50`
- Hero sections: `bg-gradient-to-br from-mesa-blue-700 to-mesa-blue-900`

**Build fix:**
- Homepage was crashing during Railway static generation (DB unreachable at build time)
- Added `export const dynamic = "force-dynamic"` + try/catch with empty array fallback
- Matches pattern already used on resources and stories pages

**Deployment:**
- Fixed git auth issue (cached HTTPS credentials for wrong account) via `gh auth setup-git`
- All changes pushed to `itsupport-mesa/mesa-website`, Railway auto-deployed successfully

**Pages still needing design review:** stories, stories/submit, volunteer-donate, contact

---

### Feb 16, 2026 — Streams 1-3 Implementation + Deploy

Implemented the full 16-step plan from the previous session:

**Branding (Stream 1):**
- Replaced green color scheme with navy blue (#2B3A67) across all ~30 files
- Added MESA logo to header, Blue Ridge logo to footer + food pantry page
- Added donation QR code to volunteer-donate page

**Content (Stream 2):**
- Rewrote 7 public pages with Kristina's approved copy
- Added board of directors + staff to About page
- Added Blue Ridge pantry finder to Resources page
- Added USDA statement to Food Pantry page + Footer

**Integrations (Stream 3):**
- Wired PayPal donation link, Amazon Wishlist links (2), QR code
- Built FacebookFeed component with SDK loading
- Added TODO placeholders for all blocked items

Build passed with 0 errors, all 24 pages generated. Pushed to Railway for auto-deploy.

---

### Feb 9, 2026 — Kristina's Email + MESA Team Meeting

Received approved page copy, USDA statement, logos, and requirements from Kristina. See `initialFiles/mesaWebsiteInput.md` for full content. Key decisions:
- Use navy blue from current Squarespace site (#2B3A67)
- Volunteer form can be a Google Form
- Client Services Application needs file upload (Google Form supports this)
- Contact page renamed to "Let's Stay Connected!"
- Newsletter: "Around The Table With MESA"

---

### Feb 1, 2025 — Sessions 1-2: Admin Portal + OAuth

- Built complete admin portal with CMS, moderation queue, settings
- Configured Google OAuth (project: `mesa-website-admin-sso`)
- First admin: itsupport@mesamadisonva.org
- Deployed to Railway

---

## Technical Reference

### Architecture
- **Framework**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Database**: PostgreSQL with Prisma ORM (Railway)
- **Auth**: NextAuth.js with Google OAuth (@mesamadisonva.org)
- **Deployment**: Railway (auto-deploys on push to main)

### Key Files
- `tailwind.config.ts` — Color palette (mesa.blue, mesa.gold, mesa.cream)
- `src/components/home/HomepageCarousel.tsx` — Embla Carousel with autoplay (client component)
- `src/components/shared/GoogleCalendar.tsx` — Google Calendar iframe embed
- `src/components/shared/FacebookFeed.tsx` — Facebook Page Plugin (client component)
- `src/components/shared/DonateButton.tsx` — PayPal donation link
- `src/components/layout/Header.tsx` — Nav with logo
- `src/components/layout/Footer.tsx` — USDA statement, Blue Ridge logo, dual emails, dual hours
- `src/app/api/admin/slideshow/route.ts` — Google Drive URL auto-conversion for slideshow admin

### Environment Variables
```
DATABASE_URL, NEXTAUTH_URL, NEXTAUTH_SECRET
GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_DRIVE_FOLDER_ID
```
