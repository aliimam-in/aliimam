export type ThemePreset = {
  name: string
  theme: string
  font: string
  radius: string
}

export const THEME_PRESETS: ThemePreset[] = [
  /* ---------------- Core ---------------- */
  {
    name: "Default",
    theme: "neutral",
    font: "geist-sans",
    radius: "0.5",
  },
  {
    name: "Soft",
    theme: "blue",
    font: "inter",
    radius: "1",
  },
  {
    name: "Sharp",
    theme: "slate",
    font: "geist-mono",
    radius: "0.25",
  },

  /* ---------------- Playful / Creative ---------------- */
  {
    name: "Playful",
    theme: "pink",
    font: "poppins",
    radius: "1.25",
  },
  {
    name: "Candy",
    theme: "rose",
    font: "nunito",
    radius: "1.5",
  },
  {
    name: "Vibrant",
    theme: "orange",
    font: "montserrat",
    radius: "1",
  },

  /* ---------------- Elegant / Editorial ---------------- */
  {
    name: "Elegant",
    theme: "purple",
    font: "playfair-display",
    radius: "0.75",
  },
  {
    name: "Editorial",
    theme: "zinc",
    font: "lora",
    radius: "0.5",
  },
  {
    name: "Luxury",
    theme: "neutral",
    font: "eb-garamond",
    radius: "0.4",
  },

  /* ---------------- Product / SaaS ---------------- */
  {
    name: "SaaS Blue",
    theme: "blue",
    font: "inter",
    radius: "0.6",
  },
  {
    name: "Startup",
    theme: "emerald",
    font: "dm-sans",
    radius: "0.75",
  },
  {
    name: "Corporate",
    theme: "slate",
    font: "roboto",
    radius: "0.4",
  },

  /* ---------------- Dev / Technical ---------------- */
  {
    name: "Developer",
    theme: "zinc",
    font: "jetbrains-mono",
    radius: "0.25",
  },
  {
    name: "Terminal",
    theme: "neutral",
    font: "source-code-pro",
    radius: "0.2",
  },

  /* ---------------- Warm / Friendly ---------------- */
  {
    name: "Friendly",
    theme: "teal",
    font: "work-sans",
    radius: "1",
  },
  {
    name: "Calm",
    theme: "cyan",
    font: "manrope",
    radius: "0.9",
  },

  /* ---------------- Marketing / Display ---------------- */
  {
    name: "Hero",
    theme: "indigo",
    font: "sora",
    radius: "1.1",
  },
  {
    name: "Poster",
    theme: "fuchsia",
    font: "bebas-neue",
    radius: "0.8",
  },
]


export const COLOR_OPTIONS = [
  "blue",
  "green",
  "red",
  "yellow",
  "amber",
  "orange",
  "rose",
  "pink",
  "purple",
  "violet",
  "fuchsia",
  "indigo",
  "teal",
  "cyan",
  "emerald",
  "slate",
  "zinc",
  "neutral",
]

// font-options.ts

export type FontOption = {
  name: string
  value: string
  category: "sans" | "serif" | "mono" | "display"
}

export const FONT_OPTIONS: FontOption[] = [
  /* ---------------- Sans Serif ---------------- */
  { name: "Geist", value: "geist-sans", category: "sans" },
  { name: "Inter", value: "inter", category: "sans" },
  { name: "Roboto", value: "roboto", category: "sans" },
  { name: "Open Sans", value: "open-sans", category: "sans" },
  { name: "Lato", value: "lato", category: "sans" },
  { name: "Montserrat", value: "montserrat", category: "sans" },
  { name: "Poppins", value: "poppins", category: "sans" },
  { name: "Nunito", value: "nunito", category: "sans" },
  { name: "Raleway", value: "raleway", category: "sans" },
  { name: "Ubuntu", value: "ubuntu", category: "sans" },
  { name: "Work Sans", value: "work-sans", category: "sans" },
  { name: "DM Sans", value: "dm-sans", category: "sans" },
  { name: "Plus Jakarta Sans", value: "plus-jakarta-sans", category: "sans" },
  { name: "Manrope", value: "manrope", category: "sans" },

  /* ---------------- Serif ---------------- */
  { name: "Playfair Display", value: "playfair-display", category: "serif" },
  { name: "Merriweather", value: "merriweather", category: "serif" },
  { name: "Lora", value: "lora", category: "serif" },
  { name: "PT Serif", value: "pt-serif", category: "serif" },
  { name: "Crimson Text", value: "crimson-text", category: "serif" },
  { name: "EB Garamond", value: "eb-garamond", category: "serif" },
  { name: "Libre Baskerville", value: "libre-baskerville", category: "serif" },
  { name: "Source Serif 4", value: "source-serif-4", category: "serif" },

  /* ---------------- Monospace ---------------- */
  { name: "Geist Mono", value: "geist-mono", category: "mono" },
  { name: "JetBrains Mono", value: "jetbrains-mono", category: "mono" },
  { name: "Source Code Pro", value: "source-code-pro", category: "mono" },
  { name: "IBM Plex Mono", value: "ibm-plex-mono", category: "mono" },
  { name: "Inconsolata", value: "inconsolata", category: "mono" },
  { name: "Fira Code", value: "fira-code", category: "mono" },

  /* ---------------- Display / Fun ---------------- */
  { name: "Bebas Neue", value: "bebas-neue", category: "display" },
  { name: "Righteous", value: "righteous", category: "display" },
  { name: "Pacifico", value: "pacifico", category: "display" },
  { name: "Dancing Script", value: "dancing-script", category: "display" },
  { name: "Sora", value: "sora", category: "display" },
]
 
export const FONT_VARIABLE_MAP: Record<
  FontOption["category"],
  string
> = {
  sans: "--font-sans",
  serif: "--font-serif",
  mono: "--font-mono",
  display: "--font-display",
}

export function getFontVariable(fontValue: string): string {
  const font = FONT_OPTIONS.find(f => f.value === fontValue)
  return FONT_VARIABLE_MAP[font?.category ?? "sans"]
}


export const GOOGLE_FONTS_MAP: Record<string, string> = {
  "geist-sans": "Geist",
  "inter": "Inter",
  "roboto": "Roboto",
  "open-sans": "Open Sans",
  "lato": "Lato",
  "montserrat": "Montserrat",
  "poppins": "Poppins",
  "nunito": "Nunito",
  "raleway": "Raleway",
  "ubuntu": "Ubuntu",
  "work-sans": "Work Sans",
  "dm-sans": "DM Sans",
  "plus-jakarta-sans": "Plus Jakarta Sans",
  "manrope": "Manrope",

  "playfair-display": "Playfair Display",
  "merriweather": "Merriweather",
  "lora": "Lora",
  "pt-serif": "PT Serif",
  "crimson-text": "Crimson Text",
  "eb-garamond": "EB Garamond",
  "libre-baskerville": "Libre Baskerville",
  "source-serif-4": "Source Serif 4",

  "geist-mono": "Geist Mono",
  "jetbrains-mono": "JetBrains Mono",
  "source-code-pro": "Source Code Pro",
  "ibm-plex-mono": "IBM Plex Mono",
  "inconsolata": "Inconsolata",
  "fira-code": "Fira Code",

  "bebas-neue": "Bebas Neue",
  "righteous": "Righteous",
  "pacifico": "Pacifico",
  "dancing-script": "Dancing Script",
  "sora": "Sora",
}
