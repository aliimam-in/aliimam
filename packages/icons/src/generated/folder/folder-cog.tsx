/**
 * Auto-generated logo component: Folder Cog (default)
 * Category: folder
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FolderCogLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FolderCogLogo = React.forwardRef<SVGSVGElement, FolderCogLogoProps>(
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
      <path d="M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.98a2 2 0 0 1 1.69.9l.66 1.2A2 2 0 0 0 12 6h8a2 2 0 0 1 2 2v3.3" />
  <path d="m14.305 19.53.923-.382" />
  <path d="m15.228 16.852-.923-.383" />
  <path d="m16.852 15.228-.383-.923" />
  <path d="m16.852 20.772-.383.924" />
  <path d="m19.148 15.228.383-.923" />
  <path d="m19.53 21.696-.382-.924" />
  <path d="m20.772 16.852.924-.383" />
  <path d="m20.772 19.148.924.383" />
  <circle cx="18" cy="18" r="3" />
    </svg>
  )
);

FolderCogLogo.displayName = "FolderCogLogo";

export const FolderCogLogoMetadata = {
  id: "folder-cog",
  baseId: "folder-cog",
  variant: "default",
  name: "Folder Cog",
  category: "folder",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FolderCogLogo;
