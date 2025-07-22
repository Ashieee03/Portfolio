/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors
        brand: {
          primary: "var(--color-brand-primary)",
          secondary: "var(--color-brand-secondary)",
          accent: "var(--color-brand-accent)",
          muted: "var(--color-brand-muted)",
        },
        // Brand palette with intensity variations
        forest: {
          50: "var(--color-forest-50)",
          100: "var(--color-forest-100)",
          200: "var(--color-forest-200)",
          300: "var(--color-forest-300)",
          400: "var(--color-forest-400)",
          500: "var(--color-forest-500)",
          600: "var(--color-forest-600)",
          700: "var(--color-forest-700)",
          800: "var(--color-forest-800)",
          900: "var(--color-forest-900)",
          950: "var(--color-forest-950)",
        },
        moss: {
          50: "var(--color-moss-50)",
          100: "var(--color-moss-100)",
          200: "var(--color-moss-200)",
          300: "var(--color-moss-300)",
          400: "var(--color-moss-400)",
          500: "var(--color-moss-500)",
          600: "var(--color-moss-600)",
          700: "var(--color-moss-700)",
          800: "var(--color-moss-800)",
          900: "var(--color-moss-900)",
        },
        earth: {
          50: "var(--color-earth-50)",
          100: "var(--color-earth-100)",
          200: "var(--color-earth-200)",
          300: "var(--color-earth-300)",
          400: "var(--color-earth-400)",
          500: "var(--color-earth-500)",
          600: "var(--color-earth-600)",
          700: "var(--color-earth-700)",
          800: "var(--color-earth-800)",
          900: "var(--color-earth-900)",
        },
        // Semantic colors
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        error: "var(--color-error)",
        info: "var(--color-info)",
        // System UI colors (preserving shadcn-ui variables)
        "forest-green": "var(--forest-green)",
        "gray-25": "var(--gray-25)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        serif: ["var(--font-serif)", "ui-serif", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        heading: ["var(--font-heading)", "var(--font-sans)"],
        body: ["var(--font-body)", "var(--font-sans)"],
      },
      fontSize: {
        // Custom type scale
        'display-1': ['var(--font-size-display-1)', { lineHeight: 'var(--line-height-display-1)' }],
        'display-2': ['var(--font-size-display-2)', { lineHeight: 'var(--line-height-display-2)' }],
        'heading-1': ['var(--font-size-heading-1)', { lineHeight: 'var(--line-height-heading-1)' }],
        'heading-2': ['var(--font-size-heading-2)', { lineHeight: 'var(--line-height-heading-2)' }],
        'heading-3': ['var(--font-size-heading-3)', { lineHeight: 'var(--line-height-heading-3)' }],
        'heading-4': ['var(--font-size-heading-4)', { lineHeight: 'var(--line-height-heading-4)' }],
        'body-lg': ['var(--font-size-body-lg)', { lineHeight: 'var(--line-height-body-lg)' }],
        'body': ['var(--font-size-body)', { lineHeight: 'var(--line-height-body)' }],
        'body-sm': ['var(--font-size-body-sm)', { lineHeight: 'var(--line-height-body-sm)' }],
        'caption': ['var(--font-size-caption)', { lineHeight: 'var(--line-height-caption)' }],
      },
      borderRadius: {
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)",
        xs: "var(--radius-xs)",
        DEFAULT: "var(--radius)",
      },
      boxShadow: {
        'sm': 'var(--shadow-sm)',
        DEFAULT: 'var(--shadow)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
        'xl': 'var(--shadow-xl)',
        '2xl': 'var(--shadow-2xl)',
        'inner': 'var(--shadow-inner)',
      },
      spacing: {
        // Spacing scale
        'xs': 'var(--space-xs)',
        'sm': 'var(--space-sm)',
        'md': 'var(--space-md)',
        'lg': 'var(--space-lg)',
        'xl': 'var(--space-xl)',
        '2xl': 'var(--space-2xl)',
        '3xl': 'var(--space-3xl)',
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "fade-out": "fade-out 0.5s ease-out",
        "slide-in": "slide-in 0.3s ease-out",
        "slide-out": "slide-out 0.3s ease-out",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "slide-in": {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-out": {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(10px)", opacity: "0" },
        },
      },
    },
    container: { 
      center: true, 
      padding: {
        DEFAULT: 'var(--container-padding, 1rem)',
        sm: 'var(--container-padding-sm, 1.5rem)',
        lg: 'var(--container-padding-lg, 2rem)',
      },
      screens: { 
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': 'var(--container-max-width, 1400px)' 
      } 
    },
  },
  plugins: [
    // Add plugins as needed: require('@tailwindcss/typography'), require('@tailwindcss/forms')
  ],
  darkMode: ["class"],
};

