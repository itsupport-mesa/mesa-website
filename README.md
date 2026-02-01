# MESA Website

Website for Madison Emergency Services Association (MESA), a nonprofit food pantry and emergency services organization serving Madison County, Virginia since 1982.

**Live:** https://mesa-website-production.up.railway.app
**Production domain:** mesamadisonva.org (pending DNS cutover)

## Quick Start

```bash
npm install
npm run dev          # http://localhost:3000
```

## Tech Stack

- Next.js 14 (App Router) + TypeScript
- PostgreSQL + Prisma ORM
- NextAuth.js (Google OAuth)
- Tailwind CSS
- Google Drive API (image storage)
- Railway (hosting)

## Environment Variables

Copy `.env` to `.env.local` and fill in real values:

```
DATABASE_URL           # PostgreSQL connection string
NEXTAUTH_URL           # http://localhost:3000 (dev) or production URL
NEXTAUTH_SECRET        # openssl rand -base64 32
GOOGLE_CLIENT_ID       # Google Cloud Console
GOOGLE_CLIENT_SECRET   # Google Cloud Console
GOOGLE_DRIVE_FOLDER_ID # Shared folder for uploads
```

## Documentation

- [ROADMAP.md](ROADMAP.md) - Implementation phases and progress
- [CLAUDE.md](CLAUDE.md) - AI assistant context and architecture details
