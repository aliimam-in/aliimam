/**
 * Auto-generated logo component: Folder Symlink (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FolderSymlinkLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FolderSymlinkLogo = React.forwardRef<SVGSVGElement, FolderSymlinkLogoProps>(
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
      <path d="M2 9.35V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7" />
  <path d="m8 16 3-3-3-3" />
    </svg>
  )
);

FolderSymlinkLogo.displayName = "FolderSymlinkLogo";

export const FolderSymlinkLogoMetadata = {
  id: "folder-symlink",
  baseId: "folder-symlink",
  variant: "default",
  name: "Folder Symlink",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FolderSymlinkLogo;
