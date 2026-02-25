/**
 * Auto-generated logo component: File Type Xls Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileTypeXlsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileTypeXlsOutlineLogo = React.forwardRef<SVGSVGElement, FileTypeXlsOutlineLogoProps>(
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
  <path d="M4 15l4 6" />
  <path d="M4 21l4 -6" />
  <path d="M17 20.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75" />
  <path d="M11 15v6h3" />
    </svg>
  )
);

FileTypeXlsOutlineLogo.displayName = "FileTypeXlsOutlineLogo";

export const FileTypeXlsOutlineLogoMetadata = {
  id: "file-type-xls-outline",
  baseId: "file-type-xls-outline",
  variant: "default",
  name: "File Type Xls Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileTypeXlsOutlineLogo;
