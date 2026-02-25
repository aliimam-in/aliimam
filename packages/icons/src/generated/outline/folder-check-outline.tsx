/**
 * Auto-generated logo component: Folder Check Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FolderCheckOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FolderCheckOutlineLogo = React.forwardRef<SVGSVGElement, FolderCheckOutlineLogoProps>(
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
      <path d="M11 19h-6a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v4" />
  <path d="M15 19l2 2l4 -4" />
    </svg>
  )
);

FolderCheckOutlineLogo.displayName = "FolderCheckOutlineLogo";

export const FolderCheckOutlineLogoMetadata = {
  id: "folder-check-outline",
  baseId: "folder-check-outline",
  variant: "default",
  name: "Folder Check Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FolderCheckOutlineLogo;
