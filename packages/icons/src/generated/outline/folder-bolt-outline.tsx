/**
 * Auto-generated logo component: Folder Bolt Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FolderBoltOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FolderBoltOutlineLogo = React.forwardRef<SVGSVGElement, FolderBoltOutlineLogoProps>(
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
      <path d="M13 19h-8a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v3.5" />
  <path d="M19 16l-2 3h4l-2 3" />
    </svg>
  )
);

FolderBoltOutlineLogo.displayName = "FolderBoltOutlineLogo";

export const FolderBoltOutlineLogoMetadata = {
  id: "folder-bolt-outline",
  baseId: "folder-bolt-outline",
  variant: "default",
  name: "Folder Bolt Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FolderBoltOutlineLogo;
