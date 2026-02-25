/**
 * Auto-generated logo component: File Zip Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileZipOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileZipOutlineLogo = React.forwardRef<SVGSVGElement, FileZipOutlineLogoProps>(
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
      <path d="M6 20.735a2 2 0 0 1 -1 -1.735v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-1" />
  <path d="M11 17a2 2 0 0 1 2 2v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-2a2 2 0 0 1 2 -2" />
  <path d="M11 5l-1 0" />
  <path d="M13 7l-1 0" />
  <path d="M11 9l-1 0" />
  <path d="M13 11l-1 0" />
  <path d="M11 13l-1 0" />
  <path d="M13 15l-1 0" />
    </svg>
  )
);

FileZipOutlineLogo.displayName = "FileZipOutlineLogo";

export const FileZipOutlineLogoMetadata = {
  id: "file-zip-outline",
  baseId: "file-zip-outline",
  variant: "default",
  name: "File Zip Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileZipOutlineLogo;
