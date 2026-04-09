# Custom Domain Setup

Use this checklist to move from localhost to a clean custom URL.

## 1) Buy a Domain
- Providers: Namecheap, GoDaddy, Google Domains alternatives.
- Example target: `hemsuriya.dev`

## 2) Connect to Hosting
Choose one platform and follow its domain wizard:
- Vercel: Project -> Settings -> Domains
- Netlify: Site Settings -> Domain management
- GitHub Pages: Repository -> Settings -> Pages -> Custom domain

## 3) DNS Records
Add records from your hosting provider dashboard.
Typical setup:
- `A` record for apex (`@`) to hosting IP
- `CNAME` for `www` to your hosting target

## 4) HTTPS
Enable SSL/TLS in hosting settings (usually automatic).

## 5) Final Meta/Canonical Update
After domain is live, update `public/index.html`:
- Add `<link rel="canonical" href="https://your-domain.com/" />`
- Set `og:url` to your real domain

## 6) Verify
- Open both `https://your-domain.com` and `https://www.your-domain.com`
- Ensure one redirects to your preferred canonical URL.