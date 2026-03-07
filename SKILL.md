# Algarve SimRacing Web Project Skill

## Project Overview
- **Repo**: https://github.com/macmagic-ai/algarvesimracing-web
- **Live URL**: https://macmagic-ai.github.io/algarvesimracing-web
- **Framework**: Next.js 14 with static export
- **Base Path**: `/algarvesimracing-web` (GitHub Pages)

## Key Technical Details

### Base Path Handling
- Use `bp()` helper from `@/lib/utils` for ALL asset paths
- `bp()` hardcoded to `/algarvesimracing-web` (not using env var to avoid hydration issues)
- Images in data files should NOT use `bp()` - apply it in components only
- Use regular `<img>` tags (not Next.js Image) for client-side rendered images to avoid hydration mismatches

### Design System
- **Primary Color**: `#FF3131` (red)
- **Secondary**: `#FF8A00` (orange)
- **Font Heading**: Rajdhani (500, 600, 700)
- **Font Body**: Space Grotesk
- **Theme**: Light mode only (dark mode disabled)

### Logo Assets
- Color logo: `/assets/asr-logo-color.svg`
- White logo: `/assets/asr-logo-white.svg` (for dark mode if re-enabled)
- Favicons: Generated from SVG at multiple sizes (16x16, 32x32, 48x48, etc.)

### Navigation Structure
1. Home
2. Simulators
3. Gallery
4. Pricing
5. FAQ
6. Community
7. About
8. Contact

### Page Titles
- Home: "Portugal's Premier Sim Racing Experience"
- Others: "{Page} | Algarve SimRacing"

### Important Files
- `src/lib/utils.ts` - `bp()` helper and `cn()` for class merging
- `src/data/site.ts` - Navigation links, contact info
- `src/data/instagram.ts` - Instagram posts data
- `src/data/driver-stories.ts` - Driver stories data
- `next.config.js` - Base path and export config

### Build & Deploy
```bash
npm run build    # Creates static export in `out/`
npm run deploy   # Deploys to gh-pages branch
```

### Common Issues
1. **Image paths**: Always use `bp()` in components, not in data files
2. **Hydration errors**: Use regular `<img>` for client components
3. **Favicon distortion**: Must be square - generate from SVG
4. **Logo size**: Current size is h-16 (64px) - adjust as needed

### Content Guidelines
- Use real Instagram posts from @algarvesimracing
- Use real driver names and stories from actual customers
- All photos should be from actual ASR sessions/events

## Owner Preferences (Gabor)
- Verify visually after each change
- Use real content, not fake/generated
- Logo should be prominent in navbar
- Light mode only (no dark mode for now)
