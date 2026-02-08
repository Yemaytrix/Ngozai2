# Ngozai Website

A modern, Microsoft Edge-inspired website for Ngozai - AI consulting company specializing in SharePoint preparation for Microsoft Copilot deployment.

## Quick Start

### Opening in Cursor IDE

1. Open Cursor IDE
2. Click **File** → **Open Folder**
3. Navigate to and select the `ngozai-website` folder
4. The project structure will appear in the sidebar

### Running the Website

**Option 1: Live Server (Recommended)**
1. Install the "Live Server" extension in Cursor if not already installed
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. The website will open in your default browser with live reload

**Option 2: Direct File Opening**
1. Right-click on `index.html`
2. Select "Reveal in File Explorer" (Windows) or "Reveal in Finder" (Mac)
3. Double-click `index.html` to open in your browser

## 📁 Project Structure

```
ngozai-website/
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # Interactive functionality
└── README.md          # This file
```

## 🎨 Customization Guide

### Colors
Edit the CSS variables in `styles.css` (lines 9-17):

```css
:root {
    --primary-blue: #0078D4;      /* Primary brand color */
    --secondary-blue: #00BCF2;    /* Accent color */
    --purple: #8661C5;            /* Secondary gradient */
    /* ... more colors */
}
```

### Content

**Hero Section** (index.html, line 36):
- Change the main headline
- Update the subtitle
- Modify call-to-action buttons

**Solutions/Pricing** (index.html, line 161):
- Update pricing tiers
- Modify feature lists
- Change pricing amounts

**About Section** (index.html, line 304):
- Replace placeholder content with your story
- Add Michelle's photo (replace the SVG placeholder)

**Contact Information** (index.html, line 403):
- Update email address
- Add phone number if desired
- Link to social media

### Images

To add real images:

1. Create an `images` folder in the project root
2. Add your images to this folder
3. Replace SVG placeholders in `index.html`:

```html
<!-- Replace this -->
<div class="image-placeholder">
    <svg>...</svg>
</div>

<!-- With this -->
<img src="images/your-photo.jpg" alt="Description">
```

### Buttons & CTAs

The buttons currently show alerts. To connect to actual forms:

**Option 1: Email Links**
```html
<a href="mailto:hello@ngozai.com?subject=Free Assessment Request" class="btn btn-primary">
    Start Your Assessment
</a>
```

**Option 2: Contact Form**
Add a form service like:
- Formspree
- Netlify Forms
- Google Forms

**Option 3: Scheduling Tool**
```html
<a href="https://calendly.com/your-link" class="btn btn-primary" target="_blank">
    Schedule Free Assessment
</a>
```

## 🌐 Deployment

### Option 1: Netlify (Recommended - Free)

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Connect your GitHub repository
5. Deploy!

Your site will be live at: `https://your-site-name.netlify.app`

### Option 2: Vercel (Free)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy automatically

### Option 3: GitHub Pages (Free)

1. Push code to GitHub repository
2. Go to repository Settings → Pages
3. Select main branch as source
4. Your site will be at: `https://username.github.io/repo-name`

## 🔧 Advanced Customization

### Adding Analytics

Add Google Analytics before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Adding a Contact Form

Add this in the CTA section (replace the buttons):

```html
<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <input type="text" name="name" placeholder="Your Name" required>
    <input type="email" name="email" placeholder="Your Email" required>
    <input type="text" name="company" placeholder="Company Name">
    <textarea name="message" placeholder="Tell us about your Copilot challenge" required></textarea>
    <button type="submit" class="btn btn-primary">Send Message</button>
</form>
```

### SEO Optimization

Add to `<head>` section:

```html
<!-- SEO Meta Tags -->
<meta name="description" content="Transform messy SharePoint into AI-ready data. Make Microsoft Copilot actually work with Ngozai's automated data organization.">
<meta name="keywords" content="Microsoft Copilot, SharePoint, AI consulting, Data organization, Power Platform">
<meta name="author" content="Ngozai">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:title" content="Ngozai - Make Microsoft Copilot Actually Work">
<meta property="og:description" content="AI-ready SharePoint transformation for real Copilot ROI">
<meta property="og:image" content="https://your-domain.com/images/og-image.jpg">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Ngozai - AI-Ready SharePoint Solutions">
<meta name="twitter:description" content="Transform messy SharePoint into AI-ready data">
```

## 📱 Mobile Responsiveness

The website is fully responsive and tested on:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎯 Key Features

- ✅ Modern, Microsoft Edge-inspired design
- ✅ Smooth scroll animations
- ✅ Responsive navigation
- ✅ Interactive cards with hover effects
- ✅ Gradient backgrounds and floating orbs
- ✅ Timeline animation for process section
- ✅ Mobile-friendly hamburger menu
- ✅ Optimized performance
- ✅ Clean, semantic HTML
- ✅ Accessible design

## 🐛 Troubleshooting

**Styles not loading?**
- Ensure `styles.css` is in the same folder as `index.html`
- Check browser console for errors (F12)

**Animations not working?**
- Ensure `script.js` is in the same folder
- Check if JavaScript is enabled in browser

**Mobile menu not working?**
- Clear browser cache
- Check console for JavaScript errors

## 📞 Support

For questions or customization help:
- Email: hello@ngozai.com
- Review the code comments for guidance
- Each section is clearly marked in the HTML

## 🔄 Future Enhancements

Consider adding:
- [ ] Blog section
- [ ] Case studies page
- [ ] Client testimonials
- [ ] Video demos
- [ ] Resource downloads
- [ ] Newsletter signup
- [ ] Live chat integration
- [ ] Multi-language support

## 📝 License

This website is created for Ngozai. All rights reserved.

---

Built with ❤️ - Ngozai
