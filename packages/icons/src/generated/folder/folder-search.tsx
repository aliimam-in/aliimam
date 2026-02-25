/**
 * Auto-generated logo component: Folder Search (default)
 * Category: folder
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FolderSearchLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FolderSearchLogo = React.forwardRef<SVGSVGElement, FolderSearchLogoProps>(
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
      <path d="M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1" />
  <path d="m21 21-1.9-1.9" />
  <circle cx="17" cy="17" r="3" />
    </svg>
  )
);

FolderSearchLogo.displayName = "FolderSearchLogo";

export const FolderSearchLogoMetadata = {
  id: "folder-search",
  baseId: "folder-search",
  variant: "default",
  name: "Folder Search",
  category: "folder",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FolderSearchLogo;
