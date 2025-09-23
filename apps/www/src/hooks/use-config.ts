import { useAtom } from "jotai"
import { atomWithStorage } from "jotai/utils"

type Config = {
  style: "default"
  packageManager: "npm" | "yarn" | "pnpm" | "bun"
  installationType: "cli" | "manual"
  radius: number 
}

const configAtom = atomWithStorage<Config>("config", {
  style: "default",
  packageManager: "pnpm",
  radius: 1,
  installationType: "cli",
})

export function useConfig() {
  return useAtom(configAtom)
}
 