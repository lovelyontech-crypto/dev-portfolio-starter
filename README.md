# Developer Portfolio Starter

A minimal, responsive personal portfolio built with Next.js App Router and TypeScript. The styling is plain custom CSS in a clean academic style (white background, sans-serif type, gray timeline, default blue links).

To add your photo, put a square image in `public/` (e.g. `public/me.jpg`) and set `photo: "/me.jpg"` in `lib/site-data.ts`. Each role can also take an optional `logo` path.

## Requirements

- Node.js 20.9+
- npm
- Git (for version control and deployment)

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Personalize before publishing

1. Update `lib/site-data.ts` with your GitHub, LinkedIn, email, and real projects.
2. Edit `app/page.tsx` to replace the sample biography, location, and copy.
3. Update the metadata and canonical site URL in `app/layout.tsx`.
4. Add your resume to `public/resume.pdf` if you want to link it.
5. Run `npm run build` and resolve any errors.
6. Check mobile layout, links, and accessibility.

The project cards currently use CSS illustrations rather than screenshots. Replace them with screenshots of your actual projects if you have them.

## Publish with GitHub + Vercel

Create a repository on GitHub, then run these commands from the project directory:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

Replace the remote URL with your repository's URL. Import that repository at https://vercel.com/new and deploy using the detected Next.js defaults.

After deployment, add a custom domain under Vercel project Settings → Domains if desired.

## Before production

- Replace every `YOUR_USERNAME`, `YOUR_REPOSITORY`, `YOUR_PROFILE`, `you@example.com`, `Your Name`, and `Your City`.
- Replace example projects with real work; do not claim work or metrics you cannot substantiate.
- In `app/layout.tsx`, change `metadataBase`, Open Graph URL, and site metadata to your real domain.
- Confirm all outbound links and email address.
- No secrets or API keys are needed for this static portfolio.
