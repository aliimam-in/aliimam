/**
 * Auto-generated logo component: File Type Jpg Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileTypeJpgOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileTypeJpgOutlineLogo = React.forwardRef<SVGSVGElement, FileTypeJpgOutlineLogoProps>(
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
  <path d="M11 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6" />
  <path d="M20 15h-1a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h1v-3" />
  <path d="M5 15h3v4.5a1.5 1.5 0 0 1 -3 0" />
    </svg>
  )
);

FileTypeJpgOutlineLogo.displayName = "FileTypeJpgOutlineLogo";

export const FileTypeJpgOutlineLogoMetadata = {
  id: "file-type-jpg-outline",
  baseId: "file-type-jpg-outline",
  variant: "default",
  name: "File Type Jpg Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileTypeJpgOutlineLogo;
