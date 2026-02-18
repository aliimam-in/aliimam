export interface Pattern {
  id: string
  name: string
  category:
    | "gradients"
    | "mesh"
    | "layered"
    | "lines"
    | "dots"
    | "textures"
    | "abstract"
  badge?: "New" | "Popular" | string
  render?: () => React.ReactNode
}
