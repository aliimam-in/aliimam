/**
 * Auto-generated logo component: Folder Lock (default)
 * Category: folder
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FolderLockLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FolderLockLogo = React.forwardRef<SVGSVGElement, FolderLockLogoProps>(
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
      <rect width="8" height="5" x="14" y="17" rx="1" />
  <path d="M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5" />
  <path d="M20 17v-2a2 2 0 1 0-4 0v2" />
    </svg>
  )
);

FolderLockLogo.displayName = "FolderLockLogo";

export const FolderLockLogoMetadata = {
  id: "folder-lock",
  baseId: "folder-lock",
  variant: "default",
  name: "Folder Lock",
  category: "folder",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FolderLockLogo;
