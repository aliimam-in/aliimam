/**
 * Auto-generated logo component: Folder Root Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FolderRootOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FolderRootOutlineLogo = React.forwardRef<SVGSVGElement, FolderRootOutlineLogoProps>(
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
      <path d="M10 13a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M12 15v4" />
  <path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2" />
    </svg>
  )
);

FolderRootOutlineLogo.displayName = "FolderRootOutlineLogo";

export const FolderRootOutlineLogoMetadata = {
  id: "folder-root-outline",
  baseId: "folder-root-outline",
  variant: "default",
  name: "Folder Root Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FolderRootOutlineLogo;
