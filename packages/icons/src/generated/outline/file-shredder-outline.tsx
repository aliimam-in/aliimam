/**
 * Auto-generated logo component: File Shredder Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileShredderOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileShredderOutlineLogo = React.forwardRef<SVGSVGElement, FileShredderOutlineLogoProps>(
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
  <path d="M3 12l18 0" />
  <path d="M6 16l0 2" />
  <path d="M10 16l0 6" />
  <path d="M14 16l0 2" />
  <path d="M18 16l0 4" />
    </svg>
  )
);

FileShredderOutlineLogo.displayName = "FileShredderOutlineLogo";

export const FileShredderOutlineLogoMetadata = {
  id: "file-shredder-outline",
  baseId: "file-shredder-outline",
  variant: "default",
  name: "File Shredder Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileShredderOutlineLogo;
