/**
 * Auto-generated logo component: Folder Open (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FolderOpenLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FolderOpenLogo = React.forwardRef<SVGSVGElement, FolderOpenLogoProps>(
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
      <path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2" />
    </svg>
  )
);

FolderOpenLogo.displayName = "FolderOpenLogo";

export const FolderOpenLogoMetadata = {
  id: "folder-open",
  baseId: "folder-open",
  variant: "default",
  name: "Folder Open",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FolderOpenLogo;
