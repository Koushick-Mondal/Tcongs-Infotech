# Tcongs Infotech 

![Tcongs Infotech](https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop)

> **Award-winning, high-end software solutions designed for the future.**

Welcome to the official repository for the Tcongs Infotech website. This platform is built with a focus on ultra-premium UI/UX, physics-based interactions, and cutting-edge web performance.

## 🚀 Technologies Used

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Styling**: Vanilla CSS Modules (Custom Design System)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Smooth Scrolling**: [Lenis](https://lenis.studiofreight.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## ✨ Key Features

- **Advanced Physics Interactivity**: Magnetic buttons that organically track the user's cursor.
- **Dynamic Mouse Spotlights**: Real-time cursor coordinate tracking to generate glowing WebGL-style borders on cards.
- **Inertia Scrolling**: Apple-tier smooth scrolling via Lenis.
- **Staggered Reveals**: Spring-based typography animations for hero sections.
- **Glassmorphism**: Advanced backdrop filters and noise overlays for a premium aesthetic.

## 🛠️ Local Development

To run this project locally on your machine:

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run the Development Server**
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Deployment Instructions

If you are seeing this README file on your live website, it means your hosting provider (like GitHub Pages, Hostinger, or cPanel) is trying to serve the raw project files instead of building the Next.js React application.

Next.js is a React framework that requires a build step. You cannot just upload the source code files to a basic web host.

### Option A: Deploy on Vercel (Recommended & Easiest)
1. Go to [Vercel.com](https://vercel.com/) and sign up with your GitHub account.
2. Click **Add New Project** and import your Tcongs Infotech GitHub repository.
3. Vercel will automatically detect Next.js. Just click **Deploy**. It will handle everything automatically.

### Option B: Static Export (For GitHub Pages, cPanel, Hostinger)
If you are using a host that only supports static HTML files (no Node.js server):

1. Open `next.config.ts` (or `next.config.mjs`) and add the export configuration:
   ```typescript
   import type { NextConfig } from "next";

   const nextConfig: NextConfig = {
     output: "export",
     images: {
       unoptimized: true,
     }
   };

   export default nextConfig;
   ```
2. Run the build command on your machine:
   ```bash
   npm run build
   ```
3. This will create a new folder called `out/`. 
4. **Upload the contents of the `out/` folder** to your hosting provider (cPanel, Hostinger, etc.). Do not upload the root folder.
