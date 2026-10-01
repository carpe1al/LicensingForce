# Licensing Force Website

Marketing site for Licensing Force (mortgage licensing, education, and compliance). Built with Next.js 16 and Tailwind CSS 4, deployed on Vercel.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. In development the contact form logs submissions to the terminal instead of emailing them.

## Where to edit

| What | File |
| --- | --- |
| Phone, email, hours, social links, nav | `src/lib/site.ts` |
| Services, growth stages, process steps, FAQs | `src/lib/content.ts` |
| Homepage | `src/app/page.tsx` |
| Other pages | `src/app/<page>/page.tsx` |
| Colors and fonts | `src/app/globals.css`, `src/app/layout.tsx` |
| Logo files | `public/`, favicon at `src/app/icon.png` |

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel, choose **Add New → Project**, import the repo, and keep the default Next.js settings.
3. Add these environment variables (see `.env.example`):
   - `NEXT_PUBLIC_SITE_URL`: your live domain, e.g. `https://licensingforce.com`
   - `RESEND_API_KEY`: from https://resend.com (free tier is fine)
   - `CONTACT_TO_EMAIL`: the inbox that receives form submissions
   - `CONTACT_FROM_EMAIL`: a sender on a domain you've verified in Resend
4. Deploy, then add your custom domain under **Settings → Domains**.

Without `RESEND_API_KEY`, the live contact form shows visitors your email and phone number instead of sending.

## Before launch

- Replace the placeholder phone number and email in `src/lib/site.ts`.
- Have counsel review `src/app/privacy/page.tsx` and `src/app/terms/page.tsx`.
- Add social media links in `src/lib/site.ts` (they appear in the footer once filled in).
