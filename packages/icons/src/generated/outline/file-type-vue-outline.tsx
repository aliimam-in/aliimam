/**
 * Auto-generated logo component: File Type Vue Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileTypeVueOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileTypeVueOutlineLogo = React.forwardRef<SVGSVGElement, FileTypeVueOutlineLogoProps>(
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
  <path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" />
  <path d="M4 15l2 6l2 -6" />
  <path d="M11 15v4.5a1.5 1.5 0 0 0 3 0v-4.5" />
  <path d="M20 15h-3v6h3" />
  <path d="M17 18h2" />
    </svg>
  )
);

FileTypeVueOutlineLogo.displayName = "FileTypeVueOutlineLogo";

export const FileTypeVueOutlineLogoMetadata = {
  id: "file-type-vue-outline",
  baseId: "file-type-vue-outline",
  variant: "default",
  name: "File Type Vue Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileTypeVueOutlineLogo;
