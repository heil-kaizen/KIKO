# KIKO World 🌌

The official website for **Kiko**, the joy-bringing meme hero born from the Dream Box on the Solana blockchain.

<div align="center">
  <img src="https://raw.githubusercontent.com/heil-kaizen/KIKO/main/kiko%20main.webp" alt="Kiko Main" width="300" />
</div>

## 🚀 Overview

KIKO World is a modern, interactive web application designed to showcase the **$KIKO** meme coin ecosystem. It features a playful UI, 3D orbiting animations, a custom "hacker" terminal for interacting with Kiko, and a vibrant showcase of the Kiko collection.

The site is built to bridge the digital and real worlds, offering a glimpse into the lore of the Dream Box while providing essential information for the community.

## ✨ Features

- **3D Orbit Hero Section**: A stunning, interactive hero banner with floating elements orbiting the main Kiko character.
- **Kiko Terminal**: A custom-built chat interface mimicking a retro terminal.
  - **Crypto Slang Support**: Responds to `gm`, `gn`, `wagmi`, `lfg`, etc.
  - **Profanity Filter**: Playfully blocks bad words with Kiko-style warnings.
  - **Pre-made Q&A**: Instant answers to common questions about the project, roadmap, and buying instructions.
  - **Random "Kiko Mode"**: Fun, random responses for unrecognized inputs.
- **Story & Lore**: Dedicated sections explaining the background of Kiko and the Dream Box.
- **Collection Gallery**: A responsive grid displaying the Kiko visual assets.
- **Responsive Design**: Fully optimized for mobile and desktop using Tailwind CSS.
- **Smooth Animations**: Custom CSS animations for floating, blooming, and scrolling effects.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📦 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/heil-kaizen/KIKO.git
   cd KIKO
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`.

4. **Build for production**
   ```bash
   npm run build
   ```

## 📂 Project Structure

```text
├── components/          # React components
│   ├── AboutSection.tsx # Story and About content
│   ├── CollectionSection.tsx # Grid gallery of Kiko images
│   ├── GlassButton.tsx  # Reusable styled button
│   ├── KikoTerminal.tsx # Chat interface logic and UI
│   ├── Navbar.tsx       # Navigation bar
│   └── Orbit3D.tsx      # 3D Hero section animation
├── constants.ts         # Configuration for text, links, bad words, and terminal responses
├── App.tsx              # Main application layout
├── index.html           # HTML entry point with Tailwind config
└── index.tsx            # React entry point
```

## ⚙️ Customization

### Terminal Logic
You can modify the chat bot's behavior in `constants.ts`:
- **`TERMINAL_RESPONSES`**: Add specific Question & Answer pairs.
- **`BAD_WORDS`**: Update the list of filtered profanity.
- **`KIKO_RANDOM_RESPONSES`**: Add more random fallback answers for the "Kiko Mode".

### Assets
Images are loaded from remote URLs defined in `constants.ts`. To use your own images, update the links in the `KIKO_ASSETS` object.

## 📄 License

This project is open source.
