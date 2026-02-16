# MESA Website Roadmap

## Current Status

**Streams 1-3 Complete. Stream 4 partially complete.** Ready for launch prep once remaining blocked items are resolved.

**Last session**: Feb 16, 2026 — Implemented Streams 1-3 (branding, approved content, integrations) and partial Stream 4 (Facebook feed). Deployed to Railway.
**Next session**: Work through remaining Stream 4 items + Stream 5 launch prep.

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
- [ ] **BLOCKED** — Client Services Application link (need Google Form URL)
- [ ] **BLOCKED** — Newsletter signup link for "Around The Table With MESA" (need URL)
- [ ] **BLOCKED** — Google Calendar embed (need embed URL)

### Stream 4: New Features [PARTIAL]
- [x] Facebook feed embed on homepage (Facebook Page Plugin SDK)
- [x] FacebookFeed client component (`src/components/shared/FacebookFeed.tsx`)
- [ ] Volunteer sign-up form (currently links to email; waiting for Google Form URL)
- [ ] Homepage slideshow integration with frontend
- [ ] Google Drive API setup for image uploads
- [ ] Photo upload to Google Drive for testimonials (5 MB limit)
- [ ] Board documents display (Google Drive folder integration)
- [ ] Resources page visual redesign
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
| Google Calendar | `contact/page.tsx` | Google Calendar embed URL |
| Michelle Houser | `about/page.tsx` | Title, photo, bio for board listing |
| Board documents | `about/page.tsx` | Google Drive folder link or document files |
| Google Drive folder ID | Admin slideshow/testimonials | Folder ID for image uploads |
| TEFAP/Link2Feed | TBD | How to present these on the site |

### Remaining Build Work (Stream 4)

1. **Volunteer Google Form** — Replace email CTA with Google Form link (once URL provided)
2. **Homepage slideshow** — Connect SlideshowImage database to a frontend carousel component
3. **Google Drive API** — Set up service account for image uploads (slideshow + testimonials)
4. **Board documents display** — Build Google Drive folder viewer for annual reports / IRS 990s
5. **Resources page redesign** — Visual refresh of the layout
6. **ContentBlock integration** — Connect public pages to CMS database (currently hardcoded)

### Stream 5: Launch Prep

- [ ] Performance optimization (images, lazy loading)
- [ ] SEO (meta tags, Open Graph, sitemap.xml)
- [ ] Security review
- [ ] Staff documentation / training guide
- [ ] DNS cutover (mesamadisonva.org → Railway)

---

## Page Inventory

| Route | Status | Notes |
|-------|--------|-------|
| `/` | **Live** | Hero, mission, core values, hours (Food Pantry + Client Services), services preview, Facebook feed, contact preview |
| `/about` | **Live** | History, mission, vision, values, board of directors, staff |
| `/food-pantry` | **Live** | Approved copy, hours, Amazon wishlists, Blue Ridge partner, USDA statement |
| `/emergency-services` | **Live** | Renamed to "Client Services", approved copy, hours (Mon/Thu 10-1), operationsmanager@ email. TODO: application link |
| `/resources` | **Live** | Static + database resources, Blue Ridge pantry finder added |
| `/stories` | **Live** | Displays approved testimonials from DB |
| `/stories/submit` | **Live** | Submission form with permission checkboxes |
| `/volunteer-donate` | **Live** | Approved donation + volunteer copy, PayPal, QR code, Amazon wishlists. TODO: Google Form for volunteers |
| `/contact` | **Live** | Renamed "Let's Stay Connected!", newsletter section stub, both emails, both hours sets. TODO: newsletter link, calendar embed |
| `/admin/*` | **Live** | Full admin portal with CMS, moderation, settings |

---

## Items to Request From MESA

Priority items — send to Kristina:

1. **Client Services Application** — Google Form URL (with file upload field for bill attachments)
2. **Newsletter signup link** — "Around The Table With MESA"
3. **Google Calendar embed URL** — for the contact/events page
4. **Michelle Houser** — title, photo, and bio for board page
5. **Board documents** — shared Google Drive folder link (annual reports, IRS 990s)
6. **Google Drive folder ID** — for slideshow/testimonial image uploads
7. **Volunteer form** — Google Form URL (or confirm using email-based approach)

Lower priority:
8. Any additional community resources for the Resources page
9. Board member headshot photos
10. How to present TEFAP income sheet and Link2Feed application on the site

---

## Session Notes

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
- `src/components/shared/FacebookFeed.tsx` — Facebook Page Plugin (client component)
- `src/components/shared/DonateButton.tsx` — PayPal donation link
- `src/components/layout/Header.tsx` — Nav with logo
- `src/components/layout/Footer.tsx` — USDA statement, Blue Ridge logo, dual emails

### Environment Variables
```
DATABASE_URL, NEXTAUTH_URL, NEXTAUTH_SECRET
GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_DRIVE_FOLDER_ID
```
