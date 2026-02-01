# Portfolio to PDF Conversion Guide

This guide will help you create a professional PDF version of your portfolio for recruitment systems like Greenhouse, Workday, Commit, and Spark.

## Why PDF for Recruitment Systems?

✅ **Preserves formatting** across all systems  
✅ **Searchable text** for ATS (Applicant Tracking Systems)  
✅ **Clickable hyperlinks** for LinkedIn, GitHub, and projects  
✅ **Universal compatibility** - works everywhere  
✅ **Professional appearance** - looks polished  

❌ **Avoid**: ZIP files, executables, or HTML files (compatibility issues)

## Method 1: Browser Print to PDF (Recommended)

### Chrome/Edge Steps:
1. Open `index.html` in Chrome or Edge browser
2. Press `Ctrl+P` (Windows) or `Cmd+P` (Mac)
3. Configure print settings:
   - **Destination**: Save as PDF
   - **Layout**: Portrait
   - **Pages**: All
   - **Margins**: None (or Minimum)
   - **Scale**: 100% (adjust if needed)
   - **Options**: ✅ Background graphics
4. Click "Save" and name it: `Oriel_Malik_Portfolio.pdf`

### Firefox Steps:
1. Open `index.html` in Firefox
2. Press `Ctrl+P` (Windows) or `Cmd+P` (Mac)
3. Configure settings:
   - **Destination**: Save to PDF
   - **Orientation**: Portrait
   - **Print backgrounds**: ✅ Enabled
4. Click "Save"

## Method 2: Online HTML to PDF Converter

### Option A: HTML2PDF.com
1. Go to https://www.html2pdf.com/
2. Click "Upload HTML file"
3. Select `index.html`
4. Click "Convert"
5. Download the generated PDF

### Option B: CloudConvert
1. Go to https://cloudconvert.com/html-to-pdf
2. Upload `index.html`
3. Click "Convert"
4. Download the PDF

## Method 3: Puppeteer (For Developers)

If you have Node.js installed, you can automate PDF generation:

### Install Puppeteer:
```bash
npm install puppeteer
```

### Create `generate-pdf.js`:
```javascript
const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  console.log('Launching browser...');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  const htmlPath = 'file://' + path.resolve(__dirname, 'index.html');
  console.log('Loading portfolio:', htmlPath);
  
  await page.goto(htmlPath, {
    waitUntil: 'networkidle0'
  });
  
  console.log('Generating PDF...');
  await page.pdf({
    path: 'Oriel_Malik_Portfolio.pdf',
    format: 'A4',
    printBackground: true,
    margin: {
      top: '0.5cm',
      right: '0.5cm',
      bottom: '0.5cm',
      left: '0.5cm'
    }
  });
  
  await browser.close();
  console.log('PDF generated successfully: Oriel_Malik_Portfolio.pdf');
})();
```

### Run the script:
```bash
node generate-pdf.js
```

## Method 4: wkhtmltopdf (Command Line)

### Install wkhtmltopdf:
- **Windows**: Download from https://wkhtmltopdf.org/downloads.html
- **Mac**: `brew install wkhtmltopdf`
- **Linux**: `sudo apt-get install wkhtmltopdf`

### Generate PDF:
```bash
wkhtmltopdf --enable-local-file-access --print-media-type index.html Oriel_Malik_Portfolio.pdf
```

## PDF Optimization Tips

### 1. Check Hyperlinks
After generating the PDF, verify that all links work:
- GitHub profile link
- LinkedIn profile link
- Project repository links
- Email link

### 2. File Size
Keep the PDF under 5MB for easy upload:
- If too large, compress images before generating PDF
- Use online PDF compressors like https://www.ilovepdf.com/compress_pdf

### 3. Test Readability
- Open the PDF and check text is selectable (not an image)
- Verify colors are visible (some systems print in grayscale)
- Ensure all sections are included

### 4. Naming Convention
Use a professional filename:
- ✅ `Oriel_Malik_Portfolio.pdf`
- ✅ `Oriel_Malik_Backend_Developer_Portfolio.pdf`
- ❌ `portfolio.pdf` (too generic)
- ❌ `my_website.pdf` (unprofessional)

## Uploading to Recruitment Systems

### Greenhouse
- Accepts: PDF, DOC, DOCX (max 10MB)
- **Recommendation**: Use PDF for best compatibility

### Workday
- Accepts: PDF, DOC, DOCX, TXT (max 5MB)
- **Recommendation**: Use PDF, keep under 5MB

### Commit
- Accepts: PDF, DOC, DOCX (max 10MB)
- **Recommendation**: PDF with clickable links

### Spark
- Accepts: PDF, DOC (max 5MB)
- **Recommendation**: Compressed PDF

## Alternative: Link to Live Website

Instead of uploading a PDF, you can also:
1. Deploy your portfolio to GitHub Pages (free)
2. Share the live URL in your application
3. Include the URL in your CV/resume

**Example**: "View my interactive portfolio at: https://orielmalik.github.io/portfolio"

This gives recruiters:
- ✅ Full interactive experience
- ✅ Always up-to-date content
- ✅ Better showcase of your projects
- ✅ Demonstrates web deployment skills

## Troubleshooting

### Issue: Images not showing in PDF
**Solution**: Ensure images are in the same folder as `index.html` before generating PDF

### Issue: Colors look washed out
**Solution**: Enable "Background graphics" or "Print backgrounds" in print settings

### Issue: PDF is too large
**Solution**: 
1. Compress images using https://tinypng.com/
2. Use online PDF compressor
3. Reduce image quality in generation settings

### Issue: Links not clickable
**Solution**: Use Method 1 (Browser Print) or Method 3 (Puppeteer) - both preserve hyperlinks

## Final Checklist

Before submitting your PDF portfolio:

- [ ] All text is selectable (not an image)
- [ ] All hyperlinks are clickable
- [ ] Images are visible and clear
- [ ] File size is under 5MB
- [ ] Filename is professional
- [ ] All sections are included (Hero, About, Projects, Skills, Experience, Contact)
- [ ] Contact information is accurate
- [ ] No broken links

---

**Need Help?**  
Contact: oriel.malik@gmail.com

**Last Updated**: January 2026
