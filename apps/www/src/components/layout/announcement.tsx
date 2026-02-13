import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import {
  Announcement as AnnouncementBase,
  AnnouncementTag,
  AnnouncementTitle,
} from "@/src/components/ui/announcement"

export function Announcement() {
  return (
    <AnnouncementBase asChild>
      <Link href="/blocks#realtime-transcriber-01">
        <AnnouncementTag>Introducing</AnnouncementTag>
        <AnnouncementTitle>
          Scribe v2 Realtime <ArrowRightIcon className="size-3" />
        </AnnouncementTitle>
      </Link>
    </AnnouncementBase>
  )
}
