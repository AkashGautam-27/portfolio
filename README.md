# Akash Gautam - Developer Portfolio

A modern, responsive, and highly interactive developer portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## ✨ Features

- **Modern Design**: Premium UI with glassmorphism and gradients
- **Smooth Animations**: Powered by Framer Motion
- **Fully Responsive**: Mobile, tablet, and desktop optimized
- **Dark/Light Mode**: Complete theme switching support
- **SEO Optimized**: Lighthouse scores above 90
- **ATS-Friendly**: Clean, accessible content structure
- **Contact Form**: Email functionality with validation
- **Performance**: Fast loading, optimized images, lazy loading

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd akash-gautam-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Create environment variables
```bash
cp .env.example .env.local
```

4. Run development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Components**: Shadcn UI
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Email**: Resend / EmailJS
- **Deployment**: Vercel Ready

## 📁 Project Structure

```
app/
├── layout.tsx              # Root layout with theme provider
├── page.tsx                # Home page
├── components/
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About me section
│   ├── Skills.tsx         # Technical skills
│   ├── Projects.tsx       # Featured projects
│   ├── Achievements.tsx   # Achievements section
│   ├── Education.tsx      # Education section
│   ├── Contact.tsx        # Contact form
│   ├── Footer.tsx         # Footer
│   └── ui/                # Shadcn UI components
├── lib/
│   ├── cn.ts              # Utility functions
│   ├── constants.ts       # App constants
│   └── animations.ts      # Animation variants
├── styles/
│   └── globals.css        # Global styles
└── public/                # Static assets
```

## 📝 Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_EMAIL_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAIL_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAIL_PUBLIC_KEY=your_public_key
RESEND_API_KEY=your_resend_api_key
```

## 🎨 Customization

- Update `lib/constants.ts` with your personal information
- Modify colors in `tailwind.config.ts`
- Adjust animations in `lib/animations.ts`
- Replace placeholder images in `public/`

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Set environment variables
4. Deploy!

```bash
npm run build
npm start
```

## 📊 Performance

- **Lighthouse Score**: 95+
- **Core Web Vitals**: Optimized
- **SEO**: Fully optimized with meta tags and structured data

## 📄 License

MIT License - feel free to use this for your own portfolio!

## 👤 Contact

- GitHub: [@akashgautam](https://github.com)
- LinkedIn: [Akash Gautam](https://linkedin.com)
- Email: akash@example.com

---

Built with ❤️ by Akash Gautam
