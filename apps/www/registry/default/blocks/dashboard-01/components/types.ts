export interface App {
  name: string
  icon: React.ReactNode
  description: string
  category: string
  recent: boolean
  new: boolean
  progress: number
}

export interface RecentFile {
  name: string
  app: string
  modified: string
  icon: React.ReactNode
  shared: boolean
  size: string
  collaborators: number
}

export interface Project {
  name: string
  description: string
  progress: number
  dueDate: string
  members: number
  files: number
}

export interface Tutorial {
  title: string
  description: string
  duration: string
  level: string
  instructor: string
  category: string
  views: string
}

export interface CommunityPost {
  title: string
  author: string
  likes: number
  comments: number
  image: string
  time: string
}

export interface SidebarItem {
  title: string
  icon: React.ReactNode
  isActive?: boolean
  badge?: string
  items?: {
    title: string
    url: string
    badge?: string
  }[]
}
