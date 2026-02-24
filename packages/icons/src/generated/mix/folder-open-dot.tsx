/**
 * Auto-generated logo component: Folder Open Dot (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FolderOpenDotLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FolderOpenDotLogo = React.forwardRef<SVGSVGElement, FolderOpenDotLogoProps>(
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
      <path d="m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2" />
  <circle cx="14" cy="15" r="1" />
    </svg>
  )
);

FolderOpenDotLogo.displayName = "FolderOpenDotLogo";

export const FolderOpenDotLogoMetadata = {
  id: "folder-open-dot",
  baseId: "folder-open-dot",
  variant: "default",
  name: "Folder Open Dot",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FolderOpenDotLogo;
