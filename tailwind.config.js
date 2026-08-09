/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Civic-trust Core
        "primary": "#0A2647", 
        "primary-container": "#144272", 
        "on-primary": "#ffffff",
        "on-primary-container": "#e0f2fe",
        
        "secondary": "#205295",
        "secondary-container": "#2C74B3",
        "on-secondary": "#ffffff",
        "on-secondary-container": "#e0f2fe",

        "accent": "#F4A261",
        "accent-container": "#E76F51",
        
        // Severities
        "severity-low": "#2A9D8F",
        "severity-low-container": "#E8F5E9",
        "severity-medium": "#F4A261",
        "severity-medium-container": "#FFF3E0",
        "severity-critical": "#E76F51",
        "severity-critical-container": "#FFEBEE",
        "severity-resolved": "#264653",

        // Backgrounds & Surfaces
        "background": "#F8FAFC", 
        "on-background": "#0F172A", 
        "surface": "#ffffff", 
        "on-surface": "#1E293B", 
        "surface-variant": "#F1F5F9", 
        "on-surface-variant": "#475569", 
        "outline": "#94A3B8", 
        "outline-variant": "#CBD5E1", 
        
        // Retained for fallback
        "error": "#E76F51", 
        "error-container": "#FFEBEE", 
        "on-error": "#ffffff",
        "on-error-container": "#93000a",
      }, 
      borderRadius: {
        DEFAULT: "0.25rem", 
        "lg": "0.5rem", 
        "xl": "0.75rem", 
        "full": "9999px"
      }, 
      spacing: {
        "xs": "4px", 
        "unit": "4px", 
        "sm": "8px", 
        "container-max": "1280px", 
        "gutter": "24px", 
        "lg": "24px", 
        "xl": "40px", 
        "margin": "32px", 
        "md": "16px"
      }, 
      fontFamily: {
        "headline-lg-mobile": ["Outfit"], 
        "body-md": ["Inter"], 
        "label-md": ["Inter"], 
        "body-sm": ["Inter"], 
        "body-lg": ["Inter"], 
        "headline-lg": ["Outfit"], 
        "metric-lg": ["Outfit"], 
        "headline-md": ["Outfit"], 
        "display-lg": ["Outfit"], 
        "headline-sm": ["Outfit"], 
        "headline": ["Outfit"], 
        "display": ["Outfit"], 
        "body": ["Inter"], 
        "label": ["Arimo"]
      }, 
      fontSize: {
        "headline-lg-mobile": ["28px", {"lineHeight": "36px", "fontWeight": "600"}], 
        "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}], 
        "label-md": ["12px", {"lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "600"}], 
        "body-sm": ["14px", {"lineHeight": "20px", "fontWeight": "400"}], 
        "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}], 
        "headline-lg": ["32px", {"lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "600"}], 
        "metric-lg": ["36px", {"lineHeight": "44px", "letterSpacing": "0.02em", "fontWeight": "700"}], 
        "headline-md": ["24px", {"lineHeight": "32px", "fontWeight": "600"}], 
        "display-lg": ["48px", {"lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "700"}], 
        "headline-sm": ["20px", {"lineHeight": "28px", "fontWeight": "600"}]
      },
      keyframes: {
        pulseRing: {
          '0%': { transform: 'scale(1)', opacity: '1', boxShadow: '0 0 0 0 rgba(42, 157, 143, 0.4)' },
          '70%': { transform: 'scale(1.05)', opacity: '0.8', boxShadow: '0 0 0 10px rgba(42, 157, 143, 0)' },
          '100%': { transform: 'scale(1)', opacity: '1', boxShadow: '0 0 0 0 rgba(42, 157, 143, 0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      animation: {
        'pulse-ring': 'pulseRing 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
        'float': 'float 4s ease-in-out infinite'
      }
    }
  },
  plugins: [],
}
