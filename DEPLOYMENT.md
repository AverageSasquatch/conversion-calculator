# Deployment Guide for Hostinger

This guide covers deploying the Unit Converter website to Hostinger.

## Option 1: Static Export (Recommended for Shared Hosting)

Hostinger shared hosting works best with static files. Since this is a Next.js static site, we can export it.

### Step 1: Enable Static Export

The site is already configured for Static Site Generation (SSG). To create a static export:

1. Update `next.config.ts` to add `output: 'export'`:

```typescript
const nextConfig: NextConfig = {
  output: 'export',  // Add this line
  // ... rest of config
};
```

2. Build the static export:

```bash
npm run build
```

3. The static files will be in the `out` directory.

### Step 2: Upload to Hostinger

1. Log in to your Hostinger hPanel
2. Go to **File Manager** → `public_html`
3. Delete any existing files (backup first if needed)
4. Upload all contents from the `out` folder
5. Make sure `index.html` is at the root level

### Step 3: Configure .htaccess (for clean URLs)

Create a `.htaccess` file in `public_html`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Remove .html extension
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME}\.html -f
  RewriteRule ^(.*)$ $1.html [L]
  
  # Handle 404 errors
  ErrorDocument 404 /404.html
</IfModule>

# Enable GZIP compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/css application/javascript application/json
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

---

## Option 2: Node.js Hosting (VPS/Cloud)

If you have Hostinger VPS or Cloud hosting with Node.js support:

### Step 1: Upload Project Files

Upload the entire project (excluding `node_modules`) via:
- **SSH/SFTP**
- **Git deployment**
- **hPanel File Manager**

### Step 2: Install Dependencies

Connect via SSH and run:

```bash
cd ~/public_html
npm install --production
npm run build
```

### Step 3: Start the Server

Using PM2 (recommended for production):

```bash
npm install -g pm2
pm2 start npm --name "unit-converter" -- start
pm2 save
pm2 startup
```

### Step 4: Configure Port

If using a custom port, update your Node.js app settings in hPanel to point to port 3000.

---

## Environment Variables

Set these in Hostinger hPanel (Advanced → Environment Variables) or in a `.env.local` file:

```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

---

## Post-Deployment Checklist

- [ ] Verify homepage loads correctly
- [ ] Test all 23 converter pages
- [ ] Check dark mode toggle works
- [ ] Verify sitemap at `/sitemap.xml`
- [ ] Submit sitemap to Google Search Console
- [ ] Test on mobile devices
- [ ] Check HTTPS is enforced
- [ ] Run Lighthouse audit

---

## Troubleshooting

### 404 Errors on Refresh
- Ensure `.htaccess` is properly configured
- Check RewriteEngine is enabled in Apache

### CSS Not Loading
- Clear browser cache
- Verify CSS files were uploaded correctly

### Slow Loading
- Enable GZIP compression
- Check cache headers are set

---

## Domain Configuration

1. Go to Hostinger hPanel → Domains
2. Point your domain to the hosting
3. Enable SSL certificate (free with Hostinger)
4. Force HTTPS redirect

---

## Updates

To update the site:

1. Make changes locally
2. Run `npm run build`
3. Upload new files from `out` folder (or push via Git)
4. Clear CDN/browser cache if needed

