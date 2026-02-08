# Ngozai Website

A modern, Microsoft-inspired website for **Ngozai** — an AI consulting company specializing in SharePoint preparation for Microsoft Copilot deployment.

**Live at:** [https://ngozai.com](https://ngozai.com) *(update after deployment)*

---

## Quick Start

### Option 1: Live Server (Recommended for Development)

1. Open this folder in **Cursor IDE** or **VS Code**
2. Install the **Live Server** extension if not already installed
3. Right-click `index.html` → **Open with Live Server**
4. The website will open in your browser with live reload

### Option 2: Direct File Opening

1. Double-click `index.html` to open in any browser
2. All assets use relative paths — no server required

### Option 3: Local HTTP Server

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (npx)
npx serve .
```

Then open [http://localhost:8000](http://localhost:8000)

---

## Project Structure

```
ngozai-website/
├── index.html              # Main HTML structure (semantic, accessible)
├── styles.css              # Complete styling with responsive design
├── script.js               # Interactive functionality
├── README.md               # This file
├── _redirects              # Netlify SPA redirect rules
├── netlify.toml            # Netlify deployment configuration
├── vercel.json             # Vercel deployment configuration
└── assets/
    ├── images/             # Add your images here (og-image.jpg, etc.)
    └── icons/
        └── favicon.svg     # SVG favicon (add PNG versions too)
```

---

## Customization Guide

### Colors

Edit the CSS custom properties in `styles.css` (lines 17-33):

```css
:root {
    --primary-blue: #0078D4;      /* Microsoft Blue - primary brand */
    --secondary-blue: #00BCF2;    /* Light Blue - accent color */
    --purple: #8661C5;            /* Purple - secondary gradient */
    --dark-blue: #005A9E;         /* Dark Blue - hover states */
    --light-gray: #F3F2F1;       /* Background sections */
    --text-primary: #201F1E;      /* Main text */
    --text-secondary: #605E5C;    /* Secondary text */
}
```

### Content Sections

**Hero Section** — Update the headline, subtitle, and CTA buttons in `index.html`:
- Headline: Line ~93 (`<h1 class="hero-title">`)
- Subtitle: Line ~97 (`<p class="hero-subtitle">`)
- Buttons: Line ~101 (`<div class="hero-buttons">`)

**Solutions / Pricing** — Update pricing tiers:
- Tier 1 price: Search for `$5,000`
- Tier 2 price: Search for `$25,000`
- Tier 3: Search for `Custom pricing`

**Testimonials** — Replace placeholder testimonials:
- Find the `<section class="testimonials-section">` block
- Update names, titles, companies, and quotes
- Change avatar initials in `.author-avatar` elements

**About Section** — Update Michelle's bio and add a real photo

**Contact Info** — Update the email address (search for `hello@ngozai.com`)

### Adding Real Images

1. Place images in `assets/images/`
2. Replace SVG placeholders:

```html
<!-- Replace the about section placeholder -->
<div class="image-placeholder">
    <!-- Remove the SVG and add: -->
    <img src="assets/images/michelle.jpg"
         alt="Michelle, Founder of Ngozai"
         loading="lazy"
         width="400" height="400">
</div>
```

3. Add an Open Graph image (`assets/images/og-image.jpg`) — recommended size: 1200x630px
4. Add favicon PNGs:
   - `assets/icons/favicon-32x32.png`
   - `assets/icons/favicon-16x16.png`
   - `assets/icons/apple-touch-icon.png` (180x180px)

---

## Connecting the Contact Form

The contact form is pre-built with validation. You need to connect it to a form service.

### Option 1: Formspree (Recommended — Free Tier)

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form and copy the form ID
3. In `index.html`, replace:

```html
<form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" ...>
```

Replace `YOUR_FORM_ID` with your actual Formspree form ID.

### Option 2: Netlify Forms (If deploying on Netlify)

1. Add `netlify` attribute to the form tag:

```html
<form id="contact-form" name="contact" netlify ...>
```

2. Remove the `action` attribute
3. Form submissions appear in Netlify dashboard

### Option 3: Email Link (Simplest)

Replace the form with a direct email link:

```html
<a href="mailto:hello@ngozai.com?subject=Free%20Assessment%20Request"
   class="btn btn-primary">
    Email Us Directly
</a>
```

### Option 4: Calendly / Scheduling Tool

```html
<a href="https://calendly.com/your-link"
   class="btn btn-primary"
   target="_blank"
   rel="noopener noreferrer">
    Schedule Free Assessment
</a>
```

---

## Deployment

### Netlify (Recommended)

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) → **New site from Git**
3. Connect your GitHub repository
4. Build settings (auto-detected):
   - **Publish directory:** `.` (root)
   - No build command needed
5. Click **Deploy site**

The `netlify.toml` and `_redirects` files handle configuration automatically.

**Custom domain:** In Netlify dashboard → Domain settings → Add custom domain → Point your DNS

### Vercel

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com) → **Import Project**
3. Select your repository
4. Framework preset: **Other**
5. Deploy

The `vercel.json` file handles configuration automatically.

### GitHub Pages

1. Push code to a GitHub repository
2. Go to **Settings** → **Pages**
3. Source: **Deploy from a branch**
4. Branch: `main` (or `master`), folder: `/ (root)`
5. Your site will be live at `https://username.github.io/repo-name`

**Note:** All paths in the website are relative, so GitHub Pages works without changes.

---

## SEO Optimization

The website includes comprehensive SEO meta tags. To customize:

1. **Update canonical URL:** Replace `https://ngozai.com/` with your actual domain
2. **Update OG image:** Replace the `og:image` URL once you add a real OG image
3. **Google Analytics:** Add before `</head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

4. **Google Search Console:** Add verification meta tag in `<head>`:

```html
<meta name="google-site-verification" content="YOUR_VERIFICATION_CODE">
```

5. **Create a sitemap.xml** for larger sites

---

## Features

### Included

- Semantic HTML5 with WCAG 2.1 AA accessibility
- Skip-to-content link for keyboard navigation
- ARIA labels and roles throughout
- Reduced motion media query support
- Mobile-first responsive design (480px, 768px, 968px breakpoints)
- Hamburger menu with keyboard support (Escape to close)
- Smooth scroll navigation with active link highlighting
- Scroll-triggered fade-in animations (Intersection Observer)
- Timeline reveal animation for process section
- Animated stats counter
- Subtle parallax on hero background
- Full contact form with client-side validation
- Formspree-ready form submission
- Loading/success/error states on form
- Back-to-top floating button
- Cookie consent banner (GDPR compliant, localStorage)
- Page loading animation
- Social proof / testimonials section
- Microsoft-inspired design system
- Performance optimized (will-change, passive listeners, requestAnimationFrame)
- Security headers in deployment configs
- SEO meta tags (Open Graph, Twitter Card, canonical)

### Browser Support

- Chrome 80+
- Firefox 80+
- Safari 14+
- Edge 80+
- Mobile Safari / Chrome (iOS/Android)

---

## Troubleshooting

**Styles not loading?**
- Ensure `styles.css` is in the same folder as `index.html`
- Check browser console (F12) for 404 errors
- Verify relative paths are correct

**Animations not working?**
- Check if JavaScript is enabled in your browser
- Look for console errors (F12 → Console tab)
- If you prefer no animations, the site respects `prefers-reduced-motion` OS setting

**Mobile menu not working?**
- Clear browser cache (Ctrl+Shift+R / Cmd+Shift+R)
- Verify `script.js` is loaded (check Network tab in DevTools)

**Form not submitting?**
- Replace `YOUR_FORM_ID` in the form action with your real Formspree ID
- In demo mode (with placeholder ID), it simulates a successful submission
- Check browser console for network errors

**Cookie banner keeps showing?**
- Clear localStorage: `localStorage.removeItem('ngozai-cookie-consent')`

---

## Future Enhancements

- [ ] Blog / articles section
- [ ] Case studies with detailed results
- [ ] Video demo embed
- [ ] Real client testimonials with photos
- [ ] Newsletter signup integration
- [ ] Live chat widget (Intercom, Drift, etc.)
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Resource downloads (whitepapers, guides)
- [ ] Calendly integration for scheduling
- [ ] Analytics dashboard integration

---

## License

This website is created for Ngozai. All rights reserved.

**Contact:** hello@ngozai.com
