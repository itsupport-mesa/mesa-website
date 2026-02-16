# MESA Website Roadmap

## Current Status

**Phase 4: Dynamic Features** - IN PROGRESS

Phases 1-3 complete. Admin portal fully functional. MESA team meeting held Feb 9, 2026 — received approved page copy from Kristina, USDA statement, logos, and detailed requirements. Ready to begin building out the real site content and dynamic features.

**Last session**: Feb 9, 2026 — MESA team meeting + Kristina's email with page content
**Next session**: Work through Phase 4 task list below

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
- [ ] Google Calendar embed on homepage (subtle integration)
- [ ] PayPal donation button integration
- [ ] Amazon Wishlist links (Food + Hygiene, on Food Pantry page and Donate page)
- [ ] Facebook feed embed on homepage (Facebook Page Plugin)
- [ ] Volunteer sign-up form (mobile-friendly, emails to info@mesamadisonva.org)
- [ ] Homepage hours repositioned and relabeled "Normal Hours of Operation"
- [ ] USDA Non-Discrimination Statement (full text received — required by Blue Ridge partnership)
- [ ] Blue Ridge Area Food Bank logo on site
- [ ] "Find a Local Pantry" link (https://foodfinder.brafb.org/)
- [ ] Board member management — add Michelle Houser
- [ ] Board documents display (Google Drive folder integration + admin instructions)
- [ ] Resources page visual redesign
- [ ] Seed page content with Kristina's approved copy (Food Pantry, Client Services, Volunteer, Donation)
- [ ] Client Services Application link + attachment upload (so clients don't have to email bills separately)
- [ ] Contact page rename to "Let's Stay Connected!" + newsletter link
- [ ] Email addresses: use info@ and operationsmanager@ only (remove volunteer@ from public site)
- [ ] MESA Donation QR Code on donation page
- [ ] Newsletter signup: "Around The Table With MESA"

### Phase 5: Launch Prep
- [ ] Color scheme alignment with current mesamadisonva.org site
- [ ] Logo integration (same logo as current site)
- [ ] Performance optimization
- [ ] SEO (meta tags, Open Graph, sitemap.xml)
- [ ] Security review
- [ ] Staff documentation / training guide
- [ ] DNS cutover (mesamadisonva.org → Railway)

## Page Inventory

| Route | Status | Notes |
|-------|--------|-------|
| `/` | Scaffold | Homepage with hero, mission, services preview. Needs: Facebook feed, calendar, hours repositioned |
| `/about` | Scaffold | History, mission, vision, values, team placeholder. Needs: board members (add Michelle Houser), board documents display |
| `/food-pantry` | Scaffold | Approved copy received. Needs: Amazon Wishlist links, Blue Ridge logo, USDA statement |
| `/emergency-services` | Scaffold | Approved copy received (Client Services). Needs: application link, attachment upload, client services hours (Mon/Thu 10-1) |
| `/resources` | Scaffold | Static resources + database resources. Needs: visual redesign |
| `/stories` | Functional | Displays approved testimonials from DB |
| `/stories/submit` | Functional | Form submits to database |
| `/volunteer-donate` | Scaffold | Approved copy received. Needs: volunteer form (mobile), PayPal link, donation QR code |
| `/contact` | Scaffold | Rename to "Let's Stay Connected!" Needs: newsletter link, correct emails (info@ and operationsmanager@ only) |
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
- [x] ~~PayPal donation button/link URL~~ (https://www.paypal.com/donate/?hosted_button_id=4S7MUPTZN7MY4)
- [x] ~~Amazon Wishlist URLs~~ (Food: https://a.co/9loRQsi, Hygiene: https://a.co/emf5k7G)
- [x] ~~Logo file~~ (MESA Letterhead Logo received from Kristina — needs to be saved to repo)
- [ ] Google Drive folder ID (for image uploads - slideshow, testimonials)
- [x] ~~Initial ADMIN user email addresses~~ (itsupport@mesamadisonva.org is ADMIN)
- [x] ~~Review of page content for accuracy~~ (Kristina provided approved copy for Food Pantry, Client Services, Volunteer, Donation sections)
- [ ] Any additional resources to list on Resources page
- [x] ~~USDA statement text~~ (full USDA Non-Discrimination Statement received)
- [x] ~~Additional requirements from Kristina's email~~ (received — page copy, USDA statement, attachments)
- [ ] Michelle Houser details (title, photo, bio for board page)
- [ ] Current site color scheme / brand guide
- [x] ~~Current volunteer form fields and details~~ (Name, Email, Message — simple contact form)
- [ ] Board page documents (or Google Drive folder link)
- [x] ~~MESA Facebook page URL~~ (https://www.facebook.com/MesaMadisonCountyVA/)
- [x] ~~Blue Ridge Area Food Bank logo~~ (attachment received from Kristina — needs to be saved to repo)
- [x] ~~MESA Donation QR Code~~ (attachment received from Kristina — needs to be saved to repo)
- [ ] Client Services Application link (online form URL)
- [ ] Newsletter signup link ("Around The Table With MESA")
- [ ] TEFAP income sheet and Link2Feed application (attachments received — need to determine how to present)

## Session Notes

### Feb 9, 2026 - Kristina's Email: Page Content & Requirements
Kristina sent detailed page copy, USDA statement, and attachments. This is the definitive content for the site.

**Client Services / Emergency Services page — NEW COPY:**
> MESA offers crisis support through our Client Services program to assist with unforeseen emergencies. Kindly complete the Client Services Application online and email a copy of the bill requesting services to OperationsManager@mesamadisonva.org, or visit the MESA Building during Client Services hours on Mondays and Thursdays from 10:00 A.M. to 1:00 P.M. Assistance provided includes support with utility bills, rent or mortgage payments, and repairs; information regarding local resources; and referrals to community programs. Currently, we serve residents of Madison County in need of assistance.

- [ ] Add link to Client Services Application
- [x] ~~Investigate: attachment upload on application~~ — Yes, Google Form supports file upload fields. Add file upload to the Client Services Application Google Form.
- Client Services hours: **Mondays and Thursdays 10:00 A.M. - 1:00 P.M.**

**Food Pantry page — NEW COPY:**
> MESA's Food Pantry operates multiple days each week, including Saturdays, to assist individuals in our community who need nourishment.

Hours: Tue 10am-1pm, Wed 10am-1pm, Wed Eve 6pm-7:30pm, Sat 10am-Noon

> MESA Food Pantry is run by one full-time staff member, supported by numerous dedicated volunteers and food pickup drivers, and dedicates hundreds of hours to receiving, sorting, and storing thousands of pounds of food for Madison households each week.

> The Food Pantry aims to provide healthy options, such as low-sugar, low-sodium canned goods and cereals. Fresh produce and eggs are supplied by local farmers and larger chain food stores in the area. Nevertheless, the most substantial and consistent donations originate from the Blue Ridge Area Food Bank, local churches, and community members. Additionally, MESA benefits from various food drives organized by the U.S. Postal Service, local schools, and other community entities.

> The Food Pantry also supplies personal hygiene and cleaning products monthly, including items such as toilet paper, toothpaste, deodorant, and diapers, which are not eligible for purchase with food stamps. Our donations of cleaning and personal hygiene products are vital in enhancing the overall health and wellness of the Madison County community.

> Children under 18 receive snack bags composed of items donated and prepared by our volunteers.

> Annually, MESA's Food Pantry serves approximately 16,200 individuals and 6,100 households; however, these figures are increasing as needs in our local community continue to escalate.

- [ ] Add links to Amazon Wish Lists (Food and Hygiene) on Food Pantry page

**Volunteer section — NEW COPY:**
> Join Our MESA Volunteer Team! Contributing to the well-being of our Madison County community has never been more accessible. Our volunteer schedule offers flexibility, allowing you to participate in as many or as few shifts as your schedule permits. Please get in touch with our Operations Manager via our contact form to begin your involvement.

> We frequently require assistance with uploading trucks and organizing food donations received from our partner donors—including Wal-Mart, Food Lion, Martins, Trader Joe's, Sheetz—and private donors who contribute daily. There are also opportunities to engage with clients by volunteering during Food Pantry hours and assisting with the distribution of eggs, milk, meat, and hygiene bags.

- [ ] Add link to volunteer contact form

**Donation section — NEW COPY:**
> Since 1982, Madison Emergency Services Association (MESA) has been dedicated to serving the needs of the Madison County, VA community. We operate as a vital resource, offering a comprehensive Food Pantry, essential Emergency Services, and access to supplementary resources. While we sincerely appreciate all forms of assistance—including volunteering, resource sharing, and food donations—we rely primarily on monetary contributions to support our annual operational expenses.

> Please consider making a donation to MESA below; your tax-deductible contribution will help provide food and supplies to those in need within our community. Your generosity significantly contributes to sustaining our mission. We appreciate your support.

> Contributions can be submitted via physical checks dropped off or mailed to our pantry, or through digital donation via our PayPal link provided below. Your support is instrumental in promoting the long-term health and well-being of our Madison County residents.

- [ ] Add PayPal link on donation section

**Contact page — rename to "Let's Stay Connected!"**
- [ ] Rename Contact page heading to "Let's Stay Connected!"
- [ ] Newsletter section: "Around The Table With MESA" — link to newsletter signup
- [ ] Show MESA address, phone, and email (info@ and operationsmanager@ only — do NOT use volunteer@ email online)

**USDA Non-Discrimination Statement — RECEIVED (full text):**
> In accordance with Federal civil rights law and U.S. Department of Agriculture (USDA) civil rights regulations and policies, the USDA, its Agencies, offices, and employees, and institutions participating in or administering USDA programs are prohibited from discriminating based on race, color, national origin, religion, sex, gender identity (including gender expression), sexual orientation, disability, age, marital status, family/parental status, income derived from a public assistance program, political beliefs, or reprisal or retaliation for prior civil rights activity, in any program or activity conducted or funded by USDA (not all bases apply to all programs). Remedies and complaint filing deadlines vary by program or incident.
>
> Persons with disabilities who require alternative means of communication for program information (e.g., Braille, large print, audiotape, American Sign Language, etc.) should contact the responsible Agency or USDA's TARGET Center at (202) 720-2600 (voice and TTY) or contact USDA through the Federal Relay Service at (800) 877-8339. Additionally, program information may be made available in languages other than English.
>
> To file a program discrimination complaint, complete the USDA Program Discrimination Complaint Form, AD-3027, found online at How to File a Program Discrimination Complaint and at any USDA office or write a letter addressed to USDA and provide in the letter all of the information requested in the form. To request a copy of the complaint form, call (866) 632-9992. Submit your completed form or letter to USDA by: (1) mail: U.S. Department of Agriculture, Office of the Assistant Secretary for Civil Rights, 1400 Independence Avenue, SW, Washington, D.C. 20250-9410; (2) fax: (202) 690-7442; or (3) email: program.intake@usda.gov.
>
> USDA is an equal opportunity provider, employer, and lender.

- [ ] Add USDA statement to site (required by Blue Ridge Area Food Bank partnership). Reference: Feeding Greene food pantry site for placement example.

**Blue Ridge Area Food Bank partnership:**
- [ ] Add Blue Ridge Area Food Bank logo to site (attachment received)
- [ ] Add "Find a Local Pantry" link: https://foodfinder.brafb.org/

**Attachments received from Kristina:**
- Blue Ridge Area Food Bank logo
- MESA Donation QR Code
- MESA Letterhead Logo (use for site branding)
- Income sheet for TEFAP
- Link2Feed application (new client intake form)

**About Us page:** No changes needed per Kristina's review.

**Design reference:** Feeding Greene Food Pantry website — Kristina likes their layout for volunteer form and organization.

---

### Feb 9, 2026 - MESA Team Meeting
Meeting notes — new requirements and feedback from the MESA team:

**Homepage Enhancements:**
- [ ] Facebook feed embed on homepage — MESA wants their Facebook page feed visible on the home page (reference: https://wjmafm.com/ uses Facebook Page Plugin via JS SDK in a sidebar). MESA Facebook page: https://www.facebook.com/MesaMadisonCountyVA/
- [ ] Google Events calendar — subtly integrate the Google calendar on the homepage
- [ ] Hours of operation — reposition on homepage and relabel as "Normal Hours of Operation". Current hours: Tue 10-1, Wed 10-1, Wed Eve 6-7:30, Sat 10-12

**Volunteer Form:**
- [ ] Volunteer sign-up form — carry forward from current site. Current form has: Name, Email, Message fields with "Send" button. Submissions should email to info@mesamadisonva.org. Must be mobile-friendly.

**Compliance:**
- [x] ~~USDA statement — required statement must be added to the site~~ (full text received in Kristina's email, see above)
- [x] ~~Additional content from email~~ — Kristina's email received with full page copy (see above)

**Branding:**
- [ ] Color scheme — match the color scheme from the current mesamadisonva.org site (Squarespace-based, clean modern nonprofit aesthetic)
- [ ] Logo — MESA Letterhead Logo attachment received from Kristina

**About / Board Page:**
- [ ] New board member — add Michelle Houser to the board listing
- [ ] Current board (2025): Patricia Livingston (President), Jim Duszynski (VP), Erin Nicholls (Treasurer), Celene Pumphrey (Secretary), Robin Sweely (Director)
- [ ] Staff: Patricia Livingston (Exec Director), Catrina Lloyd (Pantry Manager), Kristina Magel (Operations Manager)
- [ ] Board documents — carry forward documents from the bottom of the current board page; build a display driven by a Google Drive folder, with admin panel instructions for managing. Current docs:
  - Annual Reports: 2024, 2023, 2022, 2021, 2020, 2019
  - IRS 990 Forms: 2022, 2021, 2020, 2019

**Resources Page:**
- [ ] Resources redesign — keep existing resources but redesign the layout to be more visually coherent

**Other current site features to carry forward:**
- Amazon Wishlists: Food items (https://a.co/9loRQsi), Hygiene/Cleaning (https://a.co/emf5k7G)
- PayPal donation: https://www.paypal.com/donate/?hosted_button_id=4S7MUPTZN7MY4
- Newsletter signup form ("Around The Table With MESA"): First Name, Last Name, Email
- Social: Facebook (https://www.facebook.com/MesaMadisonCountyVA/), Instagram (@mesamadisonva)

---

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

## Task List for Next Session

Organized by work stream. Items marked **BLOCKED** need info from MESA before they can be completed.

### Stream 1: Assets & Branding (do first — unblocks everything else)
- [ ] Save Kristina's attachments to repo `/public/images/` (MESA logo, Blue Ridge logo, donation QR code)
- [ ] Extract color scheme from current mesamadisonva.org and update Tailwind config
- [ ] Replace placeholder logo in header/footer with MESA letterhead logo
- [ ] **BLOCKED** — Need color scheme confirmation or brand guide from MESA

### Stream 2: Seed Approved Content (no blockers — all copy received)
- [ ] Connect public pages to read from ContentBlock database
- [ ] Seed Food Pantry page with Kristina's approved copy
- [ ] Seed Emergency Services / Client Services page with approved copy + hours (Mon/Thu 10-1)
- [ ] Seed Volunteer section with approved copy
- [ ] Seed Donation section with approved copy
- [ ] Update homepage hours — reposition and relabel "Normal Hours of Operation"
- [ ] Add USDA Non-Discrimination Statement (full text in session notes above)
- [ ] Add Blue Ridge Area Food Bank logo to site
- [ ] Add "Find a Local Pantry" link (https://foodfinder.brafb.org/)
- [ ] Update email addresses sitewide: use info@ and operationsmanager@ only (remove volunteer@)
- [ ] Rename Contact page heading to "Let's Stay Connected!"

### Stream 3: Links & Integrations (some ready, some blocked)
- [ ] Wire up PayPal donation button (https://www.paypal.com/donate/?hosted_button_id=4S7MUPTZN7MY4)
- [ ] Wire up Amazon Wishlist links on Food Pantry + Donate pages (Food: https://a.co/9loRQsi, Hygiene: https://a.co/emf5k7G)
- [ ] Add MESA Donation QR Code to donation page
- [ ] **BLOCKED** — Client Services Application link (need Google Form URL from MESA)
- [ ] **BLOCKED** — Newsletter signup link for "Around The Table With MESA" (need URL from MESA)
- [ ] **BLOCKED** — Google Calendar embed on homepage (need embed URL from MESA)

### Stream 4: New Features (build work)
- [ ] Facebook feed embed on homepage (Facebook Page Plugin, page: https://www.facebook.com/MesaMadisonCountyVA/)
- [ ] Volunteer sign-up form — Name, Email, Message fields, mobile-friendly, emails to info@mesamadisonva.org (reference: Feeding Greene Food Pantry layout)
- [ ] Newsletter signup section: "Around The Table With MESA" (First Name, Last Name, Email)
- [ ] Homepage slideshow integration with frontend
- [ ] Set up Google Drive API for image uploads
- [ ] Photo upload to Google Drive for testimonials (5 MB limit)
- [ ] Board documents display — build from Google Drive folder + admin panel instructions
- [ ] Resources page visual redesign
- [ ] **BLOCKED** — Board member management — add Michelle Houser (need title, photo, bio)
- [ ] **BLOCKED** — Board page documents (need Google Drive folder link or files)
- [ ] **BLOCKED** — TEFAP income sheet + Link2Feed application (need to determine how to present)

### Stream 5: Launch Prep (Phase 5 — after Phase 4 complete)
- [ ] Color scheme final review
- [ ] Logo final review
- [ ] Performance optimization
- [ ] SEO (meta tags, Open Graph, sitemap.xml)
- [ ] Security review
- [ ] Staff documentation / training guide
- [ ] DNS cutover (mesamadisonva.org → Railway)

### Items to Request From MESA (send to Kristina)
1. Google Calendar embed URL
2. Client Services Application Google Form URL (with file upload field added for bill attachments)
3. Newsletter signup link ("Around The Table With MESA")
4. Michelle Houser — title, photo, and bio for board page
5. Board page documents — either files or a shared Google Drive folder link
6. Google Drive folder ID for image uploads (slideshow, testimonials)
7. Color scheme confirmation or brand guide
8. Any additional resources for the Resources page
9. Board member headshot photos (download from Squarespace admin and send)
10. How to present TEFAP income sheet and Link2Feed application on site
