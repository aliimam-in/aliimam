 
export interface Pattern {
  id: string
  name: string
  category:
    | "gradients"
    | "mesh"
    | "layered"
    | "effects"
    | "abstract"
    | "geometric"
    | "organic"
    | "retro"
    | "neon"
    | "textures"
    | "nature"
    | "dark"
    | "minimal"
  badge?: "New" | "Popular" | string
  render?: () => React.ReactNode
}