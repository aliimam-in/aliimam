/**
 * Auto-generated logo component: Folder Exclamation Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FolderExclamationOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FolderExclamationOutlineLogo = React.forwardRef<SVGSVGElement, FolderExclamationOutlineLogoProps>(
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
      <path d="M15 19h-10a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v3.5" />
  <path d="M19 16v3" />
  <path d="M19 22v.01" />
    </svg>
  )
);

FolderExclamationOutlineLogo.displayName = "FolderExclamationOutlineLogo";

export const FolderExclamationOutlineLogoMetadata = {
  id: "folder-exclamation-outline",
  baseId: "folder-exclamation-outline",
  variant: "default",
  name: "Folder Exclamation Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FolderExclamationOutlineLogo;
