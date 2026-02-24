import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/generated/index.tsx"],  
  format: ["esm", "cjs"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ["react"]
})