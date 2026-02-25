/**
 * Auto-generated logo component: Folder Symlink Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FolderSymlinkOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FolderSymlinkOutlineLogo = React.forwardRef<SVGSVGElement, FolderSymlinkOutlineLogoProps>(
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
      <path d="M3 21v-4a3 3 0 0 1 3 -3h5" />
  <path d="M8 17l3 -3l-3 -3" />
  <path d="M3 11v-5a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8" />
    </svg>
  )
);

FolderSymlinkOutlineLogo.displayName = "FolderSymlinkOutlineLogo";

export const FolderSymlinkOutlineLogoMetadata = {
  id: "folder-symlink-outline",
  baseId: "folder-symlink-outline",
  variant: "default",
  name: "Folder Symlink Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FolderSymlinkOutlineLogo;
