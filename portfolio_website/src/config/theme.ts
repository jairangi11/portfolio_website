export const themeConfig = {
  name: "Jay Rangi Portfolio",
  description: "Product Manager specializing in AI-powered solutions",
  colors: {
    primary: "purple",
    background: {
      light: "#f6f7fe", // Very light purple/blue tint
      dark: "#121420"    // Dark blue-gray
    },
    text: {
      light: "#1a1b25", // Dark blue-gray for text
      dark: "#f6f7fe"   // Light purple/blue for dark mode text
    },
    accent: {
      main: "#7c3aed", // Purple for main accent
      secondary: "#c084fc" // Lighter purple for secondary accent
    }
  },
  fonts: {
    main: "Inter, sans-serif",
    heading: "Inter, sans-serif"
  },
  animations: {
    fast: "150ms",
    medium: "300ms",
    slow: "500ms"
  },
  spacing: {
    page: {
      sm: "1rem",
      md: "2rem",
      lg: "4rem"
    }
  },
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px"
  },
  shadows: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)"
  },
  neumorphism: {
    light: "12px 12px 24px #e0e1f0, -12px -12px 24px #fcfdff",
    dark: "12px 12px 24px #0c0e16, -12px -12px 24px #181a2a"
  },
  glassmorphism: {
    light: "rgba(255, 255, 255, 0.15)",
    dark: "rgba(20, 20, 30, 0.7)"
  }
}; 