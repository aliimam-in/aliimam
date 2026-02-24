"use client"

import Link from "next/link"
import type { BundledLanguage } from "@/src/components/ui/code-block"
import {
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockFilename,
  CodeBlockFiles,
  CodeBlockHeader,
  CodeBlockItem,
} from "@/src/components/ui/code-block"
import { Figma } from "@aliimam/logos"

import { Button } from "@/registry/aliimam/ui/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/aliimam/ui/tabs"

import { ContentCopyButton } from "../copy-button"

interface IconCodeProps {
  iconName: string
  size?: number
  color?: string 
  variant: "icon" | "wordmark" 
}

export function LogoCode({
  iconName,
  size = 24,
  color = "currentColor", 
  variant,
}: IconCodeProps) {
  function toPascalCase(name: string) {
    return name
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("")
  }

  const componentName = toPascalCase(iconName)

  // Define all tabs with language and content
  const tabs = [
    {
      value: "vanilla",
      label: "Vanilla",
      language: "html",
      filename: `${iconName}.html`,
      content: `<script>
import { createIcons, ${componentName} } from '@aliimam/icons';

createIcons({
  icons: {
    ${componentName}
  }
});
</script>

<i data-icon="${iconName}"></i>`,
    },
    {
      value: "react",
      label: "React",
      language: "tsx",
      filename: `${iconName}.tsx`,
      content: `import { ${componentName} } from '@aliimam/icons';

const App = () => {
  return (
    <${componentName} size={${size}} color="${color}"${
      variant === "icon" 
    } />
  );
};

export default App;`,
    },
    {
      value: "vue",
      label: "Vue",
      language: "vue",
      filename: `${iconName}.vue`,
      content: `<script setup>
import { ${componentName} } from '@aliimam/icons';
</script>

<template>
  <${componentName} />
</template>`,
    },
    {
      value: "svelte",
      label: "Svelte",
      language: "svelte",
      filename: `${iconName}.svelte`,
      content: `<script>
import { ${componentName} } from '@aliimam/icons';
</script>

<${componentName} />`,
    },
    {
      value: "preact",
      label: "Preact",
      language: "tsx",
      filename: `${iconName}.tsx`,
      content: `import { ${componentName} } from '@aliimam/icons';

const App = () => {
  return (
    <${componentName} />
  );
};

export default App;`,
    },
    {
      value: "solid",
      label: "Solid",
      language: "tsx",
      filename: `${iconName}.tsx`,
      content: `import { ${componentName} } from '@aliimam/icons';

const App = () => {
  return (
    <${componentName} />
  );
};

export default App;`,
    },
    {
      value: "angular",
      label: "Angular",
      language: "ts",
      filename: `app.module.ts`,
      content: `// app.module.ts
import { AliImamAngularModule, ${componentName} } from '@aliimam/icons';

@NgModule({
  imports: [
    AliImamAngularModule.pick({ ${componentName} })
  ],
})

// app.component.html
<aliimam name="${iconName}"></aliimam>`,
    },
    {
      value: "icon-font",
      label: "Icon Font",
      language: "html",
      filename: `${iconName}.html`,
      content: `<div class="icon-${iconName}"></div>`,
    },
  ]

  return (
    <Tabs defaultValue="react" className="h-full w-full">
      <div className="flex gap-2 justify-between">
        <TabsList className="no-scrollbar w-full overflow-x-auto">
          {tabs.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="hidden md:flex justify-end gap-2">
          <Button asChild variant={"outline"} >
            <Link
              target="_blank"
              href={
                "https://www.figma.com/community/file/1553397064284560809/ai-icons"
              }
            >
              <Figma /> Open in Figma
            </Link>
          </Button>

          <ContentCopyButton
            className="font-mono text-xs"
            value={"npm i @aliimam/icons"}
          />
          <Button className="" asChild variant={"outline"} >
            <Link href={"/docs/icons/introduction"}>See Docs</Link>
          </Button>
        </div>
      </div>

      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          <div className="relative h-90 w-full">
            <CodeBlock
              data={[
                {
                  language: tab.language,
                  filename: tab.filename,
                  code: tab.content,
                },
              ]}
              defaultValue={tab.language}
            >
              <CodeBlockHeader>
                <CodeBlockFiles>
                  {(item) => (
                    <CodeBlockFilename
                      key={item.language}
                      value={item.language}
                    >
                      {item.filename}
                    </CodeBlockFilename>
                  )}
                </CodeBlockFiles>
                <CodeBlockCopyButton
                  onCopy={() => console.log("Copied code to clipboard")}
                  onError={() => console.error("Failed to copy code")}
                />
              </CodeBlockHeader>

              <CodeBlockBody>
                {(item) => (
                  <CodeBlockItem key={item.language} value={item.language}>
                    <CodeBlockContent
                      language={item.language as BundledLanguage}
                    >
                      {item.code}
                    </CodeBlockContent>
                  </CodeBlockItem>
                )}
              </CodeBlockBody>
            </CodeBlock>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}
