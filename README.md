# Oriel Malik - Professional Portfolio

A modern, responsive portfolio website showcasing backend development and QA automation expertise.

## 🚀 Features

- **Dual-Persona Toggle**: Switch between Backend Developer and QA Automation Engineer views
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Professional vibrant color palette with smooth animations
- **Project Showcase**: Featured projects with detailed modals
- **Interactive Elements**: Smooth scrolling, hover effects, and dynamic content
- **SEO Optimized**: Proper meta tags and semantic HTML

## 📁 Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── styles.css              # Stylesheet with professional vibrant theme
├── script.js               # Interactive JavaScript features
├── IMG_20220420_140643.jpg # Profile image
├── automation-methods-preview.jpg  # Automation-Methods project image
├── mista-preview.jpg       # MISTA project image
├── flaskorm-preview.jpg    # FlaskOrm project image
├── Oriel Malik cv.pdf      # Backend Developer CV
├── ‏‏Oriel Malik cv  qa.pdf # QA Engineer CV
└── README.md               # This file
```

## 🎨 Design Features

### Color Palette
- **Primary Dark**: #0A192F (Deep navy backgrounds)
- **Primary Accent**: #64FFDA (Teal highlights and links)
- **Secondary Accent**: #FF6B9D (Coral pink CTAs and badges)
- **Tertiary Accent**: #FFC947 (Golden yellow achievements)

### Layout Strategy
- **Desktop (>1200px)**: 3-column grid with hero project spanning 2 columns
- **Tablet (768px-1200px)**: Horizontal scroll with snap points
- **Mobile (<768px)**: Vertical stack with Automation-Methods first

## 🌐 Deployment Options

### Option 1: GitHub Pages (Recommended)

1. Create a new GitHub repository named `portfolio` or `<username>.github.io`
2. Push all files to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/orielmalik/portfolio.git
   git push -u origin main
   ```
3. Go to repository Settings → Pages
4. Select branch: `main`, folder: `/ (root)`
5. Click Save
6. Your site will be live at `https://orielmalik.github.io/portfolio/`

### Option 2: Netlify

1. Sign up at [netlify.com](https://www.netlify.com)
2. Drag and drop the portfolio folder to Netlify
3. Your site will be live instantly with a custom URL
4. Optional: Configure custom domain in Site Settings

### Option 3: Vercel

1. Sign up at [vercel.com](https://vercel.com)
2. Install Vercel CLI: `npm install -g vercel`
3. Navigate to portfolio folder and run: `vercel`
4. Follow prompts to deploy
5. Your site will be live with automatic HTTPS

### Option 4: Local Development

Simply open `index.html` in your web browser to view locally.

For a local server (recommended for testing):
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 📄 PDF Version for Recruitment Systems

To create a PDF version for upload to recruitment systems:

### Method 1: Browser Print
1. Open `index.html` in Chrome/Edge
2. Press `Ctrl+P` (Windows) or `Cmd+P` (Mac)
3. Select "Save as PDF"
4. Adjust settings:
   - Layout: Portrait
   - Margins: None
   - Background graphics: Enabled
5. Save as `Oriel_Malik_Portfolio.pdf`

### Method 2: Online Tools
- Use [HTML to PDF](https://www.html2pdf.com/)
- Upload `index.html` and download PDF

### Method 3: Puppeteer (Automated)
```javascript
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('file:///path/to/portfolio/index.html', {
    waitUntil: 'networkidle0'
  });
  await page.pdf({
    path: 'Oriel_Malik_Portfolio.pdf',
    format: 'A4',
    printBackground: true
  });
  await browser.close();
})();
```

## 🔧 Customization

### Update Personal Information
Edit `index.html`:
- Line 67-70: Update social media links
- Line 52-58: Update hero description
- Line 414-426: Update contact details

### Change Colors
Edit `styles.css` (lines 6-20):
```css
:root {
    --primary-dark: #0A192F;
    --primary-accent: #64FFDA;
    --secondary-accent: #FF6B9D;
    /* ... modify as needed */
}
```

### Add New Projects
1. Add project card HTML in `index.html` (around line 200)
2. Add project details in `script.js` `projectDetails` object (around line 80)
3. Add project image to  folder

## 📱 Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 SEO Best Practices

- ✅ Semantic HTML5 elements
- ✅ Meta descriptions and keywords
- ✅ Open Graph tags for social sharing
- ✅ Proper heading hierarchy (single H1)
- ✅ Alt text for images
- ✅ Fast load times with optimized images

## 📊 Performance Optimization

- Lazy loading for images
- Minified CSS and JS (for production)
- WebP format for images (recommended)
- Preload critical assets
- Efficient animations with CSS transforms

## 🤝 Contact

- **Email**: oriel.malik@gmail.com
- **Phone**: 058-730-6070
- **Location**: Tel Aviv, Israel
- **GitHub**: [github.com/orielmalik](https://github.com/orielmalik)
- **LinkedIn**: [linkedin.com/in/orielmalik](https://linkedin.com/in/orielmalik)

## 📝 License

This portfolio is personal property. Feel free to use the code structure as inspiration for your own portfolio, but please don't copy content directly.

---

**Built with**: HTML • CSS • JavaScript  
**Last Updated**: January 2026  
**Version**: 1.0.0
