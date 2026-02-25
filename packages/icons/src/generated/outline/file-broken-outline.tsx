/**
 * Auto-generated logo component: File Broken Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileBrokenOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileBrokenOutlineLogo = React.forwardRef<SVGSVGElement, FileBrokenOutlineLogoProps>(
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
      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
  <path d="M5 7v-2a2 2 0 0 1 2 -2h7l5 5v2" />
  <path d="M19 19a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2" />
  <path d="M5 16h.01" />
  <path d="M5 13h.01" />
  <path d="M5 10h.01" />
  <path d="M19 13h.01" />
  <path d="M19 16h.01" />
    </svg>
  )
);

FileBrokenOutlineLogo.displayName = "FileBrokenOutlineLogo";

export const FileBrokenOutlineLogoMetadata = {
  id: "file-broken-outline",
  baseId: "file-broken-outline",
  variant: "default",
  name: "File Broken Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileBrokenOutlineLogo;
