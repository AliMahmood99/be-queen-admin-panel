# 🚀 Deployment Guide - BE QUEEN Admin Panel

## ✅ Vercel Deployment (Recommended)

### Prerequisites
- GitHub account connected to Vercel
- Repository pushed to GitHub
- Vercel account (free tier works)

---

## 📋 Step-by-Step Deployment

### 1. Push Code to GitHub

```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### 2. Import Project to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository: `AliMahmood99/be-queen-admin-panel`
4. Vercel will auto-detect Vite framework

### 3. Configure Environment Variables

**IMPORTANT:** Add these environment variables in Vercel Dashboard:

**Path:** Project Settings → Environment Variables

#### Required Variables:

```bash
# API Configuration
VITE_API_BASE_URL=https://api.bequeen.qa/api
VITE_API_TIMEOUT=30000

# Application
VITE_APP_NAME=BE QUEEN Admin Panel
VITE_APP_VERSION=1.0.0

# Feature Flags
VITE_ENABLE_MOCK_DATA=false
VITE_ENABLE_DEBUG=false
```

#### For Testing/Staging (Optional):
```bash
# Use mock data without backend
VITE_ENABLE_MOCK_DATA=true
VITE_ENABLE_DEBUG=true
```

### 4. Build Configuration

Vercel will auto-detect these from `vercel.json`:

- **Framework:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`
- **Node Version:** 22.x (from package.json)

### 5. Deploy

Click **"Deploy"** button in Vercel.

**Build Process:**
```
Installing dependencies... ✓
Running "npm run build"... ✓
  - TypeScript compilation (tsc) ✓
  - Vite build ✓
Deploying... ✓
```

**Estimated Time:** 2-3 minutes

---

## 🔧 Troubleshooting

### Build Fails with "Module not found"

**Solution:** Ensure all dependencies are in `dependencies` (not `devDependencies`)

```bash
npm install --save @tanstack/react-query axios react-router-dom
```

### Build Fails with TypeScript Errors

**Solution:** Run build locally first to check errors

```bash
npm run build
```

Fix all TypeScript errors before deploying.

### Environment Variables Not Working

**Symptoms:**
- API calls fail
- Mock data doesn't load
- Console shows "undefined" for env vars

**Solution:**
1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Ensure all variables start with `VITE_`
3. Click "Redeploy" after adding variables

**Important:** Vite requires `VITE_` prefix for environment variables!

### 404 on Page Refresh

**Symptoms:**
- Homepage works
- Direct navigation works
- Refresh on `/users` shows 404

**Solution:** This is already fixed in `vercel.json`

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

This ensures all routes go to index.html (SPA mode).

### Chunk Size Warning

**Warning during build:**
```
Some chunks are larger than 500 kB after minification
```

**Impact:** This is a performance warning, not an error. Deployment will succeed.

**Optional Fix (for better performance):**

1. Update `vite.config.ts`:

```typescript
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['lucide-react', 'sonner'],
          query: ['@tanstack/react-query'],
          charts: ['recharts'],
        },
      },
    },
  },
});
```

2. Redeploy.

### Deprecated Package Warnings

**Warnings during build:**
```
npm warn deprecated rimraf@3.0.2
npm warn deprecated eslint@8.57.1
```

**Impact:** These are warnings only. Build will succeed.

**Optional Fix:**

```bash
npm install --save-dev eslint@latest
npm install --save-dev rimraf@latest
```

Then commit and redeploy.

---

## 🌍 Custom Domain Setup

### 1. Add Domain in Vercel

1. Go to Project → Settings → Domains
2. Add your domain: `admin.bequeen.qa`
3. Follow DNS configuration instructions

### 2. DNS Configuration

Add these records in your DNS provider (GoDaddy, Namecheap, etc.):

**A Record:**
```
Type: A
Name: admin
Value: 76.76.21.21 (Vercel's IP)
```

**OR CNAME Record (Recommended):**
```
Type: CNAME
Name: admin
Value: cname.vercel-dns.com
```

### 3. Verification

Wait 24-48 hours for DNS propagation.

Check status: `dig admin.bequeen.qa`

---

## 📊 Deployment Checklist

Before deploying to production:

### Code Checklist:
- [ ] All TypeScript errors fixed
- [ ] Build succeeds locally (`npm run build`)
- [ ] All features tested
- [ ] Console errors checked
- [ ] Mobile responsive verified

### Configuration Checklist:
- [ ] `vercel.json` created
- [ ] Environment variables set in Vercel
- [ ] `VITE_ENABLE_MOCK_DATA=false` in production
- [ ] API URL points to production backend
- [ ] Node version specified in `package.json`

### Security Checklist:
- [ ] `.env` added to `.gitignore`
- [ ] No sensitive data in code
- [ ] API endpoints use HTTPS
- [ ] CORS configured on backend

---

## 🔄 Continuous Deployment

**Automatic deploys on push:**

1. Push to GitHub main branch:
   ```bash
   git push origin main
   ```

2. Vercel automatically:
   - Detects push
   - Runs build
   - Deploys to production
   - Updates live URL

**Preview deployments:**

Push to any other branch:
```bash
git checkout -b feature/new-feature
git push origin feature/new-feature
```

Vercel creates a preview URL:
```
https://be-queen-admin-panel-abc123.vercel.app
```

---

## 📈 Production URLs

After deployment, you'll get:

- **Production:** `https://be-queen-admin-panel.vercel.app`
- **Custom Domain:** `https://admin.bequeen.qa` (if configured)
- **Preview:** `https://be-queen-admin-panel-git-[branch].vercel.app`

---

## 🎯 Post-Deployment

### 1. Verify Deployment

```bash
# Check if site is live
curl -I https://your-deployment-url.vercel.app

# Should return: HTTP/2 200
```

### 2. Test Features

- [ ] Login works
- [ ] Users page loads
- [ ] Pagination works
- [ ] Status changes work
- [ ] API calls succeed
- [ ] No console errors

### 3. Monitor Performance

Vercel Dashboard shows:
- Build time
- Deploy time
- Traffic analytics
- Error logs

### 4. Set Up Analytics (Optional)

Add Vercel Analytics:
```bash
npm install @vercel/analytics
```

In `src/main.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
        <Toaster position="top-right" />
        <Analytics /> {/* Add this */}
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
);
```

---

## 🆘 Getting Help

### Vercel Support:
- Documentation: https://vercel.com/docs
- Community: https://github.com/vercel/vercel/discussions

### Build Logs:
Check deployment logs in Vercel Dashboard → Deployments → [Your Deployment] → Build Logs

### Common Issues:
- Check environment variables are set correctly
- Ensure API backend is accessible from Vercel servers
- Verify CORS is configured on backend

---

## 🔐 Environment Variables Reference

### Development (`.env`):
```bash
VITE_API_BASE_URL=http://localhost:8000/api
VITE_ENABLE_MOCK_DATA=true
VITE_ENABLE_DEBUG=true
```

### Production (Vercel Dashboard):
```bash
VITE_API_BASE_URL=https://api.bequeen.qa/api
VITE_ENABLE_MOCK_DATA=false
VITE_ENABLE_DEBUG=false
```

### Staging (Optional):
```bash
VITE_API_BASE_URL=https://staging-api.bequeen.qa/api
VITE_ENABLE_MOCK_DATA=false
VITE_ENABLE_DEBUG=true
```

---

## ✅ Deployment Complete!

Your admin panel should now be live at:
**https://be-queen-admin-panel.vercel.app**

**Next Steps:**
1. Test all features in production
2. Configure custom domain
3. Set up monitoring
4. Share URL with team
