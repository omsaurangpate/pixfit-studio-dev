This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


# PixFit Studio — Complete Development Guide
## Next.js + TypeScript + Prisma + Clerk + Razorpay + Vercel Blob

---

## COMPLETE FOLDER STRUCTURE

```
pixfit-studio/
│
├── app/                                    # Next.js App Router
│   │
│   ├── (marketing)/                        # Public landing pages (no auth needed)
│   │   ├── layout.tsx                      # Marketing layout (Header + Footer)
│   │   ├── page.tsx                        # Landing page (Hero + Pricing)
│   │   └── pricing/
│   │       └── page.tsx                    # Standalone pricing page
│   │
│   ├── (dashboard)/                        # Protected app pages (auth required)
│   │   ├── layout.tsx                      # Dashboard layout (Sidebar + Topbar)
│   │   ├── dashboard/
│   │   │   └── page.tsx                    # Main upload screen
│   │   ├── process/
│   │   │   └── [jobId]/
│   │   │       └── page.tsx                # Live processing screen
│   │   ├── results/
│   │   │   └── [jobId]/
│   │   │       └── page.tsx                # Results + export screen
│   │   ├── history/
│   │   │   └── page.tsx                    # Past jobs, re-download
│   │   ├── settings/
│   │   │   └── page.tsx                    # User preferences
│   │   └── billing/
│   │       └── page.tsx                    # Credits, plan, Razorpay
│   │
│   ├── api/                                # Backend API routes (TypeScript)
│   │   │
│   │   ├── webhooks/
│   │   │   ├── clerk/
│   │   │   │   └── route.ts                # Clerk webhook → create user in DB
│   │   │   └── razorpay/
│   │   │       └── route.ts                # Razorpay webhook → credit top-up
│   │   │
│   │   ├── jobs/
│   │   │   ├── route.ts                    # POST /api/jobs → create new job
│   │   │   └── [jobId]/
│   │   │       ├── route.ts                # GET /api/jobs/[jobId] → job status
│   │   │       └── cancel/
│   │   │           └── route.ts            # POST → cancel a running job
│   │   │
│   │   ├── images/
│   │   │   ├── upload/
│   │   │   │   └── route.ts                # POST → upload to Vercel Blob, returns URLs
│   │   │   ├── process/
│   │   │   │   └── route.ts                # POST → trigger AI bg removal per image
│   │   │   └── [imageId]/
│   │   │       └── route.ts                # GET → single image status/result
│   │   │
│   │   ├── export/
│   │   │   └── route.ts                    # POST → resize + format + zip + return download URL
│   │   │
│   │   ├── credits/
│   │   │   ├── route.ts                    # GET → fetch user credits
│   │   │   └── deduct/
│   │   │       └── route.ts                # POST → deduct credits after processing
│   │   │
│   │   ├── billing/
│   │   │   ├── create-order/
│   │   │   │   └── route.ts                # POST → create Razorpay order
│   │   │   └── verify-payment/
│   │   │       └── route.ts                # POST → verify Razorpay signature + add credits
│   │   │
│   │   └── user/
│   │       └── route.ts                    # GET → fetch user profile + plan + credits
│   │
│   ├── layout.tsx                          # Root layout (ClerkProvider, fonts, globals)
│   └── globals.css                         # Global styles + Tailwind
│
│
├── components/                             # All React components
│   │
│   ├── marketing/                          # Landing page components
│   │   ├── header.tsx
│   │   ├── hero.tsx
│   │   ├── pricing.tsx
│   │   ├── feature-card.tsx
│   │   └── footer.tsx
│   │
│   ├── dashboard/                          # Dashboard-specific components
│   │   ├── sidebar.tsx                     # Left nav
│   │   ├── topbar.tsx                      # Credits badge + user menu
│   │   ├── credit-badge.tsx                # Always-visible credits indicator
│   │   └── upgrade-nudge.tsx               # Inline upgrade prompts
│   │
│   ├── upload/                             # Upload flow components
│   │   ├── upload-zone.tsx                 # Drag & drop zone (full screen highlight)
│   │   ├── upload-grid.tsx                 # Grid of queued image thumbnails
│   │   ├── upload-card.tsx                 # Individual file card (name, size, remove)
│   │   └── upload-settings.tsx             # Marketplace selector before processing
│   │
│   ├── processing/                         # Processing flow components
│   │   ├── processing-grid.tsx             # Grid showing live processing state
│   │   ├── processing-card.tsx             # Single image: shimmer → result
│   │   ├── progress-bar.tsx                # Global "X of Y done · Ns remaining"
│   │   └── processing-status.tsx           # Status per image (pending/done/failed)
│   │
│   ├── results/                            # Results flow components
│   │   ├── results-grid.tsx                # Grid of completed images
│   │   ├── result-card.tsx                 # Card with hover before/after
│   │   ├── comparison-slider.tsx           # Drag slider before↔after view
│   │   ├── compliance-badge.tsx            # ✅ Amazon Ready / ⚠️ Too small
│   │   └── export-panel.tsx                # Marketplace selector + Download ZIP
│   │
│   ├── billing/                            # Billing components
│   │   ├── plan-card.tsx                   # Current plan display
│   │   ├── credit-meter.tsx                # Visual credits remaining
│   │   └── razorpay-button.tsx             # Razorpay checkout trigger
│   │
│   └── ui/                                 # shadcn/ui base components
│       ├── button.tsx
│       ├── badge.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── progress.tsx
│       ├── toast.tsx
│       ├── tooltip.tsx
│       ├── skeleton.tsx
│       └── ... (other shadcn components)
│
│
├── lib/                                    # Shared utilities and services
│   │
│   ├── db/
│   │   └── prisma.ts                       # Prisma client singleton
│   │
│   ├── auth/
│   │   └── server.ts                       # Clerk server-side auth helpers
│   │
│   ├── blob/
│   │   └── vercel-blob.ts                  # Vercel Blob upload/delete helpers
│   │
│   ├── ai/
│   │   └── remove-bg.ts                    # Background removal API client (Remove.bg / Clipdrop)
│   │
│   ├── image/
│   │   ├── resize.ts                       # Sharp.js resize to marketplace specs
│   │   ├── validate.ts                     # Check resolution, fill%, format
│   │   └── marketplace-presets.ts          # All marketplace size/format rules
│   │
│   ├── zip/
│   │   └── create-zip.ts                   # Bundle processed images into ZIP
│   │
│   ├── razorpay/
│   │   └── client.ts                       # Razorpay SDK wrapper
│   │
│   ├── credits/
│   │   └── manager.ts                      # Credit deduction / validation logic
│   │
│   └── utils.ts                            # cn(), formatBytes(), etc.
│
│
├── prisma/
│   ├── schema.prisma                       # Full DB schema (see below)
│   └── migrations/                         # Auto-generated migrations
│
│
├── types/                                  # TypeScript type definitions
│   ├── job.ts                              # Job, JobStatus, JobImage types
│   ├── image.ts                            # ProcessedImage, ExportOptions types
│   ├── marketplace.ts                      # MarketplacePreset type
│   ├── billing.ts                          # Plan, Credit, RazorpayOrder types
│   └── api.ts                              # API request/response types
│
│
├── hooks/                                  # Custom React hooks
│   ├── use-job-status.ts                   # Poll job status (SWR / React Query)
│   ├── use-upload.ts                       # Handle file upload state
│   ├── use-credits.ts                      # Fetch + watch user credits
│   └── use-export.ts                       # Export settings state
│
│
├── store/                                  # Zustand global state
│   ├── upload-store.ts                     # Files queued for upload
│   ├── job-store.ts                        # Active job state
│   └── settings-store.ts                   # User preferences (marketplace default etc.)
│
│
├── constants/
│   ├── marketplaces.ts                     # All marketplace presets (sizes, formats, rules)
│   └── plans.ts                            # Free/Pro/Enterprise limits
│
│
├── middleware.ts                           # Clerk auth middleware (protect /dashboard/*)
│
│
├── public/
│   └── images/
│       ├── before.jpg
│       └── after.png
│
│
└── config files
    ├── next.config.ts
    ├── tailwind.config.ts
    ├── tsconfig.json
    ├── .env.local                          # All secrets (see below)
    └── package.json
```

---