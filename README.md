# Unit Converter Website

A minimal viable website (MVW) for unit conversions with SEO-optimized pages, clean UI, and basic monetization placeholders.

## 🚀 Features

- **Fast Conversions**: Real-time unit conversion as you type
- **SEO Optimized**: Each converter has its own URL and meta tags for search engine visibility
- **Responsive Design**: Works beautifully on desktop, tablet, and mobile
- **Accessible**: Keyboard navigable with proper ARIA labels and color contrast
- **Modern Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS

## 📐 Available Converters

### Weight
- Pounds ↔ Kilograms (`/weight/pounds-to-kilograms`)
- Ounces ↔ Grams (`/weight/ounces-to-grams`)

### Length
- Inches ↔ Centimeters (`/length/inches-to-centimeters`)
- Feet ↔ Meters (`/length/feet-to-meters`)

### Temperature
- Fahrenheit ↔ Celsius (`/temperature/fahrenheit-to-celsius`)

### Volume
- Liters ↔ Milliliters (`/volume/liters-to-milliliters`)
- Gallons ↔ Liters (`/volume/gallons-to-liters`)

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Package Manager**: npm

## 🎨 Design System

| Token | Color | Usage |
|-------|-------|-------|
| Background | `#FFFFFF` | Page background |
| Foreground | `#333333` | Primary text |
| Primary | `#4A90E2` | Buttons, links, accents |
| Secondary | `#7FA99B` | Success states, hover |
| Muted | `#F5F5F5` | Neutral backgrounds |

## 🏁 Getting Started

### Prerequisites

- Node.js 18+ 
- npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ConversionWebsite
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
ConversionWebsite/
├── .cursor/                 # Agent memory and documentation
│   ├── docs/               # Technical specs
│   ├── notes/              # Session notes, checklists
│   └── rules/              # Coding rules
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Homepage
│   │   ├── weight/         # Weight converters
│   │   ├── length/         # Length converters
│   │   ├── temperature/    # Temperature converters
│   │   └── volume/         # Volume converters
│   ├── components/
│   │   ├── layout/         # Header, Footer, AdPlaceholder
│   │   ├── converter/      # Converter components
│   │   └── home/           # Homepage components
│   └── lib/
│       └── conversions.ts  # Conversion logic and data
├── public/                 # Static assets
└── package.json
```

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🔮 Future Enhancements

- [ ] Full search with autocomplete
- [ ] More conversion categories (currency, data, time)
- [ ] Dark mode support
- [ ] User accounts and saved conversions
- [ ] Conversion history
- [ ] Copy result to clipboard

## 📄 License

MIT License - feel free to use this project for your own purposes.

---

Built with ❤️ using Next.js and Tailwind CSS
