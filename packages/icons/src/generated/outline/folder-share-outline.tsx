/**
 * Auto-generated logo component: Folder Share Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FolderShareOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FolderShareOutlineLogo = React.forwardRef<SVGSVGElement, FolderShareOutlineLogoProps>(
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
      <path d="M13 19h-8a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v4" />
  <path d="M16 22l5 -5" />
  <path d="M21 21.5v-4.5h-4.5" />
    </svg>
  )
);

FolderShareOutlineLogo.displayName = "FolderShareOutlineLogo";

export const FolderShareOutlineLogoMetadata = {
  id: "folder-share-outline",
  baseId: "folder-share-outline",
  variant: "default",
  name: "Folder Share Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FolderShareOutlineLogo;
