# 🚀 Ghost IDE - Official Website

A modern, responsive website for **Ghost IDE**, the fast and powerful code editor for Android. Built with Next.js, TypeScript, and Tailwind CSS.

![Ghost IDE Website](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

### 🎨 **Modern Design**
- **Dark theme** with gradient accents
- **Glass-morphism** effects and animations
- **Responsive design** for all devices
- **Smooth animations** and transitions

### 📱 **Mobile-First**
- **Mobile drawer navigation** with smooth slide animations
- **Touch-friendly** interface
- **Image viewer** with zoom and pan functionality
- **Optimized** for mobile performance

### 🖼️ **Interactive Components**
- **Screenshot slider** with auto-play functionality
- **Full-screen image viewer** with zoom controls
- **Smooth scroll** navigation between sections
- **Hover effects** and micro-interactions

### 🚀 **Performance**
- **Next.js 14** with App Router
- **Optimized images** with Next.js Image component
- **Lazy loading** for better performance
- **SEO optimized** structure

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/code3-dev/ghost-ide-website.git
   cd ghost-ide-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
ghost-ide-website/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── image-viewer.tsx     # Full-screen image viewer
│   ├── mobile-drawer.tsx    # Mobile navigation drawer
│   ├── screenshot-slider.tsx # Screenshot carousel
│   └── smooth-scroll.tsx    # Smooth scroll handler
├── hooks/
│   └── use-mobile.tsx       # Mobile detection hook
├── lib/
│   └── utils.ts             # Utility functions
└── public/
    └── images/              # Static images
```

## 🎯 Key Components

### **Mobile Navigation**
- Slide-in drawer from the right
- Dark background with gradient accents
- Touch-friendly navigation links
- Auto-close on link click

### **Image Viewer**
- Full-screen modal with zoom functionality
- Pan and zoom with mouse/touch
- Keyboard navigation support
- Smooth transitions between images

### **Screenshot Slider**
- Auto-playing carousel
- Manual navigation controls
- Progress indicator
- Click to open full-screen viewer

## 🎨 Design System

### **Colors**
- **Primary**: Purple to Pink gradients
- **Background**: Pure black (#000000)
- **Text**: White and gray variants
- **Accents**: Blue, Green, Orange gradients

### **Typography**
- **Headings**: Geist Sans (Bold/Black weights)
- **Body**: Geist Sans (Regular/Medium weights)
- **Code**: Geist Mono

### **Animations**
- **Duration**: 200-500ms transitions
- **Easing**: Smooth ease-out curves
- **Hover**: Scale and color transitions
- **Loading**: Smooth fade-ins

## 📱 Mobile Features

### **Navigation**
- Hamburger menu with smooth animations
- Full-screen overlay with backdrop blur
- Touch-friendly button sizes
- Gradient icon backgrounds

### **Image Viewing**
- Tap to open full-screen viewer
- Pinch to zoom functionality
- Swipe navigation between images
- Touch-friendly controls

## 🚀 Performance Optimizations

- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic with Next.js App Router
- **CSS Optimization**: Tailwind CSS purging
- **Bundle Analysis**: Built-in Next.js analyzer

### **Components**
All components are in the \`components/\` directory and can be easily customized.

### **Content**
Update the content in \`app/page.tsx\` to match your needs.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Ghost IDE App**: [GitHub Repository](https://github.com/HanzoDev1375/Ghostide)
- **Download**: [Latest Release](https://github.com/HanzoDev1375/Ghostide/releases/latest)
- **Community**: [Telegram Group](https://t.me/ghost_web_ide)
- **Updates**: [Telegram Channel](https://t.me/Ghostwebide)
- **Themes**: [Theme Creation Guide](https://github.com/HanzoDev1375/ghosttheme)

## 🙏 Acknowledgments

- **Next.js** team for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **shadcn/ui** for the beautiful component library
- **Lucide** for the icon set
- **Vercel** for hosting and deployment

---

**Built with ❤️ for the Ghost IDE community**