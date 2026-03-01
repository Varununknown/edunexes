# ⚡ Quick Start Guide - EduNexus Modern Setup

## 🎯 What You Need to Know

You now have a **production-ready, modern web development environment** with:
- ✅ React 18 (latest version)
- ✅ Tailwind CSS (utility-first styling)
- ✅ Vite (lightning-fast build tool)
- ✅ Framer Motion (smooth animations)
- ✅ GSAP (professional animations)
- ✅ ESLint + Prettier (code quality)
- ✅ Axios (API requests)

---

## 🚀 Getting Started (5 Minutes)

### Step 1: Install Dependencies
```bash
npm install
```
**First time only** - Creates node_modules folder with all packages

---

### Step 2: Start Development
```bash
npm run dev
```
✅ Opens http://localhost:3000 automatically
✅ Auto-refreshes when you edit files (HMR)

---

### Step 3: Start Coding!
Edit files in `src/` folder:
```
src/
├── App.jsx          ← Main component
├── main.jsx        ← Entry point
├── index.css       ← Global styles
└── components/     ← Your components
```

---

## 📝 Making Your First Component

Create `src/components/Feature.jsx`:

```jsx
import { motion } from 'framer-motion'
import { Card, Button } from './index'

export const Feature = ({ icon, title, description }) => {
  return (
    <Card>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="p-6"
      >
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button variant="outline">Learn More →</Button>
      </motion.div>
    </Card>
  )
}
```

Use it in `App.jsx`:
```jsx
import { Feature } from './components/Feature'

<Feature
  icon="🎓"
  title="Student Management"
  description="Complete student profiles and tracking"
/>
```

---

## 🎨 Styling with Tailwind

No CSS files needed! Just use Tailwind classes:

```jsx
<div className="max-w-4xl mx-auto px-8 py-12">
  <h1 className="text-4xl font-bold text-blue mb-6">
    Hello EduNexus
  </h1>
  <p className="text-lg text-gray-600 leading-relaxed">
    Built with Tailwind CSS
  </p>
</div>
```

### Common Tailwind Classes
```
Spacing:     m-4, p-6, gap-8
Text:        text-2xl, font-bold, text-blue
Colors:      bg-white, text-gray-600, border-blue
Layout:      flex, grid, max-w-4xl
Responsive:  md:text-2xl lg:flex
Shadows:     shadow-lg, shadow-blue
```

---

## ✨ Adding Animations

### Framer Motion
```jsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Animated Content
</motion.div>
```

### GSAP (for complex animations)
```jsx
import gsap from 'gsap'
import { useEffect, useRef } from 'react'

const ref = useRef()

useEffect(() => {
  gsap.to(ref.current, {
    duration: 1,
    rotation: 360,
    opacity: 0.5,
  })
}, [])

return <div ref={ref}>Rotating Element</div>
```

---

## 📦 Using API with Axios

```jsx
import axios from 'axios'
import { useEffect, useState } from 'react'

export const DataFetcher = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('/api/students')
      .then(res => setData(res.data))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div>Loading...</div>
  return <div>{JSON.stringify(data)}</div>
}
```

---

## 🧹 Code Quality

### Format Code
```bash
npm run format
```
Automatically fixes formatting in all files

### Check for Errors
```bash
npm run lint
```
Shows code quality issues to fix

---

## 🏗️ Project Structure Tips

**Good Structure:**
```
src/
├── components/
│   ├── common/           ← Button, Card, Modal
│   ├── sections/         ← Hero, Features, CTA
│   ├── layouts/          ← Header, Footer, Sidebar
│   └── index.js
├── hooks/               ← Custom React hooks
├── utils/               ← Helper functions
├── styles/              ← Global styles
└── App.jsx
```

---

## 📱 Responsive Design

Tailwind makes responsive easy:

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* 1 column on mobile, 2 on tablet, 3 on desktop */}
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</div>
```

### Breakpoints
- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px
- `xl:` - 1280px
- `2xl:` - 1536px

---

## 🚢 Building for Production

```bash
npm run build
```

Creates optimized `dist/` folder ready to deploy:

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
Drag & drop `dist/` folder to Netlify

### Deploy Anywhere
Upload `dist/` folder to any web server

---

## 🐛 Common Issues & Fixes

### Port 3000 in use?
```bash
# Stop other dev servers or use different port
# Edit vite.config.js: port: 3001
```

### Node modules too large?
```bash
rm -rf node_modules
npm ci               # Clean install
```

### Code not updating?
```bash
# Clear browser cache
# Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
```

---

## 📚 Learning Resources

- [React Tutorial](https://react.dev/learn)
- [Tailwind Examples](https://tailwindcss.com/docs/installation)
- [Vite Guide](https://vitejs.dev/guide/)
- [Framer Motion Tutorial](https://www.framer.com/motion/gestures/)

---

## ✅ You're Ready!

Everything is set up. Now:

1. **Run** `npm run dev` to start
2. **Edit** files in `src/`
3. **See** changes instantly
4. **Build** with `npm run build`
5. **Deploy** the `dist/` folder

**Have fun building!** 🚀

---

**Questions?** Check README.md or TECH_STACK.md
