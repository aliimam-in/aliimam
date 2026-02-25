/**
 * Auto-generated logo component: Folder Sync (default)
 * Category: folder
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FolderSyncLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FolderSyncLogo = React.forwardRef<SVGSVGElement, FolderSyncLogoProps>(
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
      <path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5" />
  <path d="M12 10v4h4" />
  <path d="m12 14 1.535-1.605a5 5 0 0 1 8 1.5" />
  <path d="M22 22v-4h-4" />
  <path d="m22 18-1.535 1.605a5 5 0 0 1-8-1.5" />
    </svg>
  )
);

FolderSyncLogo.displayName = "FolderSyncLogo";

export const FolderSyncLogoMetadata = {
  id: "folder-sync",
  baseId: "folder-sync",
  variant: "default",
  name: "Folder Sync",
  category: "folder",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FolderSyncLogo;
