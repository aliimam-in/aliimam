import { Browser } from "@/registry/default/components/browser"

export default function Component() {
  return (
    <div className="h-[620px]">
      <Browser
        initialUrl="https://aliimam.in"
        showWindowControls={true}
        showBookmarksBar={true}
        showStatusBar={true}
        enableTabManagement={true}
        enableBookmarks={true}
        enableHistory={true}
        enableDownloads={true}
        enableSettings={true}
        maxTabs={8}
        simulateLoading={true}
        loadingDuration={1500}
      />
    </div>
  )
}
