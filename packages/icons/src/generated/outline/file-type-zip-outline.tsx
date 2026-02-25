/**
 * Auto-generated logo component: File Type Zip Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileTypeZipOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileTypeZipOutlineLogo = React.forwardRef<SVGSVGElement, FileTypeZipOutlineLogoProps>(
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
  <path d="M16 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6" />
  <path d="M12 15v6" />
  <path d="M5 15h3l-3 6h3" />
    </svg>
  )
);

FileTypeZipOutlineLogo.displayName = "FileTypeZipOutlineLogo";

export const FileTypeZipOutlineLogoMetadata = {
  id: "file-type-zip-outline",
  baseId: "file-type-zip-outline",
  variant: "default",
  name: "File Type Zip Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileTypeZipOutlineLogo;
