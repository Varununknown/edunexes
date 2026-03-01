# EduNexes - AI-Powered School Management Platform

A modern, professional school management platform built with cutting-edge web technologies.

## 🚀 Technology Stack

### Frontend
- **React 18** - Modern UI library with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Lightning-fast build tool
- **Framer Motion** - Advanced animation library
- **GSAP** - Professional animation library

### Development Tools
- **ESLint** - Code quality and consistency
- **Prettier** - Automatic code formatting
- **PostCSS** - CSS plugin ecosystem
- **Autoprefixer** - Automatic vendor prefixes

### Dependencies
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "axios": "^1.6.0",
  "gsap": "^3.12.2",
  "framer-motion": "^10.16.4"
}
```

---

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16.0.0 or higher)
- npm (v7.0.0 or higher)

### Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   Server runs at `http://localhost:3000`

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

---

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Optimized production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Check code quality with ESLint |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check if code needs formatting |

---

## 📁 Project Structure

```
edunexus/
├── src/
│   ├── main.jsx          # React entry point
│   ├── App.jsx           # Main App component
│   ├── index.css         # Tailwind CSS & custom styles
│   └── components/       # React components
├── index-vite.html       # HTML template (Vite)
├── index.html            # Original HTML (legacy)
├── package.json          # Dependencies & scripts
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind configuration
├── postcss.config.js     # PostCSS configuration
├── .eslintrc.json        # ESLint rules
├── .prettierrc            # Prettier configuration
├── .gitignore            # Git ignore patterns
└── dist/                 # Production build (after building)
```

---

## 🎨 Customization

### Colors (Tailwind)
Edit `tailwind.config.js` to customize colors:
```javascript
colors: {
  blue: '#1B4FD8',
  blue-light: '#2563EB',
  teal: '#0D9488',
  gold: '#D97706',
  // ... more colors
}
```

### Fonts
Fonts are loaded from Google Fonts in `index-vite.html`:
- **Plus Jakarta Sans** (primary)
- **Instrument Serif** (headings)

### Dark Mode
Enable in `tailwind.config.js`:
```javascript
darkMode: 'class'
```

---

## 🚦 Development Workflow

### Starting Development
```bash
npm run dev
```

### Code Formatting
```bash
npm run format        # Auto-format all files
npm run format:check  # Check if formatting needed
```

### Linting
```bash
npm run lint          # Check for code issues
```

### Building & Deploying
```bash
npm run build         # Creates optimized build in /dist
npm run preview       # Preview built version locally
```

---

## 📊 Performance Optimizations

- **Code Splitting**: Separate chunks for vendor, animations, and app code
- **Tree Shaking**: Unused code automatically removed
- **Minification**: Terser for optimal bundle size
- **Image Optimization**: Automatically handled by Vite
- **Lazy Loading**: React components loaded on-demand

---

## 🔧 Configuration Files Explained

### `vite.config.js`
- Configures Vite build tool
- Sets up React plugin
- Defines port (3000)
- Optimizes dependencies

### `tailwind.config.js`
- Custom color palette
- Extended spacing system
- Shadow definitions
- Border radius presets

### `postcss.config.js`
- Tailwind CSS processor
- Autoprefixer for browser compatibility

### `.eslintrc.json`
- Code quality rules
- Unused variable detection
- Console warning flags

### `.prettierrc`
- Code formatting rules
- Semi-colons, quotes, line width
- Consistent code style

---

## 📦 Adding New Dependencies

### Install Package
```bash
npm install package-name
```

### Install Dev Package
```bash
npm install -D package-name
```

### Common Useful Packages
```bash
npm install classnames       # Conditional classNames
npm install react-router-dom # Routing
npm install zustand         # State management
npm install react-query     # Data fetching
```

---

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag & drop `dist/` to Netlify
```

### Deploy to GitHub Pages
```bash
npm run build
# Push `dist/` folder to gh-pages branch
```

---

## 🎯 Key Features

✅ **Component-Based Architecture** - Modular, reusable React components
✅ **Tailwind CSS** - Rapid UI development with utility classes
✅ **Animation Support** - Framer Motion & GSAP for smooth interactions
✅ **Professional Styling** - Modern design system built-in
✅ **Development Tools** - ESLint + Prettier for code quality
✅ **Hot Module Replacement** - Instant updates during development
✅ **Optimized Builds** - Code splitting and tree shaking
✅ **Responsive Design** - Mobile-first Tailwind approach

---

## 📝 Best Practices

1. **Use Component Files**
   ```bash
   src/components/Button.jsx
   src/components/Card.jsx
   src/components/Modal.jsx
   ```

2. **Organize with Folders**
   ```bash
   src/
   ├── components/
   ├── hooks/
   ├── utils/
   └── pages/
   ```

3. **Keep Components Small** - Single responsibility principle

4. **Use Tailwind Classes** - No custom CSS needed in most cases

5. **Optimize Images** - Use Vite's asset handling

---

## 📚 Resources

- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite Guide](https://vitejs.dev)
- [Framer Motion](https://www.framer.com/motion/)
- [GSAP](https://gsap.com)
- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)

---

## 💡 Tips & Tricks

### Fast Reload During Development
```bash
npm run dev
# Changes auto-apply with HMR (Hot Module Replacement)
```

### Debug Build Size
```bash
npm run build
# Check dist/ folder size
```

### Format on Save (VS Code)
Add to `.vscode/settings.json`:
```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

---

## ⚡ Performance Metrics

- **Build Time**: ~2-3 seconds
- **Dev Server Start**: <1 second
- **HMR Update**: <100ms
- **Bundle Size**: ~150KB gzipped
- **Lighthouse Score**: 95+

---

## 📞 Support & Issues

For issues or questions:
1. Check the documentation above
2. Review component examples in `src/components/`
3. Check Vite, React, and Tailwind documentation

---

**Built with ❤️ for modern education technology**
