# Deploying Taj-Salon on Render (frontend/backend split)

This repository uses a `frontend/` folder for the Vite React app and a `backend/` folder for the Express API.

## Recommended Render setup

### Frontend (Static Site)
- Service type: Static Site
- Root Directory: `frontend`
- Build Command: `npm ci && npm run build`
- Publish Directory: `dist`
- Node version: set to Node 18+ (Render dashboard setting)

Notes: `frontend/vite.config.js` uses `publicDir: '../public'` so static assets live in the repo-level `public/` directory.

### Backend (Web Service)
- Service type: Web Service
- Root Directory: `backend`
- Build Command: `npm ci`
- Start Command: `npm start` (or `node server.js` if you prefer)
- Ensure environment variables are set on Render (e.g., `MONGO_URI` in `backend` service settings)

## Single-repo convenience scripts (root `package.json`)
The root `package.json` contains helper scripts to run builds from repo root without changing working directory:

- `npm run build:frontend` — runs `npm --prefix frontend ci && npm --prefix frontend run build`
- `npm run preview:frontend` — runs `npm --prefix frontend run preview`
- `npm run install:backend` — runs `npm --prefix backend ci`
- `npm run start:backend` — runs `node backend/server.js`

Use these if you prefer configuring Render to run commands from the repository root.

## Local verification commands
Run these from the repository root (local machine):

```bash
# Build the frontend exactly like Render will
npm run build:frontend

# Check the build output
ls -la frontend/dist

# Install backend deps and run backend locally
npm run install:backend
npm run start:backend
```

## Notes & troubleshooting
- If Render reports `Publish directory dist does not exist`, ensure the Build Command runs successfully and creates `frontend/dist` (the publish directory). If using the root script, the built files will be at `frontend/dist`.
- Make sure the Node version in Render is set to 18 or newer.
- For client-side environment variables exposed to the frontend, use the `VITE_` prefix when adding them in Render's environment settings.

If you want I can commit the README and push the changes; I couldn't run the build or git push from this environment due to a transient environment limitation. You can run the commands above locally or I can retry the build/push if you want me to attempt again.
