// entry.tsx.ejs - Updated to handle category-based structure

// Export all icons from ai category
export { default as ArrowLeft } from "./general/ArrowLeft";
export { default as ArrowRight } from "./general/ArrowRight";
export { default as ArrowUp } from "./general/ArrowUp";
export { default as ArrowDown } from "./general/ArrowDown";
export { default as Cursor } from "./general/Cursor";
export { default as OpenAi } from "./general/OpenAi";
export { default as Vercel } from "./general/Vercel";
export { default as Google } from "./general/Google";

// Export category-specific bundles
export * as Ai from "./general";

// Re-export types
export type { IconProps } from "./types";
