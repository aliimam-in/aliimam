/**
 * Auto-generated logo component: Folder Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FolderOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FolderOffOutlineLogo = React.forwardRef<SVGSVGElement, FolderOffOutlineLogoProps>(
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
      <path d="M8 4h1l3 3h7a2 2 0 0 1 2 2v8m-2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 1.189 -1.829" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

FolderOffOutlineLogo.displayName = "FolderOffOutlineLogo";

export const FolderOffOutlineLogoMetadata = {
  id: "folder-off-outline",
  baseId: "folder-off-outline",
  variant: "default",
  name: "Folder Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FolderOffOutlineLogo;
