## FitFlow Pro (gym-saas)

Marketing site + auth demo for a gym SaaS called **FitFlow Pro**.
Goal: validate a modern gym-SaaS landing + sign-in experience; Solution: Next.js App Router + NextAuth (OAuth + credentials) + Prisma/Postgres; Impact: a production-style foundation for demos, iteration, and future SaaS expansion.
Upwork skills: **Next.js**, **React**, **TypeScript**, **NextAuth**, **Prisma (PostgreSQL)**.

### What’s in this repo

- **Next.js App Router** website with these routes:
  - **Marketing pages**: `/`, `/features`, `/pricing`, `/about`, `/contact`
  - **Auth pages**: `/auth/signIn`, `/auth/signUp`
  - **Project page**: `/project` (currently a placeholder page; not a full SaaS dashboard)
- **Authentication** via **NextAuth v5**:
  - OAuth: **GitHub**, **Google**
  - Credentials: email + password (passwords hashed with `bcrypt`)
- **Database**: **Postgres** via **Prisma**

### Tech stack

- **Next.js** 16 (App Router) + **React** 19 + **TypeScript**
- **Tailwind CSS v4** + **shadcn/ui**
- **NextAuth** (beta) + **Prisma** + **Postgres**

### Project structure

- **`src/app/`**: Next.js routes (pages/layout/api)
  - `src/app/api/auth/[...nextauth]/route.ts`: NextAuth route handler
  - `src/app/layout.tsx`: loads session with `auth()` and passes it to the navbar
- **`src/components/`**: UI + page wrappers (home/features/pricing/about/contact/auth)
- **`server-actions/`**: server actions for auth flows (sign in/out, sign up, OAuth sign in)
- **`schemas/`**: Zod schemas used by forms/server actions
- **`prisma/`**: Prisma schema + migrations

### Requirements

- **Node.js** 18.18+ (20+ recommended)
- **pnpm**
- **PostgreSQL** database (local or hosted)

### Environment variables

Create a `.env` file in the project root (it’s gitignored).

```bash
# Postgres (required)
DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/DBNAME?schema=public"

# NextAuth (required)
AUTH_SECRET="replace-with-a-long-random-secret"

# OAuth providers (optional; required only if you want these buttons to work)
AUTH_GITHUB_ID=""
AUTH_GITHUB_SECRET=""
AUTH_GOOGLE_ID=""
AUTH_GOOGLE_SECRET=""

# Optional (only needed if you wire up redirects in src/proxy.ts via middleware)
BASE_URL="http://localhost:3000"
```

Generate a secret quickly:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

If you enable OAuth, set your provider callback URLs to:

- **GitHub**: `http://localhost:3000/api/auth/callback/github`
- **Google**: `http://localhost:3000/api/auth/callback/google`

### Setup (local)

Install dependencies:

```bash
pnpm install
```

Apply migrations and generate Prisma client:

```bash
pnpm prisma migrate dev
pnpm prisma generate
```

Run the dev server:

```bash
pnpm dev
```

Open `http://localhost:3000`.

### Scripts

- **`pnpm dev`**: start Next.js dev server
- **`pnpm build`**: `prisma generate` then `next build`
- **`pnpm start`**: run production server
- **`pnpm lint`**: run ESLint

### Prisma notes

- Prisma migrations live in `prisma/migrations/`.
- Prisma client is generated into `src/app/generated/prisma` (this folder is **gitignored**), so you must run `pnpm prisma generate` after installing dependencies and anytime the schema changes.

### Deployment

Any platform that can run Next.js works (for example Vercel, or a Node server), but you must provide:

- **`DATABASE_URL`** pointing at a reachable Postgres instance
- **`AUTH_SECRET`**
- Any OAuth provider keys you want enabled

Run:

```bash
pnpm build
pnpm start
```

### Troubleshooting

- **`Cannot find module '@/app/generated/prisma/client'`**: run `pnpm prisma generate`
- **OAuth buttons redirect / error**: ensure the provider env vars are set and callback URLs match
- **`AUTH_SECRET` missing**: set `AUTH_SECRET` in `.env` and restart the dev server
