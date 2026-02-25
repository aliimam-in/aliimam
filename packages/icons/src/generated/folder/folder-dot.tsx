/**
 * Auto-generated logo component: Folder Dot (default)
 * Category: folder
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FolderDotLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FolderDotLogo = React.forwardRef<SVGSVGElement, FolderDotLogoProps>(
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
  <circle cx="12" cy="13" r="1" />
    </svg>
  )
);

FolderDotLogo.displayName = "FolderDotLogo";

export const FolderDotLogoMetadata = {
  id: "folder-dot",
  baseId: "folder-dot",
  variant: "default",
  name: "Folder Dot",
  category: "folder",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FolderDotLogo;
