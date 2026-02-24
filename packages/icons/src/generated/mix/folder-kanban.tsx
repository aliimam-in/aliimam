/**
 * Auto-generated logo component: Folder Kanban (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FolderKanbanLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FolderKanbanLogo = React.forwardRef<SVGSVGElement, FolderKanbanLogoProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
  <path d="M8 10v4" />
  <path d="M12 10v2" />
  <path d="M16 10v6" />
    </svg>
  )
);

FolderKanbanLogo.displayName = "FolderKanbanLogo";

export const FolderKanbanLogoMetadata = {
  id: "folder-kanban",
  baseId: "folder-kanban",
  variant: "default",
  name: "Folder Kanban",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FolderKanbanLogo;
