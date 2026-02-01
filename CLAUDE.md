# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MESA (Madison Emergency Services Association) website - a Next.js application for a nonprofit food pantry and emergency services organization in Madison County, Virginia. Features a simple CMS for staff editing, client testimonial system with moderation, and homepage slideshow management.

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Auth**: NextAuth.js with Google OAuth (restricted to @mesamadisonva.org domain)
- **Styling**: Tailwind CSS
- **Image Storage**: Google Drive API
- **Deployment**: Railway

## Common Commands

```bash
# Development
npm run dev              # Start dev server (http://localhost:3000)

# Database
npm run db:generate      # Generate Prisma client after schema changes
npm run db:push          # Push schema to database (dev only)
npm run db:studio        # Open Prisma Studio GUI
npx prisma migrate dev   # Create migration in development
npx prisma migrate deploy # Apply migrations (production)

# Build
npm run build            # Build for production (also runs migrations via postbuild)
npm run start            # Start production server
npm run lint             # Run ESLint

# Railway
railway up               # Deploy to Railway
railway logs             # View deployment logs
railway variables        # View/manage environment variables
```

## Architecture

### Database Models ([prisma/schema.prisma](prisma/schema.prisma))

- **User**: Staff accounts synced from Google OAuth, with role (ADMIN/STAFF)
- **ContentBlock**: CMS-editable text regions, keyed by `page.section.field` pattern
- **Testimonial**: Client stories with moderation workflow (PENDING → APPROVED/REJECTED)
- **SlideshowImage**: Homepage carousel images (references Google Drive file IDs)
- **SiteSetting**: Configurable settings (PayPal URL, calendar embed, contact info)
- **Resource**: External links for the Resources page

### Route Structure

```
/                        # Homepage
/about                   # About Us
/food-pantry             # Food Pantry info and hours
/emergency-services      # Financial assistance info
/resources               # Community resources (CMS + external links)
/volunteer-donate        # Donation page with PayPal
/contact                 # Contact info and directions
/stories                 # Public approved testimonials
/stories/submit          # Public testimonial submission form

/admin                   # Admin dashboard (requires auth)
/admin/content           # CMS content editor
/admin/testimonials      # Moderation queue
/admin/slideshow         # Slideshow image manager
/admin/resources         # External links manager (ADMIN only)
/admin/users             # User role management (ADMIN only)
/admin/settings          # Site settings (ADMIN only)
```

### Key Patterns

**Authentication**: Google OAuth restricted to `@mesamadisonva.org` domain. First user to log in becomes ADMIN; subsequent users default to STAFF.

**Role-based access**:
- ADMIN: Full access to all admin features
- STAFF: Content editing and testimonial moderation only

**CMS Content**: Use ContentBlock with keys like `home.hero.title`. Fetch with:
```typescript
const content = await prisma.contentBlock.findUnique({
  where: { key: "home.hero.title" }
});
```

**Image uploads**: Images stored in Google Drive, metadata in PostgreSQL. Store `fileId` and `imageUrl` for each image.

### Environment Variables

Required in `.env.local` and Railway:
```
DATABASE_URL              # PostgreSQL connection (auto-provided by Railway)
NEXTAUTH_URL              # Site URL (http://localhost:3000 for dev)
NEXTAUTH_SECRET           # Generate: openssl rand -base64 32
GOOGLE_CLIENT_ID          # From Google Cloud Console
GOOGLE_CLIENT_SECRET      # From Google Cloud Console
GOOGLE_DRIVE_FOLDER_ID    # Shared Drive folder for uploads
```

## Railway Configuration

- **Project**: zonal-gratitude
- **Services**: Next.js app + PostgreSQL database
- **Account**: itsupport@mesamadisonva.org

## Key Implementation Notes

- **Testimonial photos**: Max 5 MB, stored in Google Drive `/testimonials` subfolder
- **Slideshow images**: Stored in Google Drive `/slideshow` subfolder
- **PayPal**: PayPal-only donations (no Stripe/Venmo)
- **Calendar**: Uses existing MESA Google Calendar via embed URL
- **Domain**: mesamadisonva.org (will point to Railway after launch)
