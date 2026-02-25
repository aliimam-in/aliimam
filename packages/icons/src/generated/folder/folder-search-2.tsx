/**
 * Auto-generated logo component: Folder Search 2 (default)
 * Category: folder
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FolderSearch2LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FolderSearch2Logo = React.forwardRef<SVGSVGElement, FolderSearch2LogoProps>(
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
      <circle cx="11.5" cy="12.5" r="2.5" />
  <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
  <path d="M13.3 14.3 15 16" />
    </svg>
  )
);

FolderSearch2Logo.displayName = "FolderSearch2Logo";

export const FolderSearch2LogoMetadata = {
  id: "folder-search-2",
  baseId: "folder-search-2",
  variant: "default",
  name: "Folder Search 2",
  category: "folder",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FolderSearch2Logo;
