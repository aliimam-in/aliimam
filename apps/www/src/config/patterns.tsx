import { abstractPatterns } from "./abstract"
import { dotsPatterns } from "./dots"
import { gradientPatterns } from "./gradients"
import { layeredPatterns } from "./layered"
import { linePatterns } from "./lines"
import { meshPatterns } from "./mesh"

export const gridPatterns = [
  ...gradientPatterns,
  ...linePatterns,
  ...dotsPatterns,
  ...abstractPatterns,
  ...meshPatterns,
  ...layeredPatterns,
]
