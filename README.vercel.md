# Deploying to Vercel

This project is configured to deploy the static Expo Web export on Vercel.

What’s already set up:
- `vercel.json` uses `@vercel/static-build` and serves the `dist/` export
- `package.json` has `vercel-build` that runs `expo export --platform web`
- `app.json` sets `web.output` to `static`

Deploy via Vercel Dashboard (recommended):
1. Push your changes to GitHub (already done in this repo).
2. Go to https://vercel.com/new and import the `najibf911/portofolio-expo` repository.
3. When prompted, Vercel will auto-detect the config. If asked, set:
   - Build Command: `npm run vercel-build`
   - Output Directory: `dist`
4. Click Deploy. Your site will be available on a Vercel URL.

Deploy via Vercel CLI (optional):

```powershell
# Install Vercel CLI if needed
npm i -g vercel

# From the project root, link and deploy
vercel

# For production deployment
vercel --prod
```

Local export check (optional):

```powershell
npm run vercel-build
```

Notes:
- If you expect a route like `/projects`, make sure the corresponding file exists in `app/` (for example `app/(tabs)/projects.tsx` or a folder with `index.tsx`). The export build shows a warning if a referenced route doesn’t exist; it won’t block deployment but the link will 404.
