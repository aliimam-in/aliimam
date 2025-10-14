"use server"

import fs from "fs"
import path from "path"
 
export async function getComponentsCount(exts: string[] = []) {
  const componentsDir = path.join(process.cwd(), "registry/default/example")

  function readDirRecursive(dir: string): string[] {
    let files: string[] = []
    const entries = fs.readdirSync(dir, { withFileTypes: true })

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        files = files.concat(readDirRecursive(fullPath))
      } else {
        if (exts.length === 0 || exts.includes(path.extname(entry.name))) {
          files.push(fullPath)
        }
      }
    }

    return files
  }

  const allFiles = readDirRecursive(componentsDir)
  return allFiles.length
}

export async function getBlocksCount(exts: string[] = []) {
  const componentsDir = path.join(process.cwd(), "registry/default/blocks")

  function readDirRecursive(dir: string): string[] {
    let files: string[] = []
    const entries = fs.readdirSync(dir, { withFileTypes: true })

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        files = files.concat(readDirRecursive(fullPath))
      } else {
        if (exts.length === 0 || exts.includes(path.extname(entry.name))) {
          files.push(fullPath)
        }
      }
    }

    return files
  }

  const allFiles = readDirRecursive(componentsDir)
  return allFiles.length
}
