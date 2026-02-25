/**
 * Auto-generated logo component: File Sliders (default)
 * Category: file
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileSlidersLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileSlidersLogo = React.forwardRef<SVGSVGElement, FileSlidersLogoProps>(
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
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M8 12h8" />
  <path d="M10 11v2" />
  <path d="M8 17h8" />
  <path d="M14 16v2" />
    </svg>
  )
);

FileSlidersLogo.displayName = "FileSlidersLogo";

export const FileSlidersLogoMetadata = {
  id: "file-sliders",
  baseId: "file-sliders",
  variant: "default",
  name: "File Sliders",
  category: "file",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileSlidersLogo;
