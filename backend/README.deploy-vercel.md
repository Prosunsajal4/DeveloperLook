# Deploying the backend to Vercel

This repository's backend is prepared for deployment on Vercel using `@vercel/node` (see `vercel.json`). The service is a single Express app entry `index.js`.

## Quick steps (manual)

1. Install Vercel CLI (if needed):

   ```bash
   npm i -g vercel
   vercel login
   ```

2. From the `backend/` folder, run:

   ```bash
   cd backend
   vercel --prod
   ```

   This will deploy the backend and print the deployment URL (e.g. `https://your-project-abc123.vercel.app`).

3. Set required environment variables for the production deployment in the Vercel dashboard for the project. The backend expects the following env names:
   - `MONGODB_URI` — MongoDB connection string
   - `NEWSDATA_API_KEY` — NewsData.io API key
   - `NEWSDATA_CRON` — optional cron schedule (default: `0 * * * *`)
   - `STRIPE_SECRET_KEY` and `STRIPE_PUBLISHABLE_KEY` — optional
   - `FB_SERVICE_KEY` — optional Firebase service account JSON, base64-encoded

   Important: `FB_SERVICE_KEY` must be the full service-account JSON encoded to base64.

4. (Optional) After the deployment completes, copy the produced Vercel URL and update the frontend production environment (see below).

## Automating via GitHub / Vercel

- You can link the repository to Vercel in the Vercel dashboard to enable automatic deploys from branches. Make sure project settings include the above environment variables.

## Frontend update (after you know the backend URL)

1. Update `frontend/.env.production` (or set environment variable in your frontend hosting) to point to the deployed backend URL. Example:

   ```text
   VITE_API_URL=https://your-backend-project.vercel.app
   ```

2. Rebuild the frontend for production (from repo root):

   ```bash
   cd frontend
   npm run build
   ```

3. Deploy your frontend (Netlify, Vercel, or GitHub Pages). Ensure the production environment contains the same `VITE_API_URL` so the frontend talks to the backend.

## Notes & troubleshooting

- The backend's `vercel.json` routes `/(.*)` to `index.js`, allowing standard Express routes.
- If you use Vercel's serverless functions, cold-starts may apply; consider lightweight caching on the frontend.
- If you need the deploy to run from CI (GitHub Actions), I can add a workflow that runs `vercel` using a `VERCEL_TOKEN` secret.
