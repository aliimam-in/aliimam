/**
 * Auto-generated logo component: Files Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FilesOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FilesOutlineLogo = React.forwardRef<SVGSVGElement, FilesOutlineLogoProps>(
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
      <path d="M15 3v4a1 1 0 0 0 1 1h4" />
  <path d="M18 17h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h4l5 5v7a2 2 0 0 1 -2 2" />
  <path d="M16 17v2a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2" />
    </svg>
  )
);

FilesOutlineLogo.displayName = "FilesOutlineLogo";

export const FilesOutlineLogoMetadata = {
  id: "files-outline",
  baseId: "files-outline",
  variant: "default",
  name: "Files Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FilesOutlineLogo;
